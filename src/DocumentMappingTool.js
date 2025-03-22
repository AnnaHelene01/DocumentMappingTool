import React, { useState } from "react";
import { 
   sampleDocumentTypesAGROS, 
   sampleDocumentTypesEStil, 
   sampleDocumentTypesPT, 
   sampleDocumentTypesØKS 
} from "./documentTypes"; // Importer dokumenttypene
import DocumentTypeCheckboxes from "./documentTypeCheckBoxes"; // Importer sjekkboks-komponenten
import { generateFinalJson } from "./jsonUtils";
import {
    toggleDocumentSelectionAGROS,
    toggleDocumentSelectionEStil,
    toggleDocumentSelectionPT,
    toggleDocumentSelectionØKS,
} from "./components/toggleFunctions" //Importer toggle-funksjoner
import { generateAdditionalConfigurationJson } from "./components/additionalConfigUtils"; //Importer JSON-generering
import DocumentInputFields from "./components/DocumentInputFields";

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

    //Tilstander for CaseTitle for hvert system
    const [caseTitleAGROSCase, setCaseTitleAGROSCase] = useState("");
    const [caseTitleEStilCase, setCaseTitleEStilCase] = useState("");
    const [caseTitlePTCase, setCaseTitlePTCase] = useState("");
    const [caseTitleØKSCase, setCaseTitleØKSCase] = useState("");
 
    const downloadJson = () => {
        const json = generateFinalJson(selectedDocumentsAGROS, selectedDocumentsEStil, selectedDocumentsPT, selectedDocumentsØKS, documentMappings);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "document-mappings.json"; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
 
    return (
        <div>
            <h1>Document Mapping Tool</h1>
            <div className="button-container">
                <button onClick={downloadJson}>Download JSON</button>
            </div>
            <div className="flex-main">
                <div className="flex-left">
                    {/* AGROS Document Types */}
                    <DocumentInputFields 
                        title="AGROS"
                        responsiblePersonRecnoDocument={responsiblePersonRecnoAGROSDocument}
                        setResponsiblePersonRecnoDocument={setResponsiblePersonRecnoAGROSDocument}
                        responsiblePersonRecnoCase={responsiblePersonRecnoAGROSCase}
                        setResponsiblePersonRecnoCase={setResponsiblePersonRecnoAGROSCase}
                        responsibleEnterpriseRecnoDocument={responsibleEnterpriseRecnoAGROSDocument}
                        setResponsibleEnterpriseRecnoDocument={setResponsibleEnterpriseRecnoAGROSDocument}
                        responsibleEnterpriseRecnoCase={responsibleEnterpriseRecnoAGROSCase}
                        setResponsibleEnterpriseRecnoCase={setResponsibleEnterpriseRecnoAGROSCase}
                        caseTitle={caseTitleAGROSCase}
                        setCaseTitle={setCaseTitleAGROSCase}
                    />
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesAGROS}
                        selectedDocuments={selectedDocumentsAGROS}
                        toggleDocumentSelection={(type, isChecked) => toggleDocumentSelectionAGROS(type, selectedDocumentsAGROS, documentMappings, setSelectedDocumentsAGROS, setDocumentMappings, responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase, caseTitleAGROSCase, isChecked)}
                    />
 
                    {/* eStil Document Types */}
                    <DocumentInputFields 
                        title="eStil"
                        responsiblePersonRecnoDocument={responsiblePersonRecnoEStilDocument}
                        setResponsiblePersonRecnoDocument={setResponsiblePersonRecnoEStilDocument}
                        responsiblePersonRecnoCase={responsiblePersonRecnoEStilCase}
                        setResponsiblePersonRecnoCase={setResponsiblePersonRecnoEStilCase}
                        responsibleEnterpriseRecnoDocument={responsibleEnterpriseRecnoEStilDocument}
                        setResponsibleEnterpriseRecnoDocument={setResponsibleEnterpriseRecnoEStilDocument}
                        responsibleEnterpriseRecnoCase={responsibleEnterpriseRecnoEStilCase}
                        setResponsibleEnterpriseRecnoCase={setResponsibleEnterpriseRecnoEStilCase}
                        caseTitle={caseTitleEStilCase}
                        setCaseTitle={setCaseTitleEStilCase}
                    />
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesEStil}
                        selectedDocuments={selectedDocumentsEStil}
                        toggleDocumentSelection={(type, isChecked) => toggleDocumentSelectionEStil(type, selectedDocumentsEStil, documentMappings, setSelectedDocumentsEStil, setDocumentMappings, responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase, caseTitleEStilCase, isChecked)}
                    />
 
                    {/* PT Document Types */}
                    <DocumentInputFields 
                        title="PT"
                        responsiblePersonRecnoDocument={responsiblePersonRecnoPTDocument}
                        setResponsiblePersonRecnoDocument={setResponsiblePersonRecnoPTDocument}
                        responsiblePersonRecnoCase={responsiblePersonRecnoPTCase}
                        setResponsiblePersonRecnoCase={setResponsiblePersonRecnoPTCase}
                        responsibleEnterpriseRecnoDocument={responsibleEnterpriseRecnoPTDocument}
                        setResponsibleEnterpriseRecnoDocument={setResponsibleEnterpriseRecnoPTDocument}
                        responsibleEnterpriseRecnoCase={responsibleEnterpriseRecnoPTCase}
                        setResponsibleEnterpriseRecnoCase={setResponsibleEnterpriseRecnoPTCase}
                        caseTitle={caseTitlePTCase}
                        setCaseTitle={setCaseTitlePTCase}
                        
                    />
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesPT}
                        selectedDocuments={selectedDocumentsPT}
                        toggleDocumentSelection={(type, isChecked) => toggleDocumentSelectionPT(type, selectedDocumentsPT, documentMappings, setSelectedDocumentsPT, setDocumentMappings, responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase, caseTitlePTCase, isChecked)}
                    />
 
                    {/* ØKS Document Types */}
                    <DocumentInputFields 
                        title="ØKS"
                        responsiblePersonRecnoDocument={responsiblePersonRecnoØKSDocument}
                        setResponsiblePersonRecnoDocument={setResponsiblePersonRecnoØKSDocument}
                        responsiblePersonRecnoCase={responsiblePersonRecnoØKSCase}
                        setResponsiblePersonRecnoCase={setResponsiblePersonRecnoØKSCase}
                        responsibleEnterpriseRecnoDocument={responsibleEnterpriseRecnoØKSDocument}
                        setResponsibleEnterpriseRecnoDocument={setResponsibleEnterpriseRecnoØKSDocument}
                        responsibleEnterpriseRecnoCase={responsibleEnterpriseRecnoØKSCase}
                        setResponsibleEnterpriseRecnoCase={setResponsibleEnterpriseRecnoØKSCase}
                        caseTitle={caseTitleØKSCase}
                        setCaseTitle={setCaseTitleØKSCase}
                    />
                    <DocumentTypeCheckboxes
                        documentTypes={sampleDocumentTypesØKS}
                        selectedDocuments={selectedDocumentsØKS}
                        toggleDocumentSelection={(type, isChecked) => toggleDocumentSelectionØKS(type, selectedDocumentsØKS, documentMappings, setSelectedDocumentsØKS, setDocumentMappings, responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase, caseTitleØKSCase, isChecked)}
                    />
                </div>
                <div className="flex-right">
                    <h2>Generated JSON</h2>
                    <pre>{generateAdditionalConfigurationJson(selectedDocumentsAGROS, selectedDocumentsEStil, selectedDocumentsPT, selectedDocumentsØKS, documentMappings)}</pre>
                </div>
            </div>
        </div>
    );
 };
 
 export default DocumentMappingTool;