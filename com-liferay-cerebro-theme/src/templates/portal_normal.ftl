<!DOCTYPE html>

<#include init />

<html dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${the_title} - ${company_name}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
</head>

<body class="dxp">
	<div class="senna-loading-bar"></div>

	<@liferay_util["include"] page=body_top_include />

	<#if is_signed_in>
		<@liferay_portlet["runtime"] portletName="cerebro_analytics_portlet" />
	<#else>
		<@liferay_portlet["runtime"] portletName="com_liferay_login_web_portlet_LoginPortlet" />
	</#if>

	<@liferay_util["include"] page=body_bottom_include />

	<@liferay_util["include"] page=bottom_include />
</body>
</html>