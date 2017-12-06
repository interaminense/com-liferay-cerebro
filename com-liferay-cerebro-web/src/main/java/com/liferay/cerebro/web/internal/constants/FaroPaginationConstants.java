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

package com.liferay.cerebro.web.internal.constants;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Shinn Lok
 */
public class FaroPaginationConstants {

	public static final int CUR_DEFAULT = 1;

	public static final int DELTA_DEFAULT = 20;

	public static final Integer[] DELTA_VALUES_DEFAULT =
		{5, 10, 20, 30, 50, 75};

	public static final String ORDER_BY_TYPE_ASC = "asc";

	public static final String ORDER_BY_TYPE_DEFAULT = ORDER_BY_TYPE_ASC;

	public static final String ORDER_BY_TYPE_DESC = "desc";

	public static Map<String, Object> getConstants() {
		return _constants;
	}

	private static final Map<String, Object> _constants = new HashMap<>();

	static {
		_constants.put("cur", CUR_DEFAULT);
		_constants.put("delta", DELTA_DEFAULT);
		_constants.put("deltaValues", DELTA_VALUES_DEFAULT);
		_constants.put("orderAscending", ORDER_BY_TYPE_ASC);
		_constants.put("orderDefault", ORDER_BY_TYPE_DEFAULT);
		_constants.put("orderDescending", ORDER_BY_TYPE_DESC);
	}

}