import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "Colli Certificate of Health",
  issuers: [
    {
      name: "Colli",
      documentStore: "0xf616006f3313aE88125f67919034A2743cAF7dAE",
      identityProof: {
        location: "issuer.loyalty.com.hk",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "Artus Fung"
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
