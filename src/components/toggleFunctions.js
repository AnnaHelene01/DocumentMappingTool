// toggleFunctions.js
import { createTemplateMapping } from "./mappingUtils";

export const toggleSelectAllAGROS = (documentTypes, documentMappings, setSelectedDocumentsAGROS, setDocumentMappings, responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase, caseTitleAGROSCase, isChecked) => {
    const newSelection = {};
    const newMappings = { ...documentMappings };
 
    //console.log("Toggling Select All for AGROS:", isChecked);
 
    documentTypes.forEach(type => {
        newSelection[type] = isChecked;
        if (isChecked) {
            //console.log(`Selecting document type: ${type}`);
            newMappings[type] = createTemplateMapping(type, "AGROS", responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase, caseTitleAGROSCase);
        } else {
            //console.log(`Deselecting document type: ${type}`);
            delete newMappings[type];
        }
    });
 
    setDocumentMappings(newMappings);
    setSelectedDocumentsAGROS(newSelection);
    //console.log("New selection state:", newSelection);
 };
 

// Toggle Dokumenttyper per system
export const toggleDocumentSelectionAGROS = (documentType, selectedDocumentsAGROS, documentMappings, setSelectedDocumentsAGROS, setDocumentMappings, responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase, caseTitleAGROSCase) => {
   const newSelection = { ...selectedDocumentsAGROS };
   newSelection[documentType] = !newSelection[documentType];

   const newMappings = { ...documentMappings };
   if (newSelection[documentType]) {
       newMappings[documentType] = createTemplateMapping(documentType, "AGROS", responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase, caseTitleAGROSCase);
   } else {
       delete newMappings[documentType]; // Fjern mapping hvis dokumentet ikke er valgt
   }

   setDocumentMappings(newMappings);
   setSelectedDocumentsAGROS(newSelection);
};

// EStil
export const toggleSelectAllEStil = (documentTypes, documentMappings, setSelectedDocumentsEStil, setDocumentMappings, responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase, caseTitleEStilCase, isChecked) => {
    const newSelection = {};
    const newMappings = { ...documentMappings };
 
    documentTypes.forEach(type => {
        newSelection[type] = isChecked;
        if (isChecked) {
            newMappings[type] = createTemplateMapping(type, "eStil", responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase, caseTitleEStilCase);
        } else {
            delete newMappings[type];
        }
    });
 
    setDocumentMappings(newMappings);
    setSelectedDocumentsEStil(newSelection);
 };

export const toggleDocumentSelectionEStil = (documentType, selectedDocumentsEStil, documentMappings, setSelectedDocumentsEStil, setDocumentMappings, responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase, caseTitleEStilCase) => {
   const newSelection = { ...selectedDocumentsEStil };
   newSelection[documentType] = !newSelection[documentType];

   const newMappings = { ...documentMappings };
   if (newSelection[documentType]) {
       newMappings[documentType] = createTemplateMapping(documentType, "eStil", responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase, caseTitleEStilCase);
   } else {
       delete newMappings[documentType];
   }

   setDocumentMappings(newMappings);
   setSelectedDocumentsEStil(newSelection);
};

// PT
export const toggleSelectAllPT = (documentTypes, documentMappings, setSelectedDocumentsPT, setDocumentMappings, responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase, caseTitlePTCase, isChecked) => {
    const newSelection = {};
    const newMappings = { ...documentMappings };
 
    documentTypes.forEach(type => {
        newSelection[type] = isChecked;
        if (isChecked) {
            newMappings[type] = createTemplateMapping(type, "PT", responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase, caseTitlePTCase);
        } else {
            delete newMappings[type];
        }
    });
 
    setDocumentMappings(newMappings);
    setSelectedDocumentsPT(newSelection);
 };

export const toggleDocumentSelectionPT = (documentType, selectedDocumentsPT, documentMappings, setSelectedDocumentsPT, setDocumentMappings, responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase, caseTitlePTCase) => {
   const newSelection = { ...selectedDocumentsPT };
   newSelection[documentType] = !newSelection[documentType];

   const newMappings = { ...documentMappings };
   if (newSelection[documentType]) {
       newMappings[documentType] = createTemplateMapping(documentType, "PT", responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase, caseTitlePTCase);
   } else {
       delete newMappings[documentType];
   }

   setDocumentMappings(newMappings);
   setSelectedDocumentsPT(newSelection);
};

// ØKS
export const toggleSelectAllØKS = (documentTypes, documentMappings, setSelectedDocumentsØKS, setDocumentMappings, responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase, caseTitleØKSCase, isChecked) => {
    const newSelection = {};
    const newMappings = { ...documentMappings };
 
    documentTypes.forEach(type => {
        newSelection[type] = isChecked;
        if (isChecked) {
            newMappings[type] = createTemplateMapping(type, "ØKS", responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase, caseTitleØKSCase);
        } else {
            delete newMappings[type];
        }
    });
 
    setDocumentMappings(newMappings);
    setSelectedDocumentsØKS(newSelection);
 };

export const toggleDocumentSelectionØKS = (documentType, selectedDocumentsØKS, documentMappings, setSelectedDocumentsØKS, setDocumentMappings, responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase, caseTitleØKSCase) => {
   const newSelection = { ...selectedDocumentsØKS };
   newSelection[documentType] = !newSelection[documentType];

   const newMappings = { ...documentMappings };
   if (newSelection[documentType]) {
       newMappings[documentType] = createTemplateMapping(documentType, "ØKS", responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase, caseTitleØKSCase);
   } else {
       delete newMappings[documentType];
   }

   setDocumentMappings(newMappings);
   setSelectedDocumentsØKS(newSelection);
};
