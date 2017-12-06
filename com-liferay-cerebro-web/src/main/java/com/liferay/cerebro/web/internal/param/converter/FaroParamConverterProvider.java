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

package com.liferay.cerebro.web.internal.param.converter;

import java.lang.annotation.Annotation;
import java.lang.reflect.Type;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.ProcessingException;
import javax.ws.rs.ext.ParamConverter;
import javax.ws.rs.ext.ParamConverterProvider;
import javax.ws.rs.ext.Provider;

import com.liferay.cerebro.web.internal.param.FaroParam;
import com.liferay.cerebro.web.internal.util.JSONUtil;

/**
 * @author Matthew Kong
 */
@Provider
public class FaroParamConverterProvider implements ParamConverterProvider {

	@Override
	public <T> ParamConverter<T> getConverter(
		final Class<T> rawType, final Type genericType,
		final Annotation[] annotations) {

		if (genericType.equals(String.class)) {
			return null;
		}

		ParamConverter<T> paramConverter = _paramConverters.get(
			genericType.getTypeName());

		if (paramConverter == null) {
			paramConverter = new ParamConverter<T>() {

				@Override
				public T fromString(final String value) {
					try {
						if (rawType.equals(FaroParam.class)) {
							return (T)new FaroParam(
								JSONUtil.readContainedTypeValue(
									value, genericType));
						}

						return JSONUtil.readValue(value, rawType);
					}
					catch (Exception e) {
						throw new ProcessingException(e);
					}
				}

				@Override
				public String toString(final T value) {
					try {
						return JSONUtil.writeValueAsString(value);
					}
					catch (Exception e) {
						throw new ProcessingException(e);
					}
				}

			};

			_paramConverters.put(genericType.getTypeName(), paramConverter);
		}

		return paramConverter;
	}

	private static final Map<String, ParamConverter> _paramConverters =
		new HashMap<>();

}