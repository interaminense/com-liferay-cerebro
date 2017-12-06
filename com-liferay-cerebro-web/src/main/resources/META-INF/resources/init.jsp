<%--
/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
--%>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>


<%@page import="com.liferay.cerebro.web.internal.util.JSONUtil" %><%@
page import="com.liferay.portal.kernel.util.PortalUtil" %>

<%@ page import="java.util.HashMap" %><%@
page import="java.util.Map" %>

<liferay-theme:defineObjects />

<%
Map<String, Object> analyticsConstants = new HashMap<>();
%>

<aui:script position="inline">
	<!-- window.analyticsConstants = <%= JSONUtil.writeValueAsString(analyticsConstants) %>; -->

	window.analyticsConstants = {
		entityTypes: {
			account: 0,
			accountsSegment: 1,
			individual: 2
		},
		pagination: {
			deltaValues: [1, 2, 3, 4]
		},
		pathThemeImages: themeDisplay.getPathThemeImages()
	};
</aui:script>