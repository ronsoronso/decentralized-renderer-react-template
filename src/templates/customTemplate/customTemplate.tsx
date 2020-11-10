import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";

const style = css`
  position: relative;
  pre {
    background-color: lightgray;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={style} className={className} id="custom-template">
      <PrintWatermark />
      <h1>{document?.foo?.title ?? "Test Report"}</h1>
      <pre>{JSON.stringify(document, null, 2)}</pre>
      <div>awarded to</div>
      <h1>"Dear "{document?.recipient?.name}</h1>
      <h1>"Result: "{document?.recipient?.result}</h1>
      <h1>"Booking Reference:"{document?.recipient?.bookingreference}</h1>
      <h1>"Test Kit ID: "{document?.recipient?.testkitid}</h1>
      <h1>"Passport Number: "{document?.recipient?.psssportnumber}</h1>
      <h1>"Sample Taken: "{document?.recipient?.sampletaken}</h1>
      <h1>"Result Issued: "{document?.recipient?.resultissued}</h1>
      <h1>"Test Type: "{document?.recipient?.testtype}</h1>
    </div>
  );
};
