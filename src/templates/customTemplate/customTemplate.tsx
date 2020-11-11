import React, { FunctionComponent } from "react";
import { Component } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";
import './assets/styles.css';
import collinsonlogo from './assets/logo_collinson.png';
import clientlogo from './assets/client_logo.png';
import negativeicon from './assets/icon_negative.png';
import positiveicon from './assets/icon_positive.png';

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
		<div className="main-container">
			<div className="header-container">
				<img src={collinsonlogo} className="collinson-logo" />
				<img src={clientlogo} className="client-logo" />
			</div>
			<div className="title-container">
				<p>{document?.foo?.title ?? "Test Report"}</p>
			</div>
			<div className="salutation-container">
				<p>Dear {document?.recipient?.name}, </p>
			</div>
			{document?.recipient?.result == "NEGATIVE" ? (
				<div className="result-container"><p>Result: <span className="text-negative">{document?.recipient?.result}</span><img src={negativeicon} className="icon" /></p><p className="desc text-negative">You may proceed to check-in and complete the boarding process</p></div>
			) : (
				<div className="result-container"><p>Result: <span className="text-positive">{document?.recipient?.result}</span><img src={positiveicon} className="icon" /></p><p className="desc text-positive">You will be unable to complete the check in and boarding process, please refer to the testing centre guidance on quarantine rules and procedures</p></div>
			)}
			<div className="detail-table-container">
				<table>
					<tr>
						<td align="left">Booking Reference:</td>
						<td align="right">{document?.recipient?.bookingreference}</td>
					</tr>
					<tr>
						<td align="left">Test Kit ID:</td>
						<td align="right">{document?.recipient?.testkitid}</td>
					</tr>
					<tr>
						<td align="left">Passport Number:</td>
						<td align="right">{document?.recipient?.psssportnumber}</td>
					</tr>
					<tr>
						<td align="left">Sample Taken:</td>
						<td align="right">{document?.recipient?.sampletaken}</td>
					</tr>
					<tr>
						<td align="left">Result Issued:</td>
						<td align="right">{document?.recipient?.resultissued}</td>
					</tr>
					<tr>
						<td align="left">Test Type:</td>
						<td align="right">{document?.recipient?.testtype}</td>
					</tr>
				</table>
			</div>
			<div className="discliamer-container">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className="footer-container">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</div>
	</div>
  );
};