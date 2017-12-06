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

package com.liferay.cerebro.web.internal.clause.operator;

import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.util.StringPool;

import java.util.ArrayList;
import java.util.List;
import java.util.ResourceBundle;

/**
 * @author Matthew Kong
 */
public abstract class BaseClauseOperator implements ClauseOperator {

	@Override
	public ClauseOperator create(ResourceBundle resourceBundle) {
		for (String label : doGetLabels()) {
			_labels.add(LanguageUtil.format(resourceBundle, label, null));
		}

		_name = LanguageUtil.format(resourceBundle, doGetName(), null);

		return this;
	}

	@Override
	public int getId() {
		return 0;
	}

	@Override
	public List<String> getLabels() {
		return _labels;
	}

	@Override
	public String getName() {
		return _name;
	}

	@Override
	public String[] getSupportedTypes() {
		return doGetSupportedTypes();
	}

	protected String[] doGetLabels() {
		return new String[0];
	}

	protected String doGetName() {
		return StringPool.BLANK;
	}

	protected String[] doGetSupportedTypes() {
		return new String[0];
	}

	private final List<String> _labels = new ArrayList<>();
	private String _name;

}