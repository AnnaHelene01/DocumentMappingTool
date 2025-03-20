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
 
    // Tilstander for ResponsiblePersonRecno for hvert system
    const [responsiblePersonRecnoAGROSDocument, setResponsiblePersonRecnoAGROSDocument] = useState("");
    const [responsiblePersonRecnoAGROSCase, setResponsiblePersonRecnoAGROSCase] = useState("");
    const [responsiblePersonRecnoEStilDocument, setResponsiblePersonRecnoEStilDocument] = useState("");
    const [responsiblePersonRecnoEStilCase, setResponsiblePersonRecnoEStilCase] = useState("");
    const [responsiblePersonRecnoPTDocument, setResponsiblePersonRecnoPTDocument] = useState("");
    const [responsiblePersonRecnoPTCase, setResponsiblePersonRecnoPTCase] = useState("");
    const [responsiblePersonRecnoØKSDocument, setResponsiblePersonRecnoØKSDocument] = useState("");
    const [responsiblePersonRecnoØKSCase, setResponsiblePersonRecnoØKSCase] = useState("");
 
    const toggleDocumentSelectionAGROS = (documentType) => {
        const newSelection = { ...selectedDocumentsAGROS };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "AGROS", responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsAGROS(newSelection);
    };
 
    const toggleDocumentSelectionEStil = (documentType) => {
        const newSelection = { ...selectedDocumentsEStil };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "eStil", responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsEStil(newSelection);
    };
 
    const toggleDocumentSelectionPT = (documentType) => {
        const newSelection = { ...selectedDocumentsPT };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "PT", responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsPT(newSelection);
    };
 
    const toggleDocumentSelectionØKS = (documentType) => {
        const newSelection = { ...selectedDocumentsØKS };
        newSelection[documentType] = !newSelection[documentType];
 
        if (newSelection[documentType] && !documentMappings[documentType]) {
            const newMappings = { ...documentMappings };
            newMappings[documentType] = createTemplateMapping(documentType, "ØKS", responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase);
            setDocumentMappings(newMappings);
        }
 
        setSelectedDocumentsØKS(newSelection);
    };

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
                // Legg til flere felt her...
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
               <div style={{ display: 'flex', alignItems: 'center' }}>
                   <label style={{ marginRight: '10px' }}>Responsible Person Recno for AGROS Case:</label>
                   <input 
                       type="text" 
                       value={responsiblePersonRecnoAGROSCase} 
                       onChange={(e) => setResponsiblePersonRecnoAGROSCase(e.target.value)} 
                       placeholder="Responsible Person Recno for AGROS Case" 
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
               <div style={{ display: 'flex', alignItems: 'center' }}>
                   <label style={{ marginRight: '10px' }}>Responsible Person Recno for eStil Case:</label>
                   <input 
                       type="text" 
                       value={responsiblePersonRecnoEStilCase} 
                       onChange={(e) => setResponsiblePersonRecnoEStilCase(e.target.value)} 
                       placeholder="Responsible Person Recno for eStil Case" 
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
               <div style={{ display: 'flex', alignItems: 'center' }}>
                   <label style={{ marginRight: '10px' }}>Responsible Person Recno for PT Case:</label>
                   <input 
                       type="text" 
                       value={responsiblePersonRecnoPTCase} 
                       onChange={(e) => setResponsiblePersonRecnoPTCase(e.target.value)} 
                       placeholder="Responsible Person Recno for PT Case" 
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
               <div style={{ display: 'flex', alignItems: 'center' }}>
                   <label style={{ marginRight: '10px' }}>Responsible Person Recno for ØKS Case:</label>
                   <input 
                       type="text" 
                       value={responsiblePersonRecnoØKSCase} 
                       onChange={(e) => setResponsiblePersonRecnoØKSCase(e.target.value)} 
                       placeholder="Responsible Person Recno for ØKS Case" 
                   />
               </div>
            </div>
  
            <h2>Generated JSON</h2>
            <pre>{generateFinalJson()}</pre>
            <button onClick={downloadJson}>Download JSON</button> {/* Legg til eksportknappen */}
        </div>
    );
  };
 
 
 export default DocumentMappingTool;
