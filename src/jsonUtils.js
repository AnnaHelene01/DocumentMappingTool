export const generateFinalJson = (selectedDocumentsAGROS, selectedDocumentsEStil, selectedDocumentsPT, selectedDocumentsØKS, documentMappings) => {
    const selectedMappings = {
        id: {
            RootPath: "InsertDocuments",
            MainContract: "CreateDocumentParameter",
            SubContract: "ExternalId",
            MainPropertyName: "ExternalId",
            SubPropertyName: "Id",
        },
        tittel: {
            RootPath: "InsertDocuments",
            MainContract: "CreateDocumentParameter",
            SubContract: "",
            MainPropertyName: "Title",
            SubPropertyName: "",
        },
        date: {
            RootPath: "InsertDocuments",
            MainContract: "CreateDocumentParameter",
            SubContract: "",
            MainPropertyName: "DocumentDate",
            SubPropertyName: "",
        },
        metadataFraAvleverendeSystem: {
            ekstraMetadata: {
                avgivendeSystemMappe: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "extersaksref",
                },
                gardsnr: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Gardsnr",
                },
                bruksnr: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Bruksnr"
                },
                festenr: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Festenr"
                },
                sokerOrgnr: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Orgnr_søker"
                },
                sokerFodselsnr: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Personnr_søker"
                },
                sokerFornavn: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "sokerFornavn"
                },
                sokerEtternavn: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "sokerEtternavn"
                },
                Behandlende_kommune_orgnr: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Behandlende_kommune_orgnr"
                },
                Behandlende_kommune_navn: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "Behandlende_kommune_navn"
                },
                sokerForetaksnavn: {
                    RootPath: "InsertCases",
                    MainContract: "CreateCaseParameter",
                    SubContract: "AdditionalFieldParameter",
                    MainPropertyName: "AdditionalFields",
                    SubPropertyName: "sokerForetaksnavn"
                }
            },
        },
        metadataForImport: {
            sakssekvensnummer: {
                RootPath: "InsertDocuments",
                MainContract: "CreateDocumentParameter",
                SubContract: "AdditionalFieldParameter",
                MainPropertyName: "AdditionalFields",
                SubPropertyName: "Seqno",
            },
            saksaar: {
                RootPath: "InsertDocuments",
                MainContract: "CreateDocumentParameter",
                SubContract: "AdditionalFieldParameter",
                MainPropertyName: "AdditionalFields",
                SubPropertyName: "Year",
            },
        },
        filmetadata: {
            filnavn: {
                RootPath: "InsertDocuments",
                MainContract: "CreateDocumentParameter",
                SubContract: "CreateFileParameter",
                SubPropertyName: "Title",
                MainPropertyName: "Files",
            },
            mimetype: {
                RootPath: "InsertDocuments",
                MainContract: "CreateDocumentParameter",
                SubContract: "CreateFileParameter",
                SubPropertyName: "Format",
                MainPropertyName: "Files",
            },
            dokumentType: {
                RootPath: "InsertDocuments",
                MainContract: "CreateDocumentParameter",
                SubContract: "",
                MainPropertyName: "DefaultValueSet",
                SubPropertyName: "",
            },
        },
        forsendelseType: {
            RootPath: "InsertDocuments",
            MainContract: "CreateDocumentParameter",
            SubContract: "",
            MainPropertyName: "DefaultValueSet",
            SubPropertyName: "",
        },
        avgivendeSystem: {
            RootPath: "InsertCases",
            MainContract: "CreateCaseParameter",
            SubContract: "ExternalId",
            SubPropertyName: "ExternalSystem",
            MainPropertyName: "ExternalId",
        },
        AdditionalConfiguration: {
            Systems: {
                AGROS: {
                    TitleMatching: Object.keys(selectedDocumentsAGROS)
                        .filter((key) => selectedDocumentsAGROS[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.AGROS.TitleMatching[0] : null;
                        })
                        .filter(Boolean), // Filtrer ut null-verdier
                },
                eStil: {
                    TitleMatching: Object.keys(selectedDocumentsEStil)
                        .filter((key) => selectedDocumentsEStil[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.eStil.TitleMatching[0] : null;
                        })
                        .filter(Boolean), // Filtrer ut null-verdier
                },
                PT: {
                    TitleMatching: Object.keys(selectedDocumentsPT)
                        .filter((key) => selectedDocumentsPT[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.PT.TitleMatching[0] : null;
                        })
                        .filter(Boolean), // Filtrer ut null-verdier
                },
                ØKS: {
                    TitleMatching: Object.keys(selectedDocumentsØKS)
                        .filter((key) => selectedDocumentsØKS[key])
                        .map((key) => {
                            const mapping = documentMappings[key];
                            return mapping ? mapping.AdditionalConfiguration.Systems.ØKS.TitleMatching[0] : null;
                        })
                        .filter(Boolean), // Filtrer ut null-verdier
                },
            },
        },
    };
 
    return JSON.stringify(selectedMappings, null, 2);
 };
 