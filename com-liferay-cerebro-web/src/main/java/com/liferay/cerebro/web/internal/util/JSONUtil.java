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

package com.liferay.cerebro.web.internal.util;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.cfg.MapperConfig;
import com.fasterxml.jackson.databind.introspect.AnnotatedField;
import com.liferay.portal.kernel.util.StringPool;

import java.lang.reflect.Type;

/**
 * @author Matthew Kong
 */
public class JSONUtil {

	public static ObjectMapper getObjectMapper() {
		return _objectMapper;
	}

	public static <T> T readContainedTypeValue(String content, Type type)
		throws Exception {

		JavaType javaType = _objectMapper.constructType(type);

		javaType = javaType.containedType(0);

		return _objectMapper.readValue(content, javaType);
	}

	public static <T> T readValue(String content, Class<T> valueType)
		throws Exception {

		return (T)_objectMapper.readValue(content, valueType);
	}

	public static <T> T readValue(String content, TypeReference typeReference)
		throws Exception {

		return _objectMapper.readValue(content, typeReference);
	}

	public static String writeValueAsString(Object value) throws Exception {
		return _objectMapper.writeValueAsString(value);
	}

	private static final ObjectMapper _objectMapper = new ObjectMapper();

	static {
		_objectMapper.configure(
			DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

		PropertyNamingStrategy propertyNamingStrategy =
			new PropertyNamingStrategy() {

				@Override
				public String nameForField(
					MapperConfig<?> config, AnnotatedField field,
					String defaultName) {

					if (defaultName.startsWith(StringPool.UNDERLINE)) {
						defaultName = defaultName.substring(1);
					}

					defaultName = defaultName.replace(
						"Display", StringPool.BLANK);

					return super.nameForField(config, field, defaultName);
				}

			};

		_objectMapper.setPropertyNamingStrategy(propertyNamingStrategy);

		_objectMapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
	}

}