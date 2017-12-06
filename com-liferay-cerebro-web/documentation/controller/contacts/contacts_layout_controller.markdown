# ContactsLayoutController
* **URL Prefix** `/contacts_layout`
----

## Get
<details>

* **URL** `/`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `contactsEntityId=[String]`

			The ID of the ContactsEntry or ContactsGroup to view.
			The ID of the entity. It may be either a ContactsGroupId or ContactsEntryId but must always match the 'type' parameter.

		* `contactsLayoutTemplateId=[long]`

			The ID of the layout template used to render the specified entity.

		* `type=[int]`

			See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsLayoutDisplay](../../model/display/contacts/contacts_layout_display.markdown)
		```
		{
			"contactsCardData": {},
			"contactsEntity": {
				"id": "AV-S3myvH7X3n3NrSWip",
				"name": "alfred sørensen",
				"type": 1,
				"properties": {
					"firstName": "alfred",
					"lastName": "sørensen",
					"emailAddress": "alfred.sørensen@example.com",
					"portraitURL": "https://randomuser.me/api/portraits/men/22.jpg",
					"companyName": "Ratke Inc",
					"jobTitle": "doctor"
				}
			},
			"contactsLayoutTemplate": {
				"id": 31706,
				"contactsCardTemplatesList": [],
				"headerContactsCardTemplates": [
					{
						"id": 31705,
						"name": "profile",
						"size": 1,
						"supportedSizes": [
							1
						],
						"layoutType": 0,
						"type": 1
					}
				],
				"name": "default",
				"type": 1
			}
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_layout',
		qs: {
			contactsEntityId: 'AV8q3Ekh4hyzox8KNPLc',
			contactsLayoutTemplateId: '31706',
			type: '1'
		}
	}

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>