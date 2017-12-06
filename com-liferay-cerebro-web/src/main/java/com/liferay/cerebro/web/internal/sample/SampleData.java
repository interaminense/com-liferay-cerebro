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

package com.liferay.cerebro.web.internal.sample;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

/**
 * @author Michael Hadley
 * @author Evan Thibodeau
 */
public class SampleData {

	public static String getCSVFileName() {
		return _CSV_FILE_NAME;
	}

	public static InputStream getCSVInputStream() {
		return new ByteArrayInputStream(_CSV_STRING.getBytes());
	}

	private static final String _CSV_FILE_NAME = "test.csv";

	private static final String _CSV_STRING =
		"firstName,lastName,emailAddress\nJoe,Bloggs,test@liferay.com";

}