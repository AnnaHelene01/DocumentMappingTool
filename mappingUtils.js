// src/mappingUtils.js

export const createTemplateMapping = (documentType, system, responsiblePersonRecnoDocument, responsiblePersonRecnoCase) => {
  const mapping = {
    Pattern: documentType,
    DocumentMapping: {
      DocumentTitle: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "Title",
        Value: `GNR/BNR - ${documentType}`,
      },
      ResponsiblePersonRecno: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "ResponsiblePersonRecno",
        Value: responsiblePersonRecnoDocument, // Bruker verdien fra inputfeltet for dokument
      },
      ResponsibleEnterpriseRecno: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "ResponsibleEnterpriseRecno",
        Value: "200485",
      },
      Category: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "Category",
        Value: "111",
      },
    },
    CaseMapping: {
      CaseTitle: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "Title",
        Value: `GNR/BNR - ${documentType}`,
      },
      CaseType: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "CaseType",
        Value: "recno:2",
      },
      ResponsiblePersonRecno: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "ResponsiblePersonRecno",
        Value: responsiblePersonRecnoCase, // Bruker verdien fra inputfeltet for sak
      },
      ResponsibleEnterpriseRecno: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "ResponsibleEnterpriseRecno",
        Value: "200485",
      },
    },
  };
 
  // Returner mapping i riktig format avhengig av systemet
  return {
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
        [system]: {
          TitleMatching: [mapping],
        },
      },
    },
  };
 };
 