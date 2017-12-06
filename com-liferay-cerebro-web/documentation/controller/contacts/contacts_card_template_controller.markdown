# ContactsCardTemplateController
* **URL Prefix** `/contacts_card_template`
----

## Create
<details>

* **URL** `/`

* **Method:** `PUT`

* **URL Params**

	None

* **Data Params**

	* Required:
		* `name=[String]`

			The name of the card template.

		* `type=[int]`

			See [ContactsCardTemplateConstants](../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/ContactsCardTemplateConstants.java).

	* Optional:
		* `settings=[Map<String, Object>]`

			Valid settings are different depending on the type of card template.

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCardTemplateDisplay](../../model/display/contacts/contacts_card_template_display.markdown)
		```
		{
			"type": 0,
			"showTitle": true,
			"supportedSizes": [
				1,
				2
			],
			"contactsMappingTemplates": [
				{
					"prefix": "",
					"suffix": "years old",
					"contactsMappingId": "31619",
					"contactsMappingName": "age"
				}
			],
			"name": "info",
			"size": 1,
			"id": 48412
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/contacts_card_template',
		formData: {
			name: 'info',
			type: '0',
			settings: '{"showTitle":true, "contactsMappingTemplates":[{"prefix":"", "suffix":"years old", "contactsMappingId":31619}]}',
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

			The ID of the ContactsCardTemplate to be deleted.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCardTemplateDisplay](../../model/display/contacts/contacts_card_template_display.markdown)
		```
		{
			"type": 0,
			"showTitle": true,
			"supportedSizes": [
				1,
				2
			],
			"contactsMappingTemplates": [
				{
					"prefix": "",
					"suffix": "years old",
					"contactsMappingId": "31619",
					"contactsMappingName": "age"
				}
			],
			"name": "info",
			"size": 1,
			"id": 48412
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'DELETE',
		url: 'http://localhost:8080/o/faro/contacts/contacts_card_template/40818'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get Types
<details>

* **URL** `/types`

* **Method:** `GET`

* **URL Params**

	None

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** `List<ContactsCardTemplateType>`
		```
		[
			{
				"name": "info",
				"type": 0,
				"defaultSettings": {
					"contactsMappingTemplates": "",
					"showTitle": true
				}
			},
			{
				"name": "segmentMembership",
				"type": 2,
				"defaultSettings": {
					"showTitle": true,
					"order": 0
				}
			}
		]
		```
* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_card_template/types'
	};

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
		* `id=[long]`

			The ID of the card template.

* **Data Params**

	* Required:
		* `name=[String]`

			The name of the card template.

		* `type=[int]`

			See [ContactsCardTemplateConstants](../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/ContactsCardTemplateConstants.java).

	* Optional:
		* `settings=[Map<String, Object>]`

			Valid settings are different depending on the type of card template.

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCardTemplateDisplay](../../model/display/contacts/contacts_card_template_display.markdown)
		```
		{
			"type": 3,
			"startDateTime": 1509065537713,
			"endDateTime": 1509670337713,
			"name": "membership count",
			"size": 1,
			"supportedSizes": [
				1
			],
			"id": 40816
		}
		```
* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'POST',
		url: 'http://localhost:8080/o/faro/contacts/contacts_card_template/40816',
		formData: {
			name: 'membership count',
			settings: '{"startDateTime":0,"endDateTime":0}',
			type: '3'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>