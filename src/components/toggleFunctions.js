// toggleFunctions.js
import { createTemplateMapping } from "./mappingUtils";

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

// Gjenta for EStil, PT, ØKS
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
