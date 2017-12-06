# ContactsEntryController
* **URL Prefix** `/contacts_entry`
----

## Get
<details>

* **URL** `/{id}`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `id=[long]`

		The ID of the entry.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsEntryDisplay](../../model/display/contacts/contacts_entry_display.markdown)
		```
		{
			"name": "aaron blanchard",
			"properties": {
				"firstName": "aaron",
				"lastName": "blanchard",
				"emailAddress": "aaron.blanchard@example.com",
				"portraitURL": "https://randomuser.me/api/portraits/men/93.jpg",
				"companyName": "Lind-Lind",
				"jobTitle": "musician"
			},
			"id": "AV8q3Ekh4hyzox8KNPLc",
			"type": 1
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_entry/AV8q3Ekh4hyzox8KNPLc'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Search
<details>

* **URL** `/search`

* **Method:** `GET`

* **URL Params**

	* Optional:
		* `contactsCriterionId=[long]`

			The ID of the criterion. If this parameter is specified, the 'contactsCriterion' parameter will be ignored.

		* `contactsCriterion=[ContactsCriterionDisplay]`

			See [ContactsCriterionDisplay](../../model/display/contacts/contacts_criterion_display.markdown).

		* `contactsMappingId=[long]`

			Works alongside the 'fieldValue' parameter to specify which field to search.

		* `fieldValue=[String]`

			Works alongside the 'contactsMappingId' parameter to specify the value to search.

		* `query=[String]`

			Search query

		* `cur=[int]`

			The current page, where 1 is the first page.

		* `delta=[int]`

			The number of items to show per page.

		* `orderByFields=[Map<String, String>]`

			Determines how to order the results. The first item in the map is the property name of ContactsEntry. The second item is either "asc" or "desc".

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [FaroResultsDisplay](../../model/display/faro_results_display.markdown) with [ContactsEntryDisplay](../../model/display/contacts/contacts_entry_display.markdown)
		```
		{
			"total": 41,
			"items": [
				{
					"name": "alex jones",
					"properties": {
						"firstName": "alex",
						"lastName": "jones",
						"emailAddress": "alex.jones@example.com",
						"portraitURL": "https://randomuser.me/api/portraits/men/13.jpg",
						"companyName": "Steuber, Steuber and Steuber",
						"jobTitle": "doctor"
					},
					"id": "AV8q3FnC4hyzox8KNPMu",
					"type": 1
				},
				{
					"name": "amalie mortensen",
					"properties": {
						"firstName": "amalie",
						"lastName": "mortensen",
						"emailAddress": "amalie.mortensen@example.com",
						"portraitURL": "https://randomuser.me/api/portraits/women/38.jpg",
						"companyName": "Emmerich-Emmerich",
						"jobTitle": "doctor"
					},
					"id": "AV8q3WXe4hyzox8KNPgm",
					"type": 1
				}
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_entry/search',
		qs: {
			contactsCriterion: '{"name": "","id": 41810,"values": [],"operatorId": 12,"contactsMapping": null,"childContactsCriterion": [{"name": "","id": 41809,"values": ["doctor"],"operatorId": 3,"contactsMapping": {"name": "jobTitle","id": 31631,"type": "string"},"childContactsCriterion": []}]}',
			cur: '1',
			delta: '2',
			orderByFields: '{"firstName":"asc"}'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>