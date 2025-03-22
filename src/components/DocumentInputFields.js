// DocumentInputFields.js
import React from 'react';

const DocumentInputFields = ({ 
    title, 
    responsiblePersonRecnoDocument, 
    setResponsiblePersonRecnoDocument, 
    responsiblePersonRecnoCase, 
    setResponsiblePersonRecnoCase, 
    responsibleEnterpriseRecnoDocument, 
    setResponsibleEnterpriseRecnoDocument, 
    responsibleEnterpriseRecnoCase, 
    setResponsibleEnterpriseRecnoCase,
    caseTitle,
    setCaseTitle 
}) => {
   return (
       <div className="document-input-fields">
           <h2>{title} Document Types</h2>
           <div className="input-group">
               <label>Responsible Person Recno for {title} Document:</label>
               <input 
                   type="text" 
                   value={responsiblePersonRecnoDocument} 
                   onChange={(e) => setResponsiblePersonRecnoDocument(e.target.value)} 
                   placeholder={`Responsible Person Recno for ${title} Document`} 
               />
           </div>
           <div className="input-group">
               <label>Responsible Person Recno for {title} Case:</label>
               <input 
                   type="text" 
                   value={responsiblePersonRecnoCase} 
                   onChange={(e) => setResponsiblePersonRecnoCase(e.target.value)} 
                   placeholder={`Responsible Person Recno for ${title} Case`} 
               />
           </div>
           <div className="input-group">
               <label>Responsible Enterprise Recno for {title} Document:</label>
               <input 
                   type="text" 
                   value={responsibleEnterpriseRecnoDocument} 
                   onChange={(e) => setResponsibleEnterpriseRecnoDocument(e.target.value)} 
                   placeholder={`Responsible Enterprise Recno for ${title} Document`} 
               />
           </div>
           <div className="input-group">
               <label>Responsible Enterprise Recno for {title} Case:</label>
               <input 
                   type="text" 
                   value={responsibleEnterpriseRecnoCase} 
                   onChange={(e) => setResponsibleEnterpriseRecnoCase(e.target.value)} 
                   placeholder={`Responsible Enterprise Recno for ${title} Case`} 
               />
           </div>
           <div className="input-group">
               <label>Case title for {title} Case:</label>
               <input 
                   type="text" 
                   value={caseTitle} 
                   onChange={(e) => setCaseTitle(e.target.value)} 
                   placeholder={`Case title for ${title} Case`} 
               />
           </div>
       </div>
   );
};

export default DocumentInputFields;
