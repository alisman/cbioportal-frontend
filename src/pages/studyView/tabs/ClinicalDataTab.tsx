import * as React from 'react';
import {
    Column,
    default as LazyMobXTable,
    SortDirection,
} from 'shared/components/lazyMobXTable/LazyMobXTable';
import { observer } from 'mobx-react';
import _ from 'lodash';
import { getPatientViewUrl, getSampleViewUrl } from 'shared/api/urls';
import {
    chartMetaComparator,
    getClinicalAttributeOverlay,
    getUniqueKey,
    ChartMeta,
    SpecialChartsUniqueKeyEnum,
    DataType,
    getAllClinicalDataByStudyViewFilter,
} from '../StudyViewUtils';
import LoadingIndicator from 'shared/components/loadingIndicator/LoadingIndicator';
import { StudyViewPageStore } from 'pages/studyView/StudyViewPageStore';
import {
    DownloadControlOption,
    isUrl,
    remoteData,
} from 'cbioportal-frontend-commons';
import { Else, If, Then } from 'react-if';
import ProgressIndicator, {
    IProgressIndicatorItem,
} from '../../../shared/components/progressIndicator/ProgressIndicator';
import autobind from 'autobind-decorator';
import { WindowWidthBox } from '../../../shared/components/WindowWidthBox/WindowWidthBox';
import { getServerConfig } from 'config/config';
import { StudyViewPageTabKeyEnum } from '../StudyViewPageTabs';
import { makeObservable, observable, runInAction } from 'mobx';
import { Sample, StudyViewFilter } from 'cbioportal-ts-api-client';
import { SortConfig } from 'oncoprintjs';

export interface IClinicalDataTabTable {
    store: StudyViewPageStore;
}

class ClinicalDataTabTableComponent extends LazyMobXTable<{
    [id: string]: string;
}> {}

const CLINICAL_DATA_RECORD_LIMIT = 500;

type SortCriteria = {
    field: string | undefined;
    direction: SortDirection | undefined;
};

async function fetchClinicalDataForStudyViewClinicalDataTab(
    filters: StudyViewFilter,
    sampleSetByKey: { [sampleId: string]: Sample },
    searchTerm: string | undefined,
    sortCriteria: SortCriteria | undefined,
    recordLimit: number
) {
    let sampleClinicalDataResp = await getAllClinicalDataByStudyViewFilter(
        filters,
        searchTerm,
        sortCriteria,
        recordLimit
    );

    const sampleMap = _.mapValues(
        sampleClinicalDataResp.data,
        (attrs, uniqueSampleId) => {
            const sample = sampleSetByKey[uniqueSampleId];
            return {
                studyId: sample.studyId,
                patientId: sample.patientId,
                sampleId: sample.sampleId,
                ...attrs,
            };
        }
    );

    return {
        totalItems: sampleClinicalDataResp.totalItems,
        data: _.values(sampleMap),
    };
}

@observer
export class ClinicalDataTab extends React.Component<
    IClinicalDataTabTable,
    {}
> {
    constructor(props: IClinicalDataTabTable) {
        super(props);
        makeObservable(this);
    }

    getDefaultColumnConfig(
        key: string,
        columnName: string,
        isNumber?: boolean
    ) {
        return {
            name: columnName || '',
            headerRender: (data: string) => (
                <span data-test={data}>{data}</span>
            ),
            render: (data: { [id: string]: string }) => {
                if (isUrl(data[key])) {
                    return (
                        <a href={data[key]} target="_blank">
                            {data[key]}
                        </a>
                    );
                }
                return <span data-test={data[key]}>{data[key]}</span>;
            },
            download: (data: { [id: string]: string }) => data[key] || '',
            sortBy: (data: { [id: string]: any }) => {
                if (data[key]) {
                    if (isNumber) {
                        return parseFloat(data[key]);
                    } else {
                        return data[key];
                    }
                }
                return null;
            },
            filter: (
                data: { [id: string]: string },
                filterString: string,
                filterStringUpper: string
            ) => (data[key] || '').toUpperCase().includes(filterStringUpper),
        };
    }

    @observable clinicalDataTabSearchTerm: string | undefined = undefined;

    @observable clinicalDataSortCriteria: SortCriteria = {
        field: undefined,
        direction: undefined,
    };

    readonly getDataForClinicalDataTab = remoteData({
        await: () => [
            this.props.store.clinicalAttributes,
            this.props.store.selectedSamples,
            this.props.store.sampleSetByKey,
        ],
        onError: () => {},
        invoke: async () => {
            if (this.props.store.selectedSamples.result.length === 0) {
                return Promise.resolve({ totalItems: 0, data: [] });
            }
            // let sampleClinicalDataResp = await getAllClinicalDataByStudyViewFilter(
            //     this.props.store.filters,
            //     this.clinicalDataTabSearchTerm,
            //     this.clinicalDataSortCriteria,
            //     CLINICAL_DATA_RECORD_LIMIT
            // );
            //
            // const sampleClinicalDataArray = _.mapValues(
            //     sampleClinicalDataResp.data,
            //     (attrs, uniqueSampleId) => {
            //         const sample = this.props.store.sampleSetByKey.result![
            //             uniqueSampleId
            //         ];
            //         return {
            //             studyId: sample.studyId,
            //             patientId: sample.patientId,
            //             sampleId: sample.sampleId,
            //             ...attrs,
            //         };
            //     }
            // );
            const sampleClinicalDataResp = await fetchClinicalDataForStudyViewClinicalDataTab(
                this.props.store.filters,
                this.props.store.sampleSetByKey.result!,
                this.clinicalDataTabSearchTerm,
                this.clinicalDataSortCriteria,
                CLINICAL_DATA_RECORD_LIMIT
            );

            return {
                totalItems: sampleClinicalDataResp.totalItems,
                data: sampleClinicalDataResp.data,
            };
        },
    });

    readonly columns = remoteData({
        invoke: async () => {
            let defaultColumns: Column<{ [id: string]: string }>[] = [
                {
                    ...this.getDefaultColumnConfig('patientId', 'Patient ID'),
                    render: (data: { [id: string]: string }) => {
                        return (
                            <a
                                href={getPatientViewUrl(
                                    data.studyId,
                                    data.patientId
                                )}
                                target="_blank"
                            >
                                {data.patientId}
                            </a>
                        );
                    },
                },
                {
                    ...this.getDefaultColumnConfig('sampleId', 'Sample ID'),
                    render: (data: { [id: string]: string }) => {
                        return (
                            <a
                                href={getSampleViewUrl(
                                    data.studyId,
                                    data.sampleId
                                )}
                                target="_blank"
                            >
                                {data.sampleId}
                            </a>
                        );
                    },
                },
            ];

            if (
                _.find(
                    this.props.store.visibleAttributes,
                    chartMeta =>
                        chartMeta.uniqueKey ===
                        SpecialChartsUniqueKeyEnum.CANCER_STUDIES
                ) !== undefined
            ) {
                defaultColumns.push({
                    ...this.getDefaultColumnConfig('studyId', 'Cancer Study'),
                });
            }
            return _.reduce(
                this.props.store.visibleAttributes.sort(chartMetaComparator),
                (
                    acc: Column<{ [id: string]: string }>[],
                    chartMeta: ChartMeta,
                    index: number
                ) => {
                    if (chartMeta.clinicalAttribute !== undefined) {
                        acc.push({
                            ...this.getDefaultColumnConfig(
                                getUniqueKey(chartMeta.clinicalAttribute),
                                chartMeta.clinicalAttribute.displayName,
                                chartMeta.clinicalAttribute.datatype ===
                                    DataType.NUMBER
                            ),
                            tooltip: getClinicalAttributeOverlay(
                                chartMeta.clinicalAttribute.displayName,
                                chartMeta.description
                                    ? chartMeta.description
                                    : '',
                                chartMeta.clinicalAttribute
                                    ? chartMeta.clinicalAttribute
                                          .clinicalAttributeId
                                    : undefined
                            ),
                        });
                    }
                    return acc;
                },
                defaultColumns
            );
        },
        default: [],
    });

    @autobind
    getProgressItems(elapsedSecs: number): IProgressIndicatorItem[] {
        return [
            {
                label:
                    'Loading clinical data' +
                    (elapsedSecs > 2 ? ' - this can take several seconds' : ''),
                promises: [this.getDataForClinicalDataTab],
            },
        ];
    }

    public render() {
        return (
            <span data-test="clinical-data-tab-content">
                <WindowWidthBox offset={60}>
                    <If
                        condition={
                            this.props.store.clinicalAttributeProduct
                                .isPending ||
                            this.props.store.maxSamplesForClinicalTab
                                .isPending ||
                            this.props.store.selectedSamples.isPending
                        }
                    >
                        <Then>
                            <LoadingIndicator
                                isLoading={
                                    this.props.store.clinicalAttributeProduct
                                        .isPending ||
                                    this.props.store.maxSamplesForClinicalTab
                                        .isPending ||
                                    this.props.store.selectedSamples.isPending
                                }
                                size={'big'}
                                center={true}
                            />
                        </Then>
                        <Else>
                            <If
                                condition={
                                    this.props.store.clinicalAttributeProduct
                                        .result >
                                    getServerConfig()
                                        .clinical_attribute_product_limit
                                }
                            >
                                <Then>
                                    Too many samples selected. The maximum table
                                    length is{' '}
                                    <b>
                                        {
                                            this.props.store
                                                .maxSamplesForClinicalTab.result
                                        }
                                    </b>{' '}
                                    rows, but your current selection would be{' '}
                                    <b>
                                        {
                                            this.props.store.selectedSamples
                                                .result.length
                                        }
                                    </b>{' '}
                                    rows. Select fewer samples on the{' '}
                                    <a
                                        onClick={() =>
                                            this.props.store.handleTabChange(
                                                StudyViewPageTabKeyEnum.SUMMARY
                                            )
                                        }
                                    >
                                        Summary tab
                                    </a>
                                    .{' '}
                                </Then>
                                <Else>
                                    <ClinicalDataTabTableComponent
                                        initialItemsPerPage={20}
                                        headerComponent={
                                            <div className={'positionAbsolute'}>
                                                <strong>
                                                    {
                                                        this
                                                            .getDataForClinicalDataTab
                                                            .result?.totalItems
                                                    }{' '}
                                                    results
                                                </strong>
                                            </div>
                                        }
                                        showCopyDownload={
                                            getServerConfig()
                                                .skin_hide_download_controls ===
                                            DownloadControlOption.SHOW_ALL
                                        }
                                        showCountHeader={false}
                                        showColumnVisibility={false}
                                        onFilterTextChange={searchTerm =>
                                            (this.clinicalDataTabSearchTerm = searchTerm)
                                        }
                                        onSortDirectionChange={(
                                            field,
                                            sortDirection
                                        ) => {
                                            this.clinicalDataSortCriteria = {
                                                field: field,
                                                direction: sortDirection,
                                            };
                                        }}
                                        data={
                                            this.getDataForClinicalDataTab
                                                .result?.data || []
                                        }
                                        showLoading={
                                            this.getDataForClinicalDataTab
                                                .isPending
                                        }
                                        loadingComponent={
                                            <LoadingIndicator
                                                isLoading={true}
                                                size={'big'}
                                                center={true}
                                            />
                                        }
                                        columns={this.columns.result}
                                        copyDownloadProps={{
                                            showCopy: false,
                                            downloadFilename: this.props.store
                                                .clinicalDataDownloadFilename,
                                        }}
                                        initialFilterString={
                                            this.clinicalDataTabSearchTerm
                                        }
                                        initialSortDirection={
                                            this.clinicalDataSortCriteria
                                                ?.direction
                                        }
                                        initialSortColumn={
                                            this.clinicalDataSortCriteria?.field
                                        }
                                        downloadDataFetcher={() => {
                                            return fetchClinicalDataForStudyViewClinicalDataTab(
                                                this.props.store.filters,
                                                this.props.store.sampleSetByKey
                                                    .result!,
                                                this.clinicalDataTabSearchTerm,
                                                this.clinicalDataSortCriteria,
                                                500
                                            ).then(data => {
                                                return data.data;
                                            });
                                        }}
                                        // result limited mode will show a message when user reaches maximum
                                        // allowed result and explain to them they can use filtering or sorting
                                        // to find more specific results
                                        // this should only engage when the total matching items reported by server
                                        // exceeds the allowed limit
                                        // this allows us to limit the number of results without introducing the complication
                                        // of server side pagination
                                        isResultLimited={
                                            !!this.getDataForClinicalDataTab
                                                .result?.totalItems
                                                ? this.getDataForClinicalDataTab
                                                      .result?.totalItems >
                                                  CLINICAL_DATA_RECORD_LIMIT
                                                : false
                                        }
                                    />
                                </Else>
                            </If>
                        </Else>
                    </If>
                </WindowWidthBox>
            </span>
        );
    }
}
