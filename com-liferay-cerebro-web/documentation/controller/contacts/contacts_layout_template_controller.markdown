# ContactsLayoutTemplateController
* **URL Prefix** `/contacts_layout_template`
----

## Create
<details>

* **URL** `/`

* **Method:** `PUT`

* **URL Params**

	None

* **Data Params**

	* Required:
		* `settings=[List<List<ContactsLayoutTemplateSettingDisplay>>]`

			See [ContactsLayoutTemplateSettingDisplay](../../model/display/contacts/contacts_layout_template_setting_display.markdown).

		* `name=[String]`

			The name of the layout template.

		* `type=[int]`

			See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsLayoutTemplateDisplay](../../model/display/contacts/contacts_layout_template_display.markdown)
		```
		{
			"name": "marketing",
			"type": 0,
			"contactsCardTemplatesList": [
				[
					{
						"type": 0,
						"showTitle": false,
						"name": "info",
						"size": 1,
						"supportedSizes": [
							1,
							2
						],
						"contactsMappingTemplates": [
							{
								"prefix": "",
								"suffix": "years old",
								"contactsMappingName": "age",
								"contactsMappingId": 31619,
								"id": 40817
							}
						],
						"id": 40818
					}
				],
				[
					{
						"type": 1,
						"layoutType": 0,
						"name": "profile",
						"size": 1,
						"supportedSizes": [
							1
						],
						"contactsMappingTemplates": [],
						"id": 31705
					}
				]
			],
			"headerContactsCardTemplates": [
				{
					"type": 1,
					"layoutType": 0,
					"name": "profile",
					"size": 1,
					"id": 42309
				}
			],
			"contactsMappingNames": [
				"age",
				"companyName",
				"firstName",
				"jobTitle",
				"lastName",
				"portraitURL"
			],
			"id": 42310
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/contacts_layout_template',
		formData: {
			settings: '[[{"contactsCardTemplateId":40818, "size":1}],[{"contactsCardTemplateId":31705, "size":1}]]',
			name: 'marketing',
			type: '0'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Delete
<details>

* **URL** `/{id}`

* **Method:** `DELETE`

* **URL Params**

	* Required:
		* `id=[long]`

			The ID of the layout template.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsLayoutTemplateDisplay](../../model/display/contacts/contacts_layout_template_display.markdown)
		```
		{
			"name": "marketing",
			"type": 0,
			"contactsCardTemplatesList": [
				[
					{
						"type": 0,
						"showTitle": false,
						"name": "info",
						"size": 1,
						"supportedSizes": [
							1,
							2
						],
						"contactsMappingTemplates": [
							{
								"prefix": "",
								"suffix": "years old",
								"contactsMappingName": "age",
								"contactsMappingId": 31619,
								"id": 40817
							}
						],
						"id": 40818
					}
				],
				[
					{
						"type": 1,
						"layoutType": 0,
						"name": "profile",
						"size": 1,
						"supportedSizes": [
							1
						],
						"contactsMappingTemplates": [],
						"id": 31705
					}
				]
			],
			"headerContactsCardTemplates": [
				{
					"type": 1,
					"layoutType": 0,
					"name": "profile",
					"size": 1,
					"id": 42309
				}
			],
			"contactsMappingNames": [
				"age",
				"companyName",
				"firstName",
				"jobTitle",
				"lastName",
				"portraitURL"
			],
			"id": 42310
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'DELETE',
		url: 'http://localhost:8080/o/faro/contacts/contacts_layout_template/42310'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get
<details>

* **URL** `/{id}`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `id=[long]`

			The ID of the layout template.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsLayoutTemplateDisplay](../../model/display/contacts/contacts_layout_template_display.markdown)
		```
		{
			"name": "marketing",
			"type": 0,
			"contactsCardTemplatesList": [
				[
					{
						"type": 0,
						"showTitle": false,
						"name": "info",
						"size": 1,
						"supportedSizes": [
							1,
							2
						],
						"contactsMappingTemplates": [
							{
								"prefix": "",
								"suffix": "years old",
								"contactsMappingName": "age",
								"contactsMappingId": 31619,
								"id": 40817
							}
						],
						"id": 40818
					}
				],
				[
					{
						"type": 1,
						"layoutType": 0,
						"name": "profile",
						"size": 1,
						"supportedSizes": [
							1
						],
						"contactsMappingTemplates": [],
						"id": 31705
					}
				]
			],
			"headerContactsCardTemplates": [
				{
					"type": 1,
					"layoutType": 0,
					"name": "profile",
					"size": 1,
					"id": 42311
				}
			],
			"contactsMappingNames": [
				"age",
				"companyName",
				"firstName",
				"jobTitle",
				"lastName",
				"portraitURL"
			],
			"id": 42312
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_layout_template/42312'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get List
<details>

* **URL** `/`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `type=[int]`

			See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** `List<>`[ContactsLayoutTemplateDisplay](../../model/display/contacts/contacts_layout_template_display.markdown)
		```
		[
			{
				"name": "default",
				"type": 0,
				"contactsCardTemplatesList": [],
				"headerContactsCardTemplates": [
					{
						"type": 1,
						"layoutType": 0,
						"name": "profile",
						"size": 1,
						"supportedSizes": [
							1
						],
						"id": 31710
					}
				],
				"contactsMappingNames": [],
				"id": 31711
			},
			{
				"name": "marketing",
				"type": 0,
				"contactsCardTemplatesList": [
					[
						{
							"type": 0,
							"showTitle": false,
							"name": "info",
							"size": 1,
							"supportedSizes": [
								1,
								2
							],
							"contactsMappingTemplates": [
								{
									"prefix": "",
									"suffix": "years old",
									"contactsMappingName": "age",
									"contactsMappingId": 31619,
									"id": 40817
								}
							],
							"id": 40818
						}
					],
					[
						{
							"type": 1,
							"layoutType": 0,
							"name": "profile",
							"size": 1,
							"supportedSizes": [
								1
							],
							"id": 31705
						}
					]
				],
				"headerContactsCardTemplates": [
					{
						"type": 1,
						"layoutType": 0,
						"name": "profile",
						"size": 1,
						"supportedSizes": [
							1
						],
						"id": 42311
					}
				],
				"contactsMappingNames": [
					"age",
					"companyName",
					"firstName",
					"jobTitle",
					"lastName",
					"portraitURL"
				],
				"id": 42312
			}
		]
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_card_template',
		qs: {
			type: '0'
		}
	}

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Update
<details>

* **URL** `/{id}`

* **Method:** `POST`

* **URL Params**

	* Required:
		* `id=[String]`

			The ID of the layout template.

* **Data Params**

	* Required:
		* `settings=[List<List<ContactsLayoutTemplateSettingDisplay>>]`

			See [ContactsLayoutTemplateSettingDisplay](../../model/display/contacts/contacts_layout_template_setting_display.markdown)

		* `name=[String]`

			The name of the layout template.

		* `type=[int]`

			See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsLayoutTemplateDisplay](../../model/display/contacts/contacts_layout_template_display.markdown)
	```
	{
		"name": "marketing",
		"type": 0,
		"contactsCardTemplatesList": [
			[
				{
					"type": 0,
					"showTitle": false,
					"name": "info",
					"size": 1,
					"supportedSizes": [
						1,
						2
					],
					"contactsMappingTemplates": [
						{
							"prefix": "",
							"suffix": "years old",
							"contactsMappingName": "age",
							"contactsMappingId": 31619,
							"id": 40817
						}
					],
					"id": 40818
				}
			],
			[
				{
					"type": 1,
					"layoutType": 0,
					"name": "profile",
					"size": 1,
					"supportedSizes": [
						1
					],
					"id": 31705
				}
			]
		],
		"headerContactsCardTemplates": [
			{
				"type": 1,
				"layoutType": 0,
				"name": "profile",
				"size": 1,
				"supportedSizes": [
					1
				],
				"id": 42309
			}
		],
		"contactsMappingNames": [
			"age",
			"companyName",
			"firstName",
			"jobTitle",
			"lastName",
			"portraitURL"
		],
		"id": 42310
	}
	```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'POST',
		url: 'http://localhost:8080/o/faro/contacts/contacts_layout_template/42310',
		formData: {
			settings: '[[{"contactsCardTemplateId":40818, "size":1}],[{"contactsCardTemplateId":31705, "size":1}]]',
			name: 'marketing',
			type: '0'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>