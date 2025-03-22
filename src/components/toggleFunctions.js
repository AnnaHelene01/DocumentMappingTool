// toggleFunctions.js
import { createTemplateMapping } from "./mappingUtils";

export const toggleDocumentSelectAllAGROS = (documentTypes, selectedDocumentsAGROS, setSelectedDocumentsAGROS, isChecked) => {
   const newSelection = {};
   documentTypes.forEach((type) => {
       newSelection[type] = isChecked; // Sett til isChecked
   });
   setSelectedDocumentsAGROS(newSelection);
};

export const toggleDocumentSelectAllEStil = (documentTypes, selectedDocumentsEStil, setSelectedDocumentsEStil, isChecked) => {
   const newSelection = {};
   documentTypes.forEach((type) => {
       newSelection[type] = isChecked; // Sett til isChecked
   });
   setSelectedDocumentsEStil(newSelection);
};

export const toggleDocumentSelectAllPT = (documentTypes, selectedDocumentsPT, setSelectedDocumentsPT, isChecked) => {
   const newSelection = {};
   documentTypes.forEach((type) => {
       newSelection[type] = isChecked; // Sett til isChecked
   });
   setSelectedDocumentsPT(newSelection);
};

export const toggleDocumentSelectAllØKS = (documentTypes, selectedDocumentsØKS, setSelectedDocumentsØKS, isChecked) => {
   const newSelection = {};
   documentTypes.forEach((type) => {
       newSelection[type] = isChecked; // Sett til isChecked
   });
   setSelectedDocumentsØKS(newSelection);
};

// Toggle Dokumenttyper per system
export const toggleDocumentSelectionAGROS = (documentType, selectedDocumentsAGROS, documentMappings, setSelectedDocumentsAGROS, setDocumentMappings, responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase) => {
   const newSelection = { ...selectedDocumentsAGROS };
   newSelection[documentType] = !newSelection[documentType];

   if (newSelection[documentType] && !documentMappings[documentType]) {
       const newMappings = { ...documentMappings };
       newMappings[documentType] = createTemplateMapping(documentType, "AGROS", responsiblePersonRecnoAGROSDocument, responsiblePersonRecnoAGROSCase, responsibleEnterpriseRecnoAGROSDocument, responsibleEnterpriseRecnoAGROSCase);
       setDocumentMappings(newMappings);
   }

   setSelectedDocumentsAGROS(newSelection);
};

// Gjenta for EStil, PT, ØKS
export const toggleDocumentSelectionEStil = (documentType, selectedDocumentsEStil, documentMappings, setSelectedDocumentsEStil, setDocumentMappings, responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase) => {
   const newSelection = { ...selectedDocumentsEStil };
   newSelection[documentType] = !newSelection[documentType];

   if (newSelection[documentType] && !documentMappings[documentType]) {
       const newMappings = { ...documentMappings };
       newMappings[documentType] = createTemplateMapping(documentType, "eStil", responsiblePersonRecnoEStilDocument, responsiblePersonRecnoEStilCase, responsibleEnterpriseRecnoEStilDocument, responsibleEnterpriseRecnoEStilCase);
       setDocumentMappings(newMappings);
   }

   setSelectedDocumentsEStil(newSelection);
};

export const toggleDocumentSelectionPT = (documentType, selectedDocumentsPT, documentMappings, setSelectedDocumentsPT, setDocumentMappings, responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase) => {
   const newSelection = { ...selectedDocumentsPT };
   newSelection[documentType] = !newSelection[documentType];

   if (newSelection[documentType] && !documentMappings[documentType]) {
       const newMappings = { ...documentMappings };
       newMappings[documentType] = createTemplateMapping(documentType, "PT", responsiblePersonRecnoPTDocument, responsiblePersonRecnoPTCase, responsibleEnterpriseRecnoPTDocument, responsibleEnterpriseRecnoPTCase);
       setDocumentMappings(newMappings);
   }

   setSelectedDocumentsPT(newSelection);
};

export const toggleDocumentSelectionØKS = (documentType, selectedDocumentsØKS, documentMappings, setSelectedDocumentsØKS, setDocumentMappings, responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase) => {
   const newSelection = { ...selectedDocumentsØKS };
   newSelection[documentType] = !newSelection[documentType];

   if (newSelection[documentType] && !documentMappings[documentType]) {
       const newMappings = { ...documentMappings };
       newMappings[documentType] = createTemplateMapping(documentType, "ØKS", responsiblePersonRecnoØKSDocument, responsiblePersonRecnoØKSCase, responsibleEnterpriseRecnoØKSDocument, responsibleEnterpriseRecnoØKSCase);
       setDocumentMappings(newMappings);
   }

   setSelectedDocumentsØKS(newSelection);
};
