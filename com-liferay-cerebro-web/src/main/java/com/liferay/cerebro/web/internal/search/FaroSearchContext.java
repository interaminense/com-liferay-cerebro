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

package com.liferay.cerebro.web.internal.search;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Matthew Kong
 */
public class FaroSearchContext {

	public FaroSearchContext() {
	}

	public int getCur() {
		return _cur;
	}

	public int getDelta() {
		return _delta;
	}

	public Map<String, String> getOrderByFields() {
		return _orderByFields;
	}

	public String getQuery() {
		return _query;
	}

	public int getType() {
		return _type;
	}

	private int _cur;
	private int _delta;
	private Map<String, String> _orderByFields = new HashMap<>();
	private String _query;
	private int _type;

}