# ContactsMappingController
* **URL Prefix** `/contacts_mapping`
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

			The name of the mapping.

		* `type=[int]`

			See [ContactsFieldConstants](../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/ContactsFieldConstants.java).

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsMappingDisplay](../../model/display/contacts/contacts_mapping_display.markdown)
		```
		{
			"name": "bestFriend",
			"id": 42410,
			"type": "string"
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/contacts_mapping',
		formData: {
			name: 'bestFriend',
			type: 'string'
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

* **URL** `/{id}`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `id=[long]`

			The ID of the mapping.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsMappingDisplay](../../model/display/contacts/contacts_mapping_display.markdown)
		```
		{
			"name": "favoritePokemon",
			"id": 31647,
			"type": "string"
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_mapping/31647'
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
		* `query=[String]`

			The search query.

		* `cur=[int]`

			The current page, where 1 is the first page.

		* `delta=[int]`

			The number of items to show per page.

		* `orderByType=[String]`

			Either "asc" or "desc".

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [FaroResultsDisplay](../../model/display/faro_results_display.markdown) with [ContactsMappingDisplay](../../model/display/contacts/contacts_mapping_display.markdown)
		```
		{
			"total": 4,
			"items": [
				{
					"name": "favoritePokemon",
					"id": 31647,
					"type": "string"
				},
				{
					"name": "favoriteGenre",
					"id": 31645,
					"type": "string"
				},
				{
					"name": "favoriteColor",
					"id": 31643,
					"type": "string"
				},
				{
					"name": "favoriteArtist",
					"id": 31641,
					"type": "string"
				}
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_mapping/search',
		qs: {
			query: 'favorite'
			cur: '1',
			delta: '5',
			orderByType: 'desc',
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Search Suggestions
<details>

* **URL** `/search_suggestions`

* **Method:** `GET`

* **URL Params**

	* Optional:
		* `query=[String]`

			The search query.

		* `cur=[int]`

			The current page, where 1 is the first page.

		* `delta=[int]`

			The number of items to show per page.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [FaroResultsDisplay](../../model/display/faro_results_display.markdown) with Map<String, List<String>>
		```
		{
			"total": 5,
			"items": [
				{
					"screenName": [
						"redgorilla714"
					]
				},
				{
					"companyName": [
						"Kemmer, Kemmer and Kemmer"
					]
				},
				{
					"firstName": [
						"isabella"
					]
				},
				{
					"lastName": [
						"meyer"
					]
				},
				{
					"familyName": []
				}
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_mapping/search_suggestions',
		qs: {
			query: 'name',
			cur: '1',
			delta: '5'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>