import * as React from 'react';
import {observer, inject } from "mobx-react";
import {reaction, computed} from "mobx";
import validateParameters from 'shared/lib/validateParameters';
import ValidationAlert from "shared/components/ValidationAlert";
import AjaxErrorModal from "shared/components/AjaxErrorModal";
import exposeComponentRenderer from 'shared/lib/exposeComponentRenderer';
import {ResultsViewPageStore} from "./ResultsViewPageStore";
import Mutations from "./mutation/Mutations";
import MutualExclusivityTab from "./mutualExclusivity/MutualExclusivityTab";

const resultsViewPageStore = new ResultsViewPageStore();

(window as any).resultsViewPageStore = resultsViewPageStore;

export interface IResultsViewPageProps {
    routing: any;
}

@inject('routing')
@observer
export default class ResultsViewPage extends React.Component<IResultsViewPageProps, {}> {

    constructor(props: IResultsViewPageProps) {
        super();

        this.exposeComponentRenderersToParentScript();

        // const reaction1 = reaction(
        //     () => props.routing.location.query,
        //     query => {
        //
        //         const validationResult = validateParameters(query, ['studyId']);
        //
        //         if (validationResult.isValid) {
        //             resultsViewPageStore.urlValidationError = null;
        //
        //             resultsViewPageStore.studyId = query.studyId;
        //
        //             if ('sampleListId' in query) {
        //                 resultsViewPageStore.sampleListId = query.sampleListId as string;
        //             }
        //
        //             // TODO we may want to split by ","
        //
        //             if ('sampleList' in query) {
        //                 resultsViewPageStore.sampleList = (query.sampleList as string).split(" ");
        //             }
        //
        //             if ('geneList' in query) {
        //                 resultsViewPageStore.hugoGeneSymbols = (query.geneList as string).split(" ");
        //             }
        //
        //             if ('tab' in query) {
        //                 resultsViewPageStore.tab = query.tab as string;
        //             }
        //         }
        //         else {
        //             resultsViewPageStore.urlValidationError = validationResult.message;
        //         }
        //
        //     },
        //     { fireImmediately:true }
        // );
    }

    public exposeComponentRenderersToParentScript(){

        exposeComponentRenderer('renderMutationsTab', (props:{genes:string[], studyId:string, samples:string[]|string})=>{
            resultsViewPageStore.hugoGeneSymbols = props.genes;
            resultsViewPageStore.studyId = props.studyId;
            if (typeof props.samples === "string") {
                resultsViewPageStore.sampleListId = props.samples;
            } else {
                resultsViewPageStore.sampleList = props.samples;
            }

            return <div>
                <AjaxErrorModal
                    show={(resultsViewPageStore.ajaxErrors.length > 0)}
                    onHide={()=>{ resultsViewPageStore.clearErrors() }}
                />
                <Mutations genes={props.genes} store={resultsViewPageStore}/>
            </div>
        });

        exposeComponentRenderer('renderMutExTab', (props:{genes:string[], studyId:string, samples:string[]|string})=>{

            const isSampleAlteredMap = {
                "EGFR": [true,false,true,true,false,false,true,true,false,false],
                "KRAS": [false,true,false,false,true,true,false,false,true,true],
                "TP53": [false,false,false,false,false,true,false,false,true,true],
                "BRAF": [false,false,false,true,false,true,false,false,true,true]
            };

            return <div>
                <MutualExclusivityTab isSampleAlteredMap={isSampleAlteredMap}/>
            </div>
        });

    }

    public render() {

        return null;

        // if (resultsViewPageStore.urlValidationError) {
        //     return <ValidationAlert urlValidationError={resultsViewPageStore.urlValidationError} />;
        // }
        //


        //
        // return (
        //     <div className="resultsViewPage">
        //         <AjaxErrorModal
        //             show={(resultsViewPageStore.ajaxErrors.length > 0)}
        //             onHide={()=>{ resultsViewPageStore.clearErrors() }}
        //         />
        //
        //         {resultsViewPageStore.tab === "mutation" &&
        //         <Mutations
        //             genes={resultsViewPageStore.hugoGeneSymbols || []}
        //             store={resultsViewPageStore}
        //             routing={this.props.routing}
        //         />
        //         }
        //
        //         {resultsViewPageStore.tab === "mutualExclusivity" &&
        //         <MutualExclusivityTab isSampleAlteredMap={isSampleAlteredMap}/>
        //         }
        //     </div>
        // );
    }
}