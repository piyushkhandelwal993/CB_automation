<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<HTML>
<HEAD>
<meta HTTP-EQUIV="Cache-Control" CONTENT="no cache">
<meta HTTP-EQUIV="Pragma" CONTENT="no cache">
<meta HTTP-EQUIV="Expires" CONTENT="0">
<meta HTTP-EQUIV="content-type" CONTENT="text/html; charset=utf-8">

	<TITLE>MasterCard SecureCode</TITLE>
	<LINK REL="stylesheet" HREF="en_US_YESBANK_MC/style.css" TYPE="text/css">

	<!-- x-out.js has code to POST PAReq to CAP when user closes window. -->
	<script language=javascript src="en_US_YESBANK_MC/x-out.js" ></script>
	<script language=javascript src="Riskfort/rfutil.js" ></script>

	<SCRIPT LANGUAGE="JavaScript">

		function popUp2(strURL)
		{
			popUP2 = window.open(document.passwdForm.Locale.value + strURL,'popUp2','width=390,height=400,scrollbars=no,screenX=100,screenY=100,left=100,top=100');
			popUP2.focus();
		}

		function forgotPasswordLink(object)
		{
			OnFPWDHandler(object);
		}

	</SCRIPT>

	<SCRIPT LANGUAGE="JavaScript">

		var refreshing = false;
		var navigating = false;
		var closing = true;
		var	IsCancelButton = false;

		function closeButton(object)
		{
			if (confirm("Are you sure you wish to quit the MasterCard SecureCode process? Selecting OK will automatically return you to the online store."))
			{
				IsCancelButton = true;
				OnCancelHandler(object);
			}
		}

		function onBeforeUnloadHandler(object)
		{
			if ( !refreshing && closing && !IsCancelButton)
			{
				var isChipInAuth = ChipCardInAuthList();
				if (!isChipInAuth || (isChipInAuth && !installChipPlugin))
				{
					event.returnValue = "Your purchase has not completed!\n To complete your purchase click 'Cancel'.\nThen submit your password on the current page.";
				}
			}

		}

		function onFocusHandler()
		{
			closing = true;
		}


		var LoadError = 0;
		var debugging = 0;
		function debugAlert(msg)
		{
			if ( debugging == 1 )
			{
				alert(msg);
			}
		}

		function init()
		{
			var so = new SWFObject("Riskfort/rfdevice.swf", "cookiemanager", "0", "0", "6", "#ffff00");
			so.addParam("allowScriptAccess", "always");
			so.write("flashcontent");

			var divid = document.getElementById("flashsetting");
			divid.style.display = 'block'; //intially hidden
		}

		

function OnClickHandler()
{
	df = document.forms[0];
	if ( df.submitted.value == 1 )
	{
		return;
	}
	pwd = df.pin.value;
	if ( true ) {
		var objCH = df.cardHolderSelect;
		if ( objCH != null && objCH.options ) {
			df.cardHolder.value = objCH.options[objCH.selectedIndex].value;
		}
		var oATyp = df.authSelect;
		if ( oATyp == null ) {
			oVal = df.authDefaultSelect.value;
			oATyp = oVal;
		} else {
			oVal = oATyp.options[oATyp.selectedIndex].value;
		}
		if ( oATyp != null ) {
			if ( oVal.indexOf("Visa Password") != -1 ) { 
				df.authType.value = "Visa Password";
				df.submitted.value=1
				df.submit();
			}
		} else {
			df.authType.value = "Visa Password";
			df.submit();
		}
	}
}




		var plugin;
		var noRdrMsgDisplayed=false;
		var canFallBack = false;

		var pluginInstallURL = "";

		var chipPluginVersion = "";

		function OnPageInit()
		{
			// TO HANDLE THE EVENT WHEN USER CLOSES POPUP
			// pre-generate the HTML that is needed to POST to CAP when window is closed.
			// does not work properly on NS if generated in the close-window event handler
			gatherFormData(document.passwdForm, "%#*@_XOUT_@*#%");

			// 0 = 0 if Riskfort is not Enabled !!
			if ("0" != "0") {
				if ("0" == "1") {
					// Setting the Browser Cookie
					// alert("Setting the cookie");
					setBrowserCookie("RiskfortCookie","");

				}
				else {
					// Setting the Flash Cookie
					init();
					// alert("Setting the flash cookie");
					setFlashCookie("RiskfortCookie","");
				}
			}

			// uncomment the following if a client-side timeout is to be enabled.
			// after the timeout period, the CAP dialog will be auto-POSTed resulting in
			// a failed PARes.
			// Change the 2nd parameter to suit the timeout needed;
			// the value should be in milli seconds.
			// setTimeout("ForceCancel()", 15000); // treat as cancelled txn if not posted in 15 seconds.

			closing=true;
			window.history.go(1);
			SetSubmit();
			if (pluginInstallURL != null && pluginInstallURL != "")
			{
				pluginInstallURL += "defaultauto.htm";
			}
		
			if(0 == 1999 || 0 == 1204)
			{
				popUp2('pwdhint.htm');
			}
			ResetSubmit();
			document.passwdForm.pin.focus();
		}

		function ForceCancel() {
			closing=false;
			var objCardHolder = document.passwdForm.cardHolderSelect;
			if ( objCardHolder != null ) {
				var chIndex = objCardHolder.selectedIndex;
				document.passwdForm.cardHolder.value = objCardHolder.options[chIndex].text;
			}
			document.passwdForm.authType.value = document.forms[0].authDefaultSelect.value;
			document.passwdForm.cancelHit.value = "%#*@_TIMEDOUT_@*#%";
			if ( IsNetscapeOnSolaris() )
			{
				setTimeout('document.passwdForm.submit()', 500);
			}
			else
			{
				document.passwdForm.submit();
			}
		}

		function OnSubmitHandler1()
		{
			document.passwdForm.forgotPassword.value = 0;
			return OnSubmitHandler();
		}
	</SCRIPT>

	<script language=javascript src="en_US_YESBANK_MC/pwdbase.js" ></script>
	
</HEAD>

<BODY BGCOLOR="#ffffff" MARGINHEIGHT="0" MARGINWIDTH="0" LEFTMARGIN="0" TOPMARGIN="0" onload="OnPageInit();" onfocus="onFocusHandler();" onbeforeunload="onBeforeUnloadHandler(this);" onunload="onUnloadHandler(this);" >
	<div id="flashsetting">
	<div id ="flashcontent"></div>
	</div>
	<div id="cookiediv">

<FORM name="passwdForm" method=POST onsubmit="return OnSubmitHandler1();">

<!-- This table centers the content area in the window, irregardless of the window's size -->
<TABLE WIDTH="330" CELLPADDING="0" CELLSPACING="0" BORDER="0">
	<TR>
	<!-- Left pixels of white space -->

	<TH rowspan=3><IMG SRC="en_US_YESBANK_MC/images/spacer_clear.gif" WIDTH="5" HEIGHT="1" BORDER=0 ALT=""></TH>
	<!-- Top pixels of white space -->
	</TR>
		<TR>
					<TD ALIGN="left" VALIGN="top">
						<!-- Issuer logo -->
						<IMG name="memberLogo" src="en_US_YESBANK_MC/images/YesBank"  BORDER=0 ALT="">
					</TD>
					<TD VALIGN="top" align="right">
						<!-- Visa graphic -->
						<IMG name="vpasLogo" SRC="en_US_YESBANK_MC/images/vpas_logo.gif"  BORDER=0 ALT="MasterCard&reg; SecureCode&trade;">
					</TD>
		</TR>

				<NOSCRIPT>
					Script is disabled in your browser. Some of the buttons will not work.
				</NOSCRIPT>
                        <!--Add space as per Visa req -->
				<TR>

					<TD COLSPAN="2" VALIGN="top">
						<!-- Text area -->

					<TABLE ALIGN="center" WIDTH="340" CELLSPACING="0" CELLPADDING="2" BORDER="0">
                		<script>
                			if(0 != 1200 && 0 != 1204)
                			{
	            		     	document.write('<tr><td colspan="2"><span class="errormsg"></span></td></tr>');
	            		    }
                		 </script>
                		 <noscript>
                			<span class="errormsg"></span>
                		 </noscript>
						<tr><td colspan="2" class="title"><H4>Added Protection</H4></td></tr>

						<tr><td colspan="2" class="main">Please submit your MasterCard&reg; SecureCode&trade;
						<IMG SRC="en_US_YESBANK_MC/images/spacer_clear.gif" WIDTH="1" HEIGHT="1" BORDER=0 ALT=""></td></tr>
					<!-- This table formats the dynamic content into two rows -->

							<TR>
								<TD WIDTH="170" class="tdqna" align="right"><span CLASS="main">Merchant:</span></TD>
								<TD WIDTH="170" class="tdqna"><span CLASS="main">PayU</span></TD>
							</TR>
							<TR>
								<TD WIDTH="170" class="tdqna" align="right"><span  CLASS="main">Amount:</span></TD>
								<TD WIDTH="170" class="tdqna"><span CLASS="main"><B>INR&nbsp;10.08</B></span></TD>
							</TR>
							<TR>
								<TD WIDTH="170" class="tdqna" align="right"><span  CLASS="main">Date:</span></TD>
								<TD WIDTH="170" class="tdqna"><span CLASS="main">15:06:15</span></TD>
							</TR>
							<TR>
								<TD WIDTH="170" class="tdqna" align="right"><span  CLASS="main">Card Number:</span></TD>
								<TD WIDTH="170" class="tdqna"><span CLASS="main">XXXX XXXX XXXX 7691</span></TD>
							</TR>
							<TR>
								<TD WIDTH="170" class="tdqna" align="right"><span  CLASS="main">Personal Greeting:</span></TD>
								<TD WIDTH="170" class="tdqna"><span CLASS="main">Welcome</span></TD>
							</TR>

							


							<!--<FORM METHOD="post"  ACTION="#">-->
							<TR>
								<TD WIDTH="170" class="tdqna" align="right"><span  CLASS="main">SecureCode&trade;</span></TD>
								<TD WIDTH="170" class="tdqna"><INPUT TITLE="Password" TYPE="password" NAME="pin" SIZE="14" MAXLENGTH="32" CLASS="monospace"><BR></TD>
							</TR>
							
							<TR>
								<TD WIDTH="340" ALIGN="right" VALIGN="top" >
								<IMG SRC="en_US_YESBANK_MC/images/spacer_clear.gif" WIDTH="1" HEIGHT="1" BORDER=0 ALT="">
								</TD>
								<TD class="tdqna"><SPAN CLASS="main">
								<SCRIPT LANGUAGE=javascript>
									document.writeln ("<A TITLE=\"Forgot Password\" class=\"bodylink1\" HREF=\"javascript: forgotPasswordLink(this)\" onClick=\"closing=false\">");
								</SCRIPT>
								<NOSCRIPT>
									<A  class="bodylink1" TITLE="Forgot Password" HREF="en_US_YESBANK_MC/pwdhint.htm" target=_blank onClick="closing=false">
								</NOSCRIPT>
								Forgot your SecureCode&trade;?</A><BR></TD>

							</TR>
							<TR>
								<TD>&nbsp;</TD>
								<TD>
									<IMG SRC="en_US_YESBANK_MC/images/spacer_clear.gif" WIDTH="1" HEIGHT="1" ALT=""><!-- This gif pushes the submit button down 10 pixels. It's shorter on this screen than the others to prevent scrolling.-->

									<!-- Start of internal table that lines everything up nicely -->
									<TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
									<TR>
										<TD><INPUT TITLE="Submit" TYPE="submit" VALUE="Submit" onClick="closing=false"></TD>
										<TD><IMG SRC="en_US_YESBANK_MC/images/spacer_clear.gif" WIDTH="15" HEIGHT="1" ALT=""></TD><!-- Spacer gif between elements. -->
										<TD><SCRIPT LANGUAGE=javascript>document.writeln ('<A TITLE="Help" class="bodylink1" HREF="javascript: HelpWindow()" onClick="closing=false">');</SCRIPT>
										<NOSCRIPT><A TITLE="Help" HREF="en_US_YESBANK_MC/help.htm" target=_blank onClick="closing=false"></NOSCRIPT>
											<IMG SRC="en_US_YESBANK_MC/images/question_mark_sm.gif" BORDER=0 ALT="Help" HSPACE="4" VSPACE="7" ALIGN="top" ALT=""></A>
										</TD>
										<TD class="main"><SCRIPT LANGUAGE=javascript>document.writeln ('<A TITLE="Help" class="bodylink1" HREF="javascript: HelpWindow()" onClick="closing=false">');</SCRIPT>
										<NOSCRIPT><A TITLE="Help" HREF="en_US_YESBANK_MC/help.htm" class="bodylink1" target=_blank onClick="closing=false"></NOSCRIPT>
											Help</A>
										</TD>
										<TD><IMG SRC="en_US_YESBANK_MC/images/spacer_clear.gif" WIDTH="15" HEIGHT="1" ALT=""><BR></TD>
										<TD class="main"><A TITLE="Cancel" class="bodylink1" HREF="JavaScript: closeButton(this)" onClick="closing=false">Cancel</A></TD>
									</TR>
									<NOSCRIPT>
									<TR>
										<TD COLSPAN=6><SPAN CLASS="TextBlue">
														JavaScript is disabled in your browser.
														Some of the buttons will not work.
														Also, only SecureCode will work.
														No other authentication scheme (that
														requires javascript) will work.
										</TD>
									</TR>
									</NOSCRIPT>
									</TABLE>
									<!-- End of internal table that lines everything up nicely -->
								</TD>
							</TR>
							<tr><td colspan="2" align="center" class="copyright">This information is not shared with the Merchant</td></tr>
						    <!--</FORM>-->
						</TABLE>
						<!-- End of the table that formats the dynamic content into two rows -->
					</TD>
				</TR>
		</TABLE>

<input type="hidden" name="submitted" value="0">
<SCRIPT>
document.writeln ('<input type="hidden" name="authType" value="Visa Password">');
</SCRIPT>
<NOSCRIPT>
<input type="hidden" name="authType" value="Visa Password">
</NOSCRIPT>
<input type="hidden" name="cancelHit" value="0">
<input type="hidden" name="forgotPassword" value="0">
<input type="hidden" name="cardHolder" value="">
<input type="hidden" name="Userid" value="">
<input type="hidden" name="authDefaultSelect" value="Visa Password">
<input type="hidden" name="AuthFallBack" value="">
<input type="hidden" name="Phase" value="passwd">
<input type="hidden" name="tryIndex" value="1">
<input type="hidden" name="PaReq" value="eJxVUstugzAQ/BXEtSq2eZVEiyMa0pYDlLwuvVTEWAlSgIRHQvr1tUNIWp92xqtZz6xh0uV75cSrOisLVyUaVhVesDLNiq2rrldvz446obDaVZz7S87ailMIeV0nW65kqat+Y+IYLyY2iIVtYhFHH2FHpRB7C36kcFOmQljTAQ1QSFRslxQNhYQdX4OIWsQwHQPQDULOq8Cn+H5My7ZtQD0NRZJzGieXNaBrCaxsi6a6UMMSTQOAttrT8/msZZtsU2qszAFJCtBjfNzKqhYSXZbS0J+Z4Q/DoR920crTw9W6+/QDK/S3LiDZAWnScKrj3q5CnLE+GhNh7cpDksvZNIgWikKwhh3hqKfgICd5PSBY3vxlQERbieQHCwMC3h3KgosOMeNeQ8prhoSRx/OnHzJL1oh4Ztvgaxob0XLzdEyQh5bG/Hyas/fpfObKhK9NUjgTIREbm1dlCQBJGXRbHrotWlT/PsAv32W1KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==">
<input type="hidden" name="TermUrl" value="https://mpi.onlinesbi.com/electraSECURE/vbv/MPIACSResponse.jsp" >
<input type="hidden" name="MD" value="MDE4Mzc0MDMxNTA2MTUxODI5MDg=">
<input type="hidden" name="ARCOTC" value="">
<input type="hidden" name="ARCOTR" value="">
<input type="hidden" name="Locale" value="en_US_YESBANK_MC/">
<input type="hidden" name="RFInreaseAuthAction" value="0">
<input type="hidden" name="RFIsEMailPresentForIncreaseAuth" value="">
<input type="hidden" name="CookieType" value="0">
<!--The fields below were added for Chip Card Authentication-->
<input type="hidden" name="VSDCInput" value="1008$356$356$20150615$000$MDE4Mzc0MDMxNTA2MTUxODI5MDg=">
<input type="hidden" name="VSDCData" value="">
<input type="hidden" name="ChipPluginName" value="" >
<input type="hidden" name="ChipPluginVersion" value="" >
<input type="hidden" name="ChipPluginPresent" value="TRUE">
<input type="hidden" name="eAccessPresent" value="FALSE">
<input type="hidden" name="eAccessRequired" value="FALSE">
<input type="hidden" name="ChipSecret" value="">
<input type="hidden" name="AcsCookie" value="fzSyHr6KYa5COuXMbV5bvJxpZvD/hjM+4ypVxfXeaERPgDRECDePfHDqI1ieT6zfGZUnGoeXS0fmNgTVkJpbJYuAbesfwrXX/hNtngvdYB9w6OKpjoCMbcZ7VfzJOqA9ghkC81pxSfDQau1Fy8IyFB3stQgRHZCJfX/Rf1awovxSoK5OlyqVk2DwR8AX64HLoVCylXHNoGK+rCsS8/rz6UhrN70SPbv0xfzTFPBzGLMRiqBnOeiPuf6iI7ctUjOOHB10P94mQWCbVXXgxBPLZGFc+8YvJ9bYl/8ghewq/Lj0Cit9s7Mq4vZSEW9NcpP0">
<input type="hidden" name="DeviceID" value="">
</FORM>
<!-- End of centering table -->



</BODY>

</HTML>
