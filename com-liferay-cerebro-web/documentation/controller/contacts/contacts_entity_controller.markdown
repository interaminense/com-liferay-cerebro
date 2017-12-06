# ContactsEntryController
* **URL Prefix** `/contacts_entity`
----

## Search
<details>

* **URL** `/search`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `faroSearchContexts=[List<FaroSearchContext>]`

			See [FaroSearchContext](../../model/search/faro_search_context.markdown).

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** List<[FaroResultsDisplay](../../model/display/faro_results_display.markdown)>
		```
		[
			{
				"items": [
					{
						"id": "AV-S3qf5H7X3n3NrSWr1",
						"name": "zoe hayes",
						"type": 1,
						"properties": {
							"firstName": "zoe",
							"lastName": "hayes",
							"emailAddress": "zoe.hayes@example.com",
							"portraitURL": "https://randomuser.me/api/portraits/women/45.jpg",
							"companyName": "King, King and King",
							"jobTitle": "accountant"
						}
					},
					{
						"id": "AV-S3sBcH7X3n3NrSWvh",
						"name": "zoe morales",
						"type": 1,
						"properties": {
							"firstName": "zoe",
							"lastName": "morales",
							"emailAddress": "zoe.morales@example.com",
							"portraitURL": "https://randomuser.me/api/portraits/women/8.jpg",
							"companyName": "Doyle, Doyle and Doyle",
							"jobTitle": "firefighter"
						}
					}
				],
				"total": 1003
			}
		]
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_entity/search',
		qs: {
			faroSearchContexts: '[{"type":"1", "cur": 1, "delta":2, "query": "", "orderByFields":{"firstName":"desc"}}]'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>