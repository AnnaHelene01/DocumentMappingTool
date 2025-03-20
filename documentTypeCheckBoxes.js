// src/documentTypeCheckBoxes.js

import React from "react";

const DocumentTypeCheckboxes = ({ documentTypes, selectedDocuments, toggleDocumentSelection }) => {
 return (
   <div>
     {documentTypes.map((docType) => (
       <div key={docType}>
         <input
           type="checkbox"
           checked={selectedDocuments[docType] || false}
           onChange={() => toggleDocumentSelection(docType)}
         />
         <label>{docType}</label>
       </div>
     ))}
   </div>
 );
};

export default DocumentTypeCheckboxes;
