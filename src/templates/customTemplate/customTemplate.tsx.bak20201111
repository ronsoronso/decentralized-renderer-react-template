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
      <h2>Dear {document?.recipient?.name}</h2>
      <h2>Result: {document?.recipient?.result}</h2>
      <h2>Booking Reference: {document?.recipient?.bookingreference}</h2>
      <h2>Test Kit ID: {document?.recipient?.testkitid}</h2>
      <h2>Passport Number: {document?.recipient?.psssportnumber}</h2>
      <h2>Sample Taken: {document?.recipient?.sampletaken}</h2>
      <h2>Result Issued: {document?.recipient?.resultissued}</h2>
      <h2>Test Type: {document?.recipient?.testtype}</h2>
    </div>
  );
};
