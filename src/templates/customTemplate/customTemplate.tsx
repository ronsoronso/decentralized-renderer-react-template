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
  	<div css={style} className={document?.recipient?.result} id="custom-template">
		<style>
			.positive-result-container,
			.negative-result-container {
				display: none;
			}
			.NEGATIVE .negative-result-container {
				display: block;
			}
			.POSITIVE .positive-result-container {
				display: block;
			}
		</style>
		<div style="background-color: #FFF; width: 680px; min-height: 1095px; margin: 0 auto 0 auto;">
			<div style="padding: 38px 46px 44px 38px; min-height: 44px;">
				<img src="https://imageserver.hk/2020/collinsongroup/covid-test-cert-images/logo_collinson.png" style="width: 196px; height: auto; float: left;">
				<img src="https://imageserver.hk/2020/collinsongroup/covid-test-cert-images/client_logo.png" style="width: 167px; height: auto; float: right;">
			</div>
			<div style="padding: 0px 46px 32px 38px; text-align: center;">
				<p style="font-family: Arial; font-size: 48px; font-weight: bold; color: #003865; line-height: 58px; margin-top: 0px; margin-bottom: 0px;">{document?.foo?.title ?? "Test Report"}</p>
			</div>
			<div style="padding: 0px 46px 32px 38px; text-align: center;">
				<p style="font-family: Arial; font-size: 26px; font-weight: bold; color: #003865; line-height: 34px; letter-spacing: 0.37px; margin-top: 0px; margin-bottom: 0px;">Dear {document?.recipient?.name}, </p>
			</div>
			<div style="padding: 0px 46px 40px 38px; text-align: center;" class="result-container">
				<p style="font-family: Arial; font-size: 28px; font-weight: bold; color: #003865; line-height: 41px; letter-spacing: 0.4px; margin-top: 0px; margin-bottom: 30px;">Result: <span style="color: #75B929;">{document?.recipient?.result}</span><img src="https://imageserver.hk/2020/collinsongroup/covid-test-cert-images/icon_negative.png" style="width: 29px; height: auto; position: relative; top: 6px; left: 20px;"></p>
				<p style="font-family: Arial; font-size: 18px; font-weight: bold; color: #75B929; line-height: 21px; letter-spacing: 0.26px; margin-top: 0px; margin-bottom: 0px;">You may proceed to check-in and complete the boarding process</p>
			</div>
			<div style="padding: 0px 46px 40px 38px; text-align: center;" class="result-container">
				<p style="font-family: Arial; font-size: 28px; font-weight: bold; color: #003865; line-height: 41px; letter-spacing: 0.4px; margin-top: 0px; margin-bottom: 30px;">Result: <span style="color: #D4236E;">{document?.recipient?.result}</span><img src="https://imageserver.hk/2020/collinsongroup/covid-test-cert-images/icon_positive.png" style="width: 29px; height: auto; position: relative; top: 6px; left: 20px;"></p>
				<p style="font-family: Arial; font-size: 18px; font-weight: bold; color: #D4236E; line-height: 21px; letter-spacing: 0.26px; margin-top: 0px; margin-bottom: 0px;">You may proceed to check-in and complete the boarding process</p>
			</div>
			<div style="background-color: #F2F8FB; padding: 40px 46px 18px 38px; text-align: center;">
				<table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
					<tr>
						<td align="left" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">Booking Reference:</td>
						<td align="right" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">{document?.recipient?.bookingreference}</td>
					</tr>
					<tr>
						<td align="left" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">Test Kit ID:</td>
						<td align="right" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">{document?.recipient?.testkitid}</td>
					</tr>
					<tr>
						<td align="left" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">Passport Number:</td>
						<td align="right" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">{document?.recipient?.psssportnumber}</td>
					</tr>
					<tr>
						<td align="left" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">Sample Taken:</td>
						<td align="right" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">{document?.recipient?.sampletaken}</td>
					</tr>
					<tr>
						<td align="left" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">Result Issued:</td>
						<td align="right" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">{document?.recipient?.resultissued}</td>
					</tr>
					<tr>
						<td align="left" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">Test Type:</td>
						<td align="right" style="font-family: Arial; font-size: 16px; color: #003865; line-height: 23px; letter-spacing: 0.23px; padding-top: 0px; padding-bottom: 20px;">{document?.recipient?.testtype}</td>
					</tr>
				</table>
			</div>
			<div style="padding: 40px 46px 40px 38px; text-align: center;">
				<p style="font-family: Arial; font-size: 14px; color: #606060; line-height: 21px; letter-spacing: 0.2px; margin-top: 0px; margin-bottom: 30px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div style="background-color: #023765; padding: 40px 46px 40px 38px; text-align: center;">
				<p style="font-family: Arial; font-size: 14px; color: #FFFFFF; line-height: 21px; letter-spacing: 0.2px; margin-top: 0px; margin-bottom: 30px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</div>
	</div>
  );
};