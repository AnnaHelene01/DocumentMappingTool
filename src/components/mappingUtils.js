export const createTemplateMapping = (
  documentType, 
  system, 
  responsiblePersonRecnoDocument, 
  responsiblePersonRecnoCase, 
  responsibleEnterpriseRecnoDocument, 
  responsibleEnterpriseRecnoCase,
  caseTitle
 ) => {
  // Sjekk om dokumenttypen inneholder "sykavl" eller "Sykdomsavløsning"
  const isSykdomsavløsning = documentType.includes("sykavl") || documentType.includes("Sykdomsavløsning");
 
  // Definer mapping basert på om det er en sykdomsavløsning eller ikke
  const mapping = isSykdomsavløsning ? {
    Pattern: "Søknad om tilskudd - sykavl",
    DocumentMapping: {
      DocumentTitle: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "Title",
        Value: "Søknad om tilskudd til avløsning ved sykdom og fødsel",
      },
      UnofficialTitle: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "UnofficialTitle",
        Value: "Søknad om tilskudd til avløsning ved sykdom og fødsel - GNR/BNR",
      },
      ResponsiblePersonRecno: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "ResponsiblePersonRecno",
        Value: responsiblePersonRecnoDocument,
      },
      ResponsibleEnterpriseRecno: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "ResponsibleEnterpriseRecno",
        Value: responsibleEnterpriseRecnoDocument,
      },
      Category: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "Category",
        Value: "110",
      },
      AccessCode: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "AccessCode",
        Value: "recno:18",
      },
      Paragraph: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "Paragraph",
        Value: "Offl. § 13 jf. fvl. § 13 første ledd pkt 1",
      },
      AccessGroup: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "AccessGroup",
        Value: "recno:200615",
      },
      SetContactUnOfficial: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "SetContactUnOfficial",
        Value: "true",
      },
    },
    CaseMapping: {
      CaseTitle: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "Title",
        Value: `${caseTitle}`,
      },
      UnofficialTitle: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "UnofficialTitle",
        Value: `${caseTitle}`,
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
        Value: responsiblePersonRecnoCase,
      },
      ResponsibleEnterpriseRecno: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "ResponsibleEnterpriseRecno",
        Value: responsibleEnterpriseRecnoCase,
      },
      AccessCode: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "AccessCode",
        Value: "recno:18",
      },
      Paragraph: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "Paragraph",
        Value: "Offl. § 13 jf. fvl. § 13 første ledd pkt 1",
      },
      AccessGroup: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "AccessGroup",
        Value: "recno:200615",
      },
    },
  } : {
    // Vanlig mapping for andre dokumenttyper
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
        Value: responsiblePersonRecnoDocument,
      },
      ResponsibleEnterpriseRecno: {
        RootPath: "InsertDocuments",
        MainContract: "CreateDocumentParameter",
        SubContract: "",
        MainPropertyName: "ResponsibleEnterpriseRecno",
        Value: responsibleEnterpriseRecnoDocument,
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
        Value: `${caseTitle}`,
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
        Value: responsiblePersonRecnoCase,
      },
      ResponsibleEnterpriseRecno: {
        RootPath: "InsertCases",
        MainContract: "CreateCaseParameter",
        SubContract: "",
        MainPropertyName: "ResponsibleEnterpriseRecno",
        Value: responsibleEnterpriseRecnoCase,
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
        [system]: {
          TitleMatching: [mapping],
        },
      },
    },
  };
 };
 