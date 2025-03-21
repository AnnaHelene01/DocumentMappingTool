import React, { useState } from "react";
import { 
   sampleDocumentTypesAGROS, 
   sampleDocumentTypesEStil, 
   sampleDocumentTypesPT, 
   sampleDocumentTypesØKS 
} from "./documentTypes"; // Importer dokumenttypene
import DocumentTypeCheckboxes from "./documentTypeCheckBoxes"; // Importer sjekkboks-komponenten
import { createTemplateMapping } from "./mappingUtils"; // Importer createTemplateMapping

const DocumentMappingTool = () => {
    const [selectedDocumentsAGROS, setSelectedDocumentsAGROS] = useState({});
    const [selectedDocumentsEStil, setSelectedDocumentsEStil] = useState({});
    const [selectedDocumentsPT, setSelectedDocumentsPT] = useState({});
    const [selectedDocumentsØKS, setSelectedDocumentsØKS] = useState({});
    const [documentMappings, setDocumentMappings] = useState({});
 
    // Tilstander for ResponsiblePersonRecno for hvert system - sak og dokument
    const [responsiblePersonRecnoAGROSDocument, setResponsiblePersonRecnoAGROSDocument] = useState("");
    const [responsiblePersonRecnoAGROSCase, setResponsiblePersonRecnoAGROSCase] = useState("");
    const [responsiblePersonRecnoEStilDocument, setResponsiblePersonRecnoEStilDocument] = useState("");
    const [responsiblePersonRecnoEStilCase, setResponsiblePersonRecnoEStilCase] = useState("");
    const [responsiblePersonRecnoPTDocument, setResponsiblePersonRecnoPTDocument] = useState("");
    const [responsiblePersonRecnoPTCase, setResponsiblePersonRecnoPTCase] = useState("");
    const [responsiblePersonRecnoØKSDocument, setResponsiblePersonRecnoØKSDocument] = useState("");
    const [responsiblePersonRecnoØKSCase, setResponsiblePersonRecnoØKSCase] = useState("");

    //Tilstander for ResponsibleEnterpriseRecno for hvert system - sak og dokument
    const [responsibleEnterpriseRecnoAGROSDocument, setResponsibleEnterpriseRecnoAGROSDocument] = useState("");
    const [responsibleEnterpriseRecnoAGROSCase, setResponsibleEnterpriseRecnoAGROSCase] = useState("");
    const [responsibleEnterpriseRecnoEStilDocument, setResponsibleEnterpriseRecnoEStilDocument] = useState("");
    const [responsibleEnterpriseRecnoEStilCase, setResponsibleEnterpriseRecnoEStilCase] = useState("");
    const [responsibleEnterpriseRecnoPTDocument, setResponsibleEnterpriseRecnoPTDocument] = useState("");
    const [responsibleEnterpriseRecnoPTCase, setResponsibleEnterpriseRecnoPTCase] = useState("");
    const [responsibleEnterpriseRecnoØKSDocument, setResponsibleEnterpriseRecnoØKSDocument] = useState("");
    const [responsibleEnterpriseRecnoØKSCase, setResponsibleEnterpriseRecnoØKSCase] = useState("");
 
    const toggleDocumentSelectionAGROS = (documentType) => {
        const newSelection = { ...selectedDocumentsAGROS };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "AGROS", responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsAGROS(newSelection);
    };
 
    const toggleDocumentSelectionEStil = (documentType) => {
        const newSelection = { ...selectedDocumentsEStil };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "eStil", responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsEStil(newSelection);
    };
 
    const toggleDocumentSelectionPT = (documentType) => {
        const newSelection = { ...selectedDocumentsPT };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "PT", responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsPT(newSelection);
    };
 
    const toggleDocumentSelectionØKS = (documentType) => {
        const newSelection = { ...selectedDocumentsØKS };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "ØKS", responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsØKS(newSelection);
    };

    //Generere JSON-fil
   const generateFinalJson = () => {
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
 
// Generere JSON kun for AdditionalConfiguration
const generateAdditionalConfigurationJson = () => {
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

//Kodesnutt for å laste ned en fullverdig .json - fil til datamaskinen
   const downloadJson = () => {
          const json = generateFinalJson();
          const blob = new Blob([json], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "document-mappings.json"; // Filnavn for nedlastingen
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
    };

    return (
    <div>
        <h1>Document Mapping Tool</h1>
        <div className="button-container">
                <button onClick={downloadJson}>Download JSON</button> {/* Legg til eksportknappen */}
        </div>
        <div className="flex-main">
            
            <div className="flex-left">
                {/* AGROS Document Types */}
                <div>
                    <h2>AGROS Document Types</h2>
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesAGROS}
                        selectedDocuments={selectedDocumentsAGROS}
                        toggleDocumentSelection={toggleDocumentSelectionAGROS}
                    />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for AGROS Document:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoAGROSDocument} 
                                onChange={(e) => setResponsiblePersonRecnoAGROSDocument(e.target.value)} 
                                placeholder="Responsible Person Recno for AGROS Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for AGROS Case:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoAGROSCase} 
                                onChange={(e) => setResponsiblePersonRecnoAGROSCase(e.target.value)} 
                                placeholder="Responsible Person Recno for AGROS Case" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for AGROS Document:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoAGROSDocument} 
                                onChange={(e) => setResponsibleEnterpriseRecnoAGROSDocument(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for AGROS Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for AGROS Case:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoAGROSCase} 
                                onChange={(e) => setResponsibleEnterpriseRecnoAGROSCase(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for AGROS Case" 
                            />
                        </div>
                </div>

                {/* eStil Document Types */}
                <div>
                    <h2>eStil Document Types</h2>
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesEStil}
                        selectedDocuments={selectedDocumentsEStil}
                        toggleDocumentSelection={toggleDocumentSelectionEStil}
                    />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for eStil Document:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoEStilDocument} 
                                onChange={(e) => setResponsiblePersonRecnoEStilDocument(e.target.value)} 
                                placeholder="Responsible Person Recno for eStil Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for eStil Case:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoEStilCase} 
                                onChange={(e) => setResponsiblePersonRecnoEStilCase(e.target.value)} 
                                placeholder="Responsible Person Recno for eStil Case" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for eStil Document:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoEStilDocument} 
                                onChange={(e) => setResponsibleEnterpriseRecnoEStilDocument(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for eStil Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for eStil Case:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoEStilCase} 
                                onChange={(e) => setResponsibleEnterpriseRecnoEStilCase(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for eStil Case" 
                            />
                        </div>
                </div>

                {/* PT Document Types */}
                <div>
                    <h2>PT Document Types</h2>
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesPT}
                        selectedDocuments={selectedDocumentsPT}
                        toggleDocumentSelection={toggleDocumentSelectionPT}
                    />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for PT Document:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoPTDocument} 
                                onChange={(e) => setResponsiblePersonRecnoPTDocument(e.target.value)} 
                                placeholder="Responsible Person Recno for PT Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for PT Case:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoPTCase} 
                                onChange={(e) => setResponsiblePersonRecnoPTCase(e.target.value)} 
                                placeholder="Responsible Person Recno for PT Case" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for PT Document:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoPTDocument} 
                                onChange={(e) => setResponsibleEnterpriseRecnoPTDocument(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for PT Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for PT Case:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoPTCase} 
                                onChange={(e) => setResponsibleEnterpriseRecnoPTCase(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for PT Case" 
                            />
                        </div>
                </div>

                {/* ØKS Document Types */}
                <div>
                    <h2>ØKS Document Types</h2>
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesØKS}
                        selectedDocuments={selectedDocumentsØKS}
                        toggleDocumentSelection={toggleDocumentSelectionØKS}
                    />

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for ØKS Document:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoØKSDocument} 
                                onChange={(e) => setResponsiblePersonRecnoØKSDocument(e.target.value)} 
                                placeholder="Responsible Person Recno for ØKS Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Person Recno for ØKS Case:</label>
                            <input 
                                type="text" 
                                value={responsiblePersonRecnoØKSCase} 
                                onChange={(e) => setResponsiblePersonRecnoØKSCase(e.target.value)} 
                                placeholder="Responsible Person Recno for ØKS Case" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for ØKS Document:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoØKSDocument} 
                                onChange={(e) => setResponsibleEnterpriseRecnoØKSDocument(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for ØKS Document" 
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                            <label style={{ marginRight: '10px' }}>Responsible Enterprise Recno for ØKS Case:</label>
                            <input 
                                type="text" 
                                value={responsibleEnterpriseRecnoØKSCase} 
                                onChange={(e) => setResponsibleEnterpriseRecnoØKSCase(e.target.value)} 
                                placeholder="Responsible Enterprise Recno for ØKS Case" 
                            />
                        </div>
                </div>
            </div>
            <div className="flex-right">
                <h2>Generated JSON</h2>
                <pre>{generateAdditionalConfigurationJson()}</pre>
            </div>
        </div>
    </div>
    );
  };
 
 
 export default DocumentMappingTool;
