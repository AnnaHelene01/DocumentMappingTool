// Generere JSON kun for AdditionalConfiguration
export const generateAdditionalConfigurationJson = (selectedDocumentsAGROS, selectedDocumentsEStil, selectedDocumentsPT, selectedDocumentsØKS, documentMappings) => {
    const additionalConfig = {
        AdditionalConfiguration: {
            Systems: {
                AGROS: {
                    TitleMatching: Object.keys(selectedDocumentsAGROS)
                        .filter((key) => selectedDocumentsAGROS[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.AGROS.TitleMatching[0] : null;
                        })
                        .filter(Boolean),
                },
                eStil: {
                    TitleMatching: Object.keys(selectedDocumentsEStil)
                        .filter((key) => selectedDocumentsEStil[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.eStil.TitleMatching[0] : null;
                        })
                        .filter(Boolean),
                },
                PT: {
                    TitleMatching: Object.keys(selectedDocumentsPT)
                        .filter((key) => selectedDocumentsPT[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.PT.TitleMatching[0] : null;
                        })
                        .filter(Boolean),
                },
                ØKS: {
                    TitleMatching: Object.keys(selectedDocumentsØKS)
                        .filter((key) => selectedDocumentsØKS[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.ØKS.TitleMatching[0] : null;
                        })
                        .filter(Boolean),
                },
            },
        },
    };

    return JSON.stringify(additionalConfig, null, 2);
};