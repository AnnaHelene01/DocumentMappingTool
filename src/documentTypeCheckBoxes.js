// DocumentTypeCheckboxes.js
import React from 'react';

const DocumentTypeCheckboxes = ({ documentTypes, selectedDocuments, toggleDocumentSelection, toggleSelectAll }) => {
    return (
        <div>
            <div>
                <input 
                    type="checkbox" 
                    onChange={(e) => toggleSelectAll(documentTypes, selectedDocuments, e.target.checked)} 
                    checked={documentTypes.every(type => selectedDocuments[type])} 
                />
                <label>Select All</label>
            </div>
            {documentTypes.map((type) => (
                <div key={type}>
                    <input 
                        type="checkbox" 
                        checked={selectedDocuments[type] || false} 
                        onChange={() => toggleDocumentSelection(type)} 
                    />
                    <label>{type}</label>
                </div>
            ))}
        </div>
    );
  };
  

export default DocumentTypeCheckboxes;
