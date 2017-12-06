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
public class FaroConstants {

	public static final String APPLICATION_ASSETS = "assets";

	public static final String APPLICATION_CONTACTS = "contacts";

	public static final String APPLICATION_TOUCHPOINTS = "touchpoints";

	public static final int TYPE_ACCOUNT = 0;

	public static final int TYPE_ASSET = 4;

	public static final int TYPE_INDIVIDUAL = 1;

	public static final int TYPE_LIST = 5;

	public static final int TYPE_SEGMENT_ACCOUNTS = 2;

	public static final int TYPE_SEGMENT_INDIVIDUALS = 3;

	public static int[] getContactsTypes() {
		return new int[] {
			TYPE_ACCOUNT, TYPE_INDIVIDUAL, TYPE_SEGMENT_ACCOUNTS,
			TYPE_SEGMENT_INDIVIDUALS
		};
	}

	public static Map<String, Integer> getTypes() {
		return _types;
	}

	private static final Map<String, Integer> _types = new HashMap<>();

	static {
		_types.put("account", TYPE_ACCOUNT);
		_types.put("accountsSegment", TYPE_SEGMENT_ACCOUNTS);
		_types.put("asset", TYPE_ASSET);
		_types.put("individual", TYPE_INDIVIDUAL);
		_types.put("individualsSegment", TYPE_SEGMENT_INDIVIDUALS);
		_types.put("list", TYPE_LIST);
	}

}