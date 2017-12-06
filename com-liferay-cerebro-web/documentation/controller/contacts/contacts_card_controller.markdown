# ContactsCardController
* **URL Prefix** `/contacts_card`
----

## Preview
<details>

* **URL** `/preview`

* **Method:** `GET`

* **URL Params**
	* Required:
		* `contactsEntityId=[String]`

			The ID for either a ContactsGroup or ContactsEntry.

		* `contactsEntityType=[int]`

			See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

	* Optional:
		* `contactsCardTemplateName=[String]`

			The name of the card template.

		* `contactsCardTemplateSettings=[Map<String, Object>]`

			Valid settings are different depending on the type of card template. See [ContactsCardTemplateTypes](../../../src/main/java/com/liferay/osb/faro/web/internal/card/template/type/) setting fields.

		* `contactsCardTemplateType=[int]`

			See [ContactsCardTemplateConstants](../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/ContactsCardTemplateConstants.java).

		* `size=[int]`

			The size of the template in number of columns. Valid sizes are 0-4, however certain card template types have additional restrictions. Passing in 0 will automatically use the smallest size for the specified card type.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCardDisplay](../../model/display/contacts/contacts_card_display.markdown)
		```
		{
			"contactsCardTemplate": {
				"type": 0,
				"showTitle": false,
				"supportedSizes": [
					1,
					2
				],
				"contactsMappingTemplates": [
					{
						"prefix": "",
						"suffix": "years old",
						"contactsMappingId": 31619,
						"contactsMappingName": "age"
					}
				],
				"name": "info",
				"size": 1,
				"id": 0
			},
			"contactsEntity": {
				"name": "alberte madsen",
				"properties": {
					"firstName": "alberte",
					"lastName": "madsen",
					"emailAddress": "alberte.madsen@example.com",
					"portraitURL": "https://randomuser.me/api/portraits/women/59.jpg",
					"companyName": "Sauer-Sauer",
					"jobTitle": "doctor",
					"age": "23"
				},
				"id": "AV99qV_1H7X3n3NrSKQA",
				"type": 1
			},
			"contactsCardData": {}
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_card/preview',
		qs: {
			contactsEntityId: 'AV99qV_1H7X3n3NrSKQA',
			contactsEntityType: '1',
			contactsCardTemplateName: 'info',
			{"showTitle": true, "contactsMappingTemplates":[{"contactsMappingId": 31619, "prefix":"", "suffix":"years old"}]}
			contactsCardTemplateType: '0',
			size: '1'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get
<details>

* **URL** `/`

* **Method:** `GET`

* **URL Params**
	* Required:
		* `contactsEntityId=[String]`

			The ID for either a ContactsGroup or ContactsEntry.

		* `contactsEntityType=[int]`

			See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

		* `contactsCardTemplateId=[long]`

			The ID for the card template.

	* Optional:
		* `size=[int]`

			The size of the template in number of columns. Valid sizes are 0-4, however certain card template types have additional restrictions. Passing in 0 will automatically use the smallest size for the specified card type.

		* `contactsCardTemplateSettings=[Map<String, Object>]`

			Valid settings are different depending on the type of card template. These settings are used to override settings already saved.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCardDisplay](../../model/display/contacts/contacts_card_display.markdown)
		```
		{
			"contactsCardTemplate": {
				"type": 1,
				"layoutType": 0,
				"name": "profile",
				"size": 1,
				"supportedSizes": [
					1
				],
				"id": 31705
			},
			"contactsEntity": {
				"name": "alberte madsen",
				"properties": {
					"firstName": "alberte",
					"lastName": "madsen",
					"emailAddress": "alberte.madsen@example.com",
					"portraitURL": "https://randomuser.me/api/portraits/women/59.jpg",
					"companyName": "Sauer-Sauer",
					"jobTitle": "doctor"
				},
				"id": "AV99qV_1H7X3n3NrSKQA",
				"type": 1
			},
			"contactsCardData": {}
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts',
		qs: {
			contactsEntityId: 'AV99qV_1H7X3n3NrSKQA',
			contactsEntityType: '1',
			contactsCardTemplateId: '31705',
			contactsCardTemplateSettings: '{"showTitle": true}',
			size: '1'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>