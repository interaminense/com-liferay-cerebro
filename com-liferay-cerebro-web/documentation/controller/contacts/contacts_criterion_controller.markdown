# ContactsCriterionController
* **URL Prefix** `/contacts_criterion`
----

## Get
<details>

* **URL** `/{id}`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `id=[long]`

			The ID of the criterion.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCriterionDisplay](../../model/display/contacts/contacts_criterion_display.markdown)
		```
		{
			"name": "",
			"id": 41810,
			"values": [],
			"operatorId": 12,
			"contactsMapping": null,
			"childContactsCriterion": [
				{
					"name": "",
					"id": 41809,
					"values": [
						"doctor"
					],
					"operatorId": 3,
					"contactsMapping": {
						"name": "jobTitle",
						"id": 31631,
						"type": "string"
					},
					"childContactsCriterion": []
				}
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_criterion/41810'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get by ContactsGroupId
<details>

* **URL** `/`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `contactsGroupId=[long]`

			The ID of the group.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsCriterionDisplay](../../model/display/contacts/contacts_criterion_display.markdown)
		```
		{
			"name": "",
			"id": 41810,
			"values": [],
			"operatorId": 12,
			"contactsMapping": null,
			"childContactsCriterion": [
				{
					"name": "",
					"id": 41809,
					"values": [
						"doctor"
					],
					"operatorId": 3,
					"contactsMapping": {
						"name": "jobTitle",
						"id": 31631,
						"type": "string"
					},
					"childContactsCriterion": []
				}
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_criterion',
		qs: { contactsGroupId: 'MOCK_CONTACTS_GROUP_ID_0' }
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>