import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  institute: string;
  foo?: {
    title: string;
  };
  recipient?: {
    name: string;
    result: string;
    bookingreference: string;
    testkitid: string;
    psssportnumber: string;
    sampletaken: string;
    resultissued: string;
    testtype: string;
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "John Doe",
  institute: "Institute of John Doe",
  issuers: [
    {
      name: "institute of blockchain"
    }
  ],
  $template: {
    name: "custom",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  foo: {
    title: "Bar is awesome"
  }
};
