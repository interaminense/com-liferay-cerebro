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

package com.liferay.cerebro.web.internal.clause;

import com.liferay.cerebro.web.internal.clause.operator.ClauseOperator;
import com.liferay.osgi.util.ServiceTrackerFactory;
import com.liferay.portal.kernel.util.ResourceBundleUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;

import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.util.tracker.ServiceTrackerCustomizer;

/**
 * @author Matthew Kong
 */
@Component(immediate = true, service = ClauseOperatorRegistry.class)
public class ClauseOperatorRegistry {

	public Map<Integer, ClauseOperator> getClauseOperators(Locale locale) {
		Map<Integer, ClauseOperator> clauseOperators =
			_localizedClauseOperators.get(locale.toString());

		if (clauseOperators != null) {
			return clauseOperators;
		}

		clauseOperators = new HashMap<>();

		ResourceBundle resourceBundle = ResourceBundleUtil.getBundle(
			"content.Language", locale, getClass());

		for (ClauseOperator clauseOperator : _clauseOperators.values()) {
			clauseOperators.put(
				clauseOperator.getId(), clauseOperator.create(resourceBundle));
		}

		_localizedClauseOperators.put(locale.toString(), clauseOperators);

		return clauseOperators;
	}

	public Map<String, List<Integer>> getSupportedClauseOperatorIds() {
		return _supportedClauseOperatorIds;
	}

	@Activate
	protected void activate(final BundleContext bundleContext) {
		ServiceTrackerFactory.open(
			bundleContext, ClauseOperator.class,
			new ServiceTrackerCustomizer
				<ClauseOperator, ClauseOperator>() {

				@Override
				public ClauseOperator addingService(
					ServiceReference<ClauseOperator> serviceReference) {

					ClauseOperator clauseOperator = bundleContext.getService(
						serviceReference);

					addClauseOperator(clauseOperator);

					return clauseOperator;
				}

				@Override
				public void modifiedService(
					ServiceReference<ClauseOperator> serviceReference,
					ClauseOperator clauseOperator) {

					removeClauseOperator(clauseOperator);

					addClauseOperator(clauseOperator);
				}

				@Override
				public void removedService(
					ServiceReference<ClauseOperator> serviceReference,
					ClauseOperator clauseOperator) {

					removeClauseOperator(clauseOperator);

					bundleContext.ungetService(serviceReference);
				}

			});
	}

	protected void addClauseOperator(ClauseOperator clauseOperator) {
		_clauseOperators.put(clauseOperator.getId(), clauseOperator);

		for (String type : clauseOperator.getSupportedTypes()) {
			List<Integer> clauseOperatorIds = _supportedClauseOperatorIds.get(
				type);

			if (clauseOperatorIds == null) {
				clauseOperatorIds = new ArrayList<>();
			}

			if (!clauseOperatorIds.contains(clauseOperator.getId())) {
				clauseOperatorIds.add(clauseOperator.getId());
			}

			_supportedClauseOperatorIds.put(type, clauseOperatorIds);
		}
	}

	protected void removeClauseOperator(ClauseOperator clauseOperator) {
		_clauseOperators.remove(clauseOperator.getId());

		for (Map.Entry<String, List<Integer>> entry :
				_supportedClauseOperatorIds.entrySet()) {

			List<Integer> clauseOperatorIds = entry.getValue();

			clauseOperatorIds.remove(Integer.valueOf(clauseOperator.getId()));
		}
	}

	private static final Map<Integer, ClauseOperator> _clauseOperators =
		new HashMap<>();
	private static final Map<String, Map<Integer, ClauseOperator>>
		_localizedClauseOperators = new HashMap<>();
	private static final Map<String, List<Integer>>
		_supportedClauseOperatorIds = new HashMap<>();

}