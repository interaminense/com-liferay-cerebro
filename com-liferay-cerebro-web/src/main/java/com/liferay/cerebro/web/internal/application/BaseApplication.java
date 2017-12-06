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

package com.liferay.cerebro.web.internal.application;

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
import com.liferay.cerebro.web.internal.param.converter.FaroParamConverterProvider;
import com.liferay.cerebro.web.internal.util.JSONUtil;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

/**
 * @author Matthew Kong
 */
public abstract class BaseApplication extends Application {

	@Override
	public Set<Class<?>> getClasses() {
		Set<Class<?>> classes = new HashSet<>();

		classes.add(FaroParamConverterProvider.class);

		return classes;
	}

	public abstract Set<Object> getControllers();

	@Override
	public Set<Object> getSingletons() {
		Set<Object> singletons = new HashSet<>();

		singletons.add(new JacksonJsonProvider(JSONUtil.getObjectMapper()));
		singletons.addAll(getControllers());

		return singletons;
	}

}