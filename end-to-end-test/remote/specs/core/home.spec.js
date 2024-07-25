const assert = require('assert');
const expect = require('chai').expect;

const {
    goToUrlAndSetLocalStorage,
    clickQueryByGeneButton,
    useNetlifyDeployPreview,
    setInputText,
    waitForNumberOfStudyCheckboxes,
    clickModifyStudySelectionButton,
    waitForOncoprint,
    setDropdownOpen,
    jq,
    getElementByTestHandle,
    getElement,
    clickElement,
    getText,
    isSelected,
} = require('../../../shared/specUtils_Async');

const CBIOPORTAL_URL = process.env.CBIOPORTAL_URL.replace(/\/$/, '');

const searchInputSelector = 'div[data-test=study-search] input[type=text]';

describe('homepage', () => {
    before(async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
    });

    if (!useNetlifyDeployPreview) {
        it('window.frontendConfig.frontendUrl should point to localhost 3000 when testing', async () => {
            // We no longer check whether the dev mode banner exits.
            // The banner is hidden in e2etests.scss
            assert.equal(
                await browser.execute(() => {
                    return window.getLoadConfig().frontendUrl;
                }),
                '//localhost:3000/'
            );
        });
    }

    // this just shows that we have some studies listed
    it('it should have some (>0) studies listed ', async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
        const selector = '[data-test="cancerTypeListContainer"] > ul > ul';
        await getElement(selector, {
            timeout: 10000,
        });
        expect(0).to.be.below((await jq(selector)).length);
    });

    it('should filter study list according to filter text input', async () => {
        await getElement(searchInputSelector, { timeout: 10000 });
        await setInputText(searchInputSelector, 'bladder');
        //TODO:-- is this valid?
        await waitForNumberOfStudyCheckboxes(4);
    });

    it('when a single study is selected, a case set selector is provided', async () => {
        const caseSetSelectorClass = '[data-test="CaseSetSelector"]';
        await getElementByTestHandle('StudySelect', { timeout: 10000 });
        assert.equal(
            await (await getElement(caseSetSelectorClass)).isExisting(),
            false
        );
        await clickElement('[data-test="StudySelect"] input');
        await clickQueryByGeneButton();
        await getElement(caseSetSelectorClass, { timeout: 10000 });
        assert.equal(
            await (await getElement(caseSetSelectorClass)).isExisting(),
            true
        );
    });

    it('should not allow submission if OQL contains EXP or PROT for multiple studies', async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
        await getElement('div[data-test=study-search] input[type=text]', {
            timeout: 10000,
        });
        await setInputText(
            'div[data-test=study-search] input[type=text]',
            'breast -invasive'
        );
        await browser.pause(500);
        await getElement('[data-test="StudySelect"]', { timeout: 10000 });
        await clickElement('[data-test="selectAllStudies"]');
        await clickQueryByGeneButton();
        const oqlEntrySel = 'textarea[data-test="geneSet"]';
        await setInputText(oqlEntrySel, 'PTEN: EXP>1');
        const errorMessageSel = 'span[data-test="oqlErrorMessage"]';
        await (await getElement(errorMessageSel)).waitForExist();
        await browser.waitUntil(
            async () =>
                (await (await getElement(errorMessageSel)).getText()) ===
                'Expression filtering in the gene list (the EXP command) is not supported when doing cross cancer queries.'
        );
        assert.equal(
            await (await getElement(errorMessageSel)).getText(),
            'Expression filtering in the gene list (the EXP command) is not supported when doing cross cancer queries.'
        );
        const submitButtonSel = 'button[data-test="queryButton"]';
        assert.ok(
            !(await (await getElement(submitButtonSel)).isEnabled()),
            'submit should be disabled w/ EXP in oql'
        );
        await setInputText(oqlEntrySel, 'PTEN: PROT>1');
        await (await getElement(errorMessageSel)).waitForExist();
        await (
            await getElement(
                'span=Protein level filtering in the gene list (the PROT command) is not supported when doing cross cancer queries.'
            )
        ).waitForExist();
        assert.equal(
            await getText(errorMessageSel),
            'Protein level filtering in the gene list (the PROT command) is not supported when doing cross cancer queries.'
        );
        assert.ok(
            !(await (await getElement(submitButtonSel)).isEnabled()),
            'submit should be disabled w/ PROT in oql'
        );
    });
});

describe('select all/deselect all functionality in study selector', () => {
    const getCheckedCheckboxes = async () => {
        await (
            await getElement('[data-test="StudySelect"] input[type=checkbox]')
        ).waitForDisplayed();
        return jq(`[data-test=\"StudySelect\"] input[type=checkbox]:checked`);
    };

    it('clicking select all studies checkbox selects all studies', async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
        await browser.pause(1000);
        assert.equal(
            (await getCheckedCheckboxes()).length,
            0,
            'no studies selected'
        );

        await clickElement('button=TCGA PanCancer Atlas Studies');

        assert.equal(
            (await getCheckedCheckboxes()).length,
            32,
            'all pan can studies are selected'
        );

        await clickElement('[data-test=globalDeselectAllStudiesButton]');

        assert.equal(
            (await getCheckedCheckboxes()).length,
            0,
            'no studies are selected'
        );
    });

    it('global deselect button clears all selected studies, even during filter', async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);

        await assert.equal(
            await (
                await getElementByTestHandle('globalDeselectAllStudiesButton')
            ).isExisting(),
            false,
            'global deselect button does not exist'
        );

        await browser.pause(500);
        const selectElement = await $$(
            '[data-test="StudySelect"] input[type=checkbox]'
        );
        await selectElement[50].click();

        assert.equal(
            await (
                await getElement('[data-test=globalDeselectAllStudiesButton]')
            ).isExisting(),
            true,
            'global deselect button DOES exist'
        );
        assert.equal(
            (await getCheckedCheckboxes()).length,
            1,
            'we selected one study'
        );
        await setInputText(
            'div[data-test=study-search] input[type=text]',
            'breast'
        );

        //click global deselect all while filtered
        await clickElement('[data-test=globalDeselectAllStudiesButton]');

        // click unfilter button
        await clickElement('[data-test=clearStudyFilter]');

        assert.equal(
            (await getCheckedCheckboxes()).length,
            0,
            'no selected studies are selected after deselect all clicked'
        );
    });
});

describe('case set selection in front page query form', () => {
    const selectedCaseSet_sel =
        'div[data-test="CaseSetSelector"] span.Select-value-label[aria-selected="true"]';

    beforeEach(async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
        await browser.pause(3000);
    });

    it('selects the default case set for single study selections', async () => {
        const input = 'div[data-test=study-search] input[type=text]';
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'ovarian nature 2011');
        await waitForNumberOfStudyCheckboxes(1);
        await ('[data-test="StudySelect"]', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        await (await getElement(selectedCaseSet_sel)).wa;
        await browser.waitUntil(
            async () =>
                (await getText(selectedCaseSet_sel)) ===
                'Samples with mutation and CNA data (316)',
            5000
        );
    });
    it('selects the right default case sets in a single->multiple->single study selection flow', async () => {
        // Select Ampullary Carcinoma
        const input = 'div[data-test=study-search] input[type=text]';
        await getElement(input, { timeout: 20000 });
        await setInputText(input, 'ampullary baylor');
        await waitForNumberOfStudyCheckboxes(1);
        await getElement('[data-test="StudySelect"]', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        await (await getElement(selectedCaseSet_sel)).waitForExist();
        await browser.waitUntil(
            async () =>
                (await getText(selectedCaseSet_sel)) ===
                'Samples with mutation data (160)',
            30000
        );

        await clickModifyStudySelectionButton();

        // select Adrenocortical Carcinoma
        await getElement(input, { timeout: 10000 });
        await setInputText(
            input,
            'adrenocortical carcinoma tcga firehose legacy'
        );
        await waitForNumberOfStudyCheckboxes(
            1,
            'Adrenocortical Carcinoma (TCGA, Firehose Legacy)'
        );
        await getElementByTestHandle('StudySelect', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        getElementByTestHandle('MUTATION_EXTENDED', {
            timeout: 10000,
        });

        await (await getElement(selectedCaseSet_sel)).waitForExist();
        await browser.waitUntil(
            async () =>
                (await getText(selectedCaseSet_sel)).trim() === 'All (252)',
            10000
        );

        await clickModifyStudySelectionButton();

        // Deselect Ampullary Carcinoma
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'ampullary baylor');
        await waitForNumberOfStudyCheckboxes(
            1,
            'Ampullary Carcinoma (Baylor College of Medicine, Cell Reports 2016)'
        );
        await getElementByTestHandle('StudySelect', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        await (await getElement(selectedCaseSet_sel)).waitForExist({
            timeout: 10000,
        });
        await browser.waitUntil(
            async () =>
                (await getText(selectedCaseSet_sel)).trim() ===
                'Samples with mutation and CNA data (88)',
            10000
        );
    });
    it('selects the right default case sets in a single->select all filtered->single study selection flow', async () => {
        // Select Ampullary Carcinoma
        const input = 'div[data-test=study-search] input[type=text]';
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'ampullary baylor');
        await waitForNumberOfStudyCheckboxes(1);
        await getElement('[data-test="StudySelect"]', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        await (await getElement(selectedCaseSet_sel)).waitForExist();
        await browser.waitUntil(
            async () =>
                (await getText(selectedCaseSet_sel)).trim() ===
                'Samples with mutation data (160)',
            10000
        );

        await clickModifyStudySelectionButton();

        // select all TCGA non-provisional
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'tcga -provisional');
        await browser.pause(500);
        await getElement(
            'div[data-test="cancerTypeListContainer"] input[data-test="selectAllStudies"]',
            { timeout: 10000 }
        );
        await clickElement(
            'div[data-test="cancerTypeListContainer"] input[data-test="selectAllStudies"]'
        );
        await clickQueryByGeneButton();
        await getElementByTestHandle('MUTATION_EXTENDED', {
            timeout: 10000,
        });

        getElementByTestHandle('COPY_NUMBER_ALTERATION', {
            timeout: 10000,
        });

        await getElement(selectedCaseSet_sel, { timeout: 10000 });
        await browser.waitUntil(
            async () => /All \(\d+\)/.test(await getText(selectedCaseSet_sel)),
            10000
        ); // since sample #s change across studies, dont depend this test on specific number

        await clickModifyStudySelectionButton();

        // Deselect all tcga -provisional studies
        await getElement(
            'div[data-test="cancerTypeListContainer"] input[data-test="selectAllStudies"]',
            { timeout: 10000 }
        );
        await clickElement(
            'div[data-test="cancerTypeListContainer"] input[data-test="selectAllStudies"]'
        );
        await browser.pause(100);

        // select Adrenocortical Carcinoma
        await getElement(input, { timeout: 10000 });
        setInputText(input, 'adrenocortical carcinoma tcga firehose legacy');
        waitForNumberOfStudyCheckboxes(1);
        await getElementByTestHandle('StudySelect', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');
        await clickQueryByGeneButton();
        await getElementByTestHandle('MUTATION_EXTENDED', {
            timeout: 10000,
        });
        await getElementByTestHandle('COPY_NUMBER_ALTERATION', {
            timeout: 10000,
        });

        await getElement(selectedCaseSet_sel, { timeout: 10000 });
        await browser.waitUntil(async () => {
            (await getText(selectedCaseSet_sel)).trim() === 'All (252)';
        }, 10000);

        await clickModifyStudySelectionButton();

        // Deselect Ampullary Carcinoma
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'ampullary baylor');
        await waitForNumberOfStudyCheckboxes(
            1,
            'Ampullary Carcinoma (Baylor College of Medicine, Cell Reports 2016)'
        );
        await getElement('StudySelect', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        await (await getElement(selectedCaseSet_sel)).waitForExist();
        await browser.waitUntil(
            async () =>
                (await getText(selectedCaseSet_sel)).trim() ===
                'Samples with mutation and CNA data (88)',
            10000
        );
    });
});

describe('genetic profile selection in front page query form', () => {
    beforeEach(async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
    });
    it('selects the right default genetic profiles in a single->multiple->single study selection flow', async () => {
        // select a study
        const input = 'div[data-test=study-search] input[type=text]';
        await getElement(input), { timeout: 10000 };
        await setInputText(input, 'ovarian nature 2011');
        await waitForNumberOfStudyCheckboxes(1);
        await getElement('[data-test="StudySelect"]', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');
        await browser.pause(200);

        await clickQueryByGeneButton();

        // wait for profiles selector to load
        await getElement(
            'div[data-test="molecularProfileSelector"] input[type="checkbox"]',
            { timeout: 6000 }
        );
        // mutations, CNA should be selected
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MUTATION_EXTENDED"]'
            ),
            'mutation profile should be selected'
        );
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="COPY_NUMBER_ALTERATION"]'
            ),
            'cna profile should be selected'
        );
        assert(
            !(await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MRNA_EXPRESSION"]'
            )),
            'mrna profile not selected'
        );

        await clickModifyStudySelectionButton();

        // select another study
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'ampullary baylor');
        await waitForNumberOfStudyCheckboxes(
            1,
            'Ampullary Carcinoma (Baylor College of Medicine, Cell Reports 2016)'
        );
        await getElement('[data-test="StudySelect"]', { timeout: 10000 });
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        //TODO:-- why is this not working? its not on the page
        await getElementByTestHandle('MUTATION_EXTENDED', {
            timeout: 10000,
        });

        await getElementByTestHandle('COPY_NUMBER_ALTERATION', {
            timeout: 10000,
        });

        assert(
            await (
                await getElementByTestHandle('MUTATION_EXTENDED')
            ).isSelected(),
            "'Mutation' should be selected"
        );
        assert(
            await getElementByTestHandle('COPY_NUMBER_ALTERATION'),
            "'Copy number alterations' should be selected"
        );

        await clickModifyStudySelectionButton();

        //deselect other study
        await clickElement('[data-test="StudySelect"] input');

        await clickQueryByGeneButton();

        // wait for profiles selector to load
        getElement(
            'div[data-test="molecularProfileSelector"] input[type="checkbox"]',
            { timeout: 10000 }
        );
        // mutations, CNA should be selected
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MUTATION_EXTENDED"]'
            ),
            'mutation profile should be selected'
        );
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="COPY_NUMBER_ALTERATION"]'
            ),
            'cna profile should be selected'
        );
        assert(
            !(await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MRNA_EXPRESSION"]'
            )),
            'mrna profile not selected'
        );

        await clickModifyStudySelectionButton();

        // select all tcga firehose legacy studies
        await getElement(input, { timeout: 10000 });
        await setInputText(input, 'tcga firehose');
        await browser.pause(500);
        await clickElement(
            'div[data-test="cancerTypeListContainer"] input[data-test="selectAllStudies"]'
        );

        await clickQueryByGeneButton();

        // wait for data type priority selector to load
        await getElementByTestHandle('MUTATION_EXTENDED', {
            timeout: 10000,
        });

        await getElementByTestHandle('COPY_NUMBER_ALTERATION', {
            timeout: 10000,
        });
        assert(
            await (
                await getElementByTestHandle('MUTATION_EXTENDED')
            ).isSelected(),
            "'Mutation' should be selected"
        );
        assert(
            getElementByTestHandle('COPY_NUMBER_ALTERATION', {
                timeout: 10000,
            }),
            "'Copy number alterations' should be selected"
        );

        await clickModifyStudySelectionButton();

        // Deselect all tcga firehose legacy studies
        await clickElement(
            'div[data-test="cancerTypeListContainer"] input[data-test="selectAllStudies"]'
        );
        await browser.pause(100);

        await clickQueryByGeneButton();

        // wait for profiles selector to load
        getElement(
            'div[data-test="molecularProfileSelector"] input[type="checkbox"]',
            { timeout: 6000 }
        );
        // mutations, CNA should be selected
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MUTATION_EXTENDED"]'
            ),
            'mutation profile should be selected'
        );
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="COPY_NUMBER_ALTERATION"]'
            ),
            'cna profile should be selected'
        );
        assert(
            !isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MRNA_EXPRESSION"]'
            ),
            'mrna profile not selected'
        );
    });
});

describe('auto-selecting needed profiles for oql in query form', () => {
    beforeEach(async () => {
        await goToUrlAndSetLocalStorage(CBIOPORTAL_URL);
    });

    it('gives a submit error if protein oql is inputted and no protein profile is available for the study', async () => {
        await getElement('.studyItem_nsclc_mskcc_2018', { timeout: 20000 });
        await clickElement('.studyItem_nsclc_mskcc_2018');
        await clickQueryByGeneButton();

        // enter oql
        await getElement('textarea[data-test="geneSet"]', { timeout: 2000 });
        await setInputText('textarea[data-test="geneSet"]', 'BRCA1: PROT>1');

        // error appears
        await browser.waitUntil(
            async () => {
                const errorMessageSel = await getElement(
                    '[data-test="oqlErrorMessage"]'
                );
                return (
                    (await errorMessageSel.isExisting()) &&
                    (await errorMessageSel.getText()) ===
                        'Protein level data query specified in OQL, but no protein level profile is available in the selected study.'
                );
            },
            { timeout: 20000 }
        );

        // submit is disabled
        assert(
            !(await (
                await getElement('button[data-test="queryButton"]')
            ).isEnabled())
        );
    });
    it('auto-selects an mrna profile when mrna oql is entered', async () => {
        await getElement('.studyItem_chol_tcga_pan_can_atlas_2018', {
            timeout: 20000,
        });
        await clickElement('.studyItem_chol_tcga_pan_can_atlas_2018');
        await clickQueryByGeneButton();

        // make sure profiles selector is loaded
        await getElement(
            'div[data-test="molecularProfileSelector"] input[type="checkbox"]',
            { timeout: 3000 }
        );
        // mutations, CNA should be selected
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MUTATION_EXTENDED"]'
            ),
            'mutation profile should be selected'
        );
        assert(
            await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="COPY_NUMBER_ALTERATION"]'
            ),
            'cna profile should be selected'
        );
        assert(
            !(await isSelected(
                'div[data-test="molecularProfileSelector"] input[type="checkbox"][data-test="MRNA_EXPRESSION"]'
            )),
            'mrna profile not selected'
        );

        // enter oql
        await getElement('textarea[data-test="geneSet"]', { timeout: 2000 });
        await setInputText(
            'textarea[data-test="geneSet"]',
            'TP53 BRCA1: EXP>1'
        );

        await (
            await getElement('button[data-test="queryButton"]')
        ).waitForEnabled({ timeout: 5000 });
        await clickElement('button[data-test="queryButton"]');

        // wait for query to load
        await waitForOncoprint();

        const profileFilter = (
            (
                await browser.execute(() => {
                    return { ...urlWrapper.query };
                })
            ).profileFilter || ''
        ).split(',');

        // mutation, cna, mrna profiles are there
        assert.equal(profileFilter.includes('mutations'), true);
        assert.equal(profileFilter.includes('gistic'), true);
        assert.equal(
            profileFilter.includes('rna_seq_v2_mrna_median_Zscores'),
            true
        );
    });
});

describe('results page quick oql edit', () => {
    it('gives a submit error if protein oql is inputted and no protein profile is available for the study', async () => {
        await goToUrlAndSetLocalStorage(
            `${CBIOPORTAL_URL}/results/oncoprint?cancer_study_list=ccrcc_dfci_2019&Z_SCORE_THRESHOLD=2.0&RPPA_SCORE_THRESHOLD=2.0&profileFilter=mutations&case_set_id=ccrcc_dfci_2019_sequenced&gene_list=TP53&geneset_list=%20&tab_index=tab_visualize&Action=Submit`
        );

        await getElement('[data-test="oqlQuickEditButton"]', {
            timeout: 20000,
        });
        await clickElement('[data-test="oqlQuickEditButton"]');

        await getElement('.quick_oql_edit [data-test="geneSet"]', {
            timeout: 5000,
        });
        await setInputText(
            '.quick_oql_edit [data-test="geneSet"]',
            'PTEN: PROT>0'
        );

        // error appears
        await browser.waitUntil(
            async () => {
                return (
                    (await (
                        await getElement(
                            '.quick_oql_edit [data-test="oqlErrorMessage"]'
                        )
                    ).isExisting()) &&
                    (await getText(
                        '.quick_oql_edit [data-test="oqlErrorMessage"]'
                    )) ===
                        'Protein level data query specified in OQL, but no protein level profile is available in the selected study.'
                );
            },
            { timeout: 20000 }
        );

        // submit is disabled
        assert(
            !(await (
                await getElement('button[data-test="oqlQuickEditSubmitButton"]')
            ).isEnabled())
        );
    });
    it('auto-selects an mrna profile when mrna oql is entered', async () => {
        await goToUrlAndSetLocalStorage(
            `${CBIOPORTAL_URL}/results/oncoprint?genetic_profile_ids_PROFILE_MUTATION_EXTENDED=prad_tcga_pub_mutations&genetic_profile_ids_PROFILE_COPY_NUMBER_ALTERATION=prad_tcga_pub_gistic&cancer_study_list=prad_tcga_pub&Z_SCORE_THRESHOLD=2.0&RPPA_SCORE_THRESHOLD=2.0&data_priority=0&profileFilter=0&case_set_id=prad_tcga_pub_cnaseq&gene_list=BRCA1&geneset_list=%20&tab_index=tab_visualize&Action=Submit`
        );

        await getElement('[data-test="oqlQuickEditButton"]', {
            timeout: 20000,
        });

        await clickElement('[data-test="oqlQuickEditButton"]');

        await getElement('.quick_oql_edit [data-test="geneSet"]', {
            timeout: 5000,
        });
        await setInputText(
            '.quick_oql_edit [data-test="geneSet"]',
            'TP53 PTEN: PROT>0'
        );

        let query = await browser.execute(() => {
            return { ...urlWrapper.query };
        });
        // mutation and cna profile are there
        assert.equal(
            query.genetic_profile_ids_PROFILE_MUTATION_EXTENDED,
            'prad_tcga_pub_mutations'
        );
        assert.equal(
            query.genetic_profile_ids_PROFILE_COPY_NUMBER_ALTERATION,
            'prad_tcga_pub_gistic'
        );
        assert.equal(
            query.genetic_profile_ids_PROFILE_MRNA_EXPRESSION,
            undefined
        );

        // enter oql
        await setDropdownOpen(
            true,
            'a[data-test="oqlQuickEditButton"]',
            '.quick_oql_edit textarea[data-test="geneSet"]'
        );
        await setInputText(
            '.quick_oql_edit textarea[data-test="geneSet"]',
            'PTEN: EXP>1'
        );

        await browser.pause(1000); // give it a second
        await getElement('button[data-test="oqlQuickEditSubmitButton"]', {
            timeout: 5000,
        });
        await clickElement('button[data-test="oqlQuickEditSubmitButton"]');

        // wait for query to load
        await waitForOncoprint();

        // mutation, cna, mrna profiles are there
        //TODO:-- why is this not working? profileFilter is '0' when logged even on the query url
        const profileFilter = query.profileFilter.split(',');
        // mutation, cna, mrna profiles are there
        assert.equal(profileFilter.includes('mutations'), true);
        assert.equal(profileFilter.includes('gistic'), true);
        assert.equal(
            profileFilter.includes('rna_seq_v2_mrna_median_Zscores'),
            true
        );
    });
});
