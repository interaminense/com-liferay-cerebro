# DataSourceController
* **URL Prefix** `/data_source`
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

			The name of the data source.

		* `url=[String]`

			The URL of the data source.

		* `type=[int]`

			See [DataSourceConstants](../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/DataSourceConstants.java).

	* Optional:
		* `event=[Event]`

			See [Event](../../model/event.markdown).

* **Success Response:**

	* **Code:** 200
	* **Content:** [DataSourceDisplay](../../model/display/contacts/data_source_display.markdown)
		```
		{
			"name": "liferayDXP",
			"url": "http://www.liferay.com",
			"id": "AV9e16r1wzuHp_NgwOs5",
			"type": "Liferay DE",
			"event": null
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/data_source',
		formData: {
			name: 'liferayDXP',
			url: 'http://www.liferay.com',
			type: 'Liferay DE'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Create CSV
<details>

* **URL** `/csv`

* **Method:** `PUT`

* **URL Params**

	None

* **Data Params**

	* Required:
		* `name=[String]`

			The name of the data source.

		* `event=[Event]`

			See [Event](../../model/event.markdown).

		* `contactsMappingMaps=[List<Map<String, String>>]`

			A list of mappings from the CSV field to the ContactsMapping name.

		* `fileName[String]`

			The name of the uploaded CSV file.

		* `idPropertyName[String]`

			The CSV field that uniquely identifies each user.

		* `segmentName[String]`

			The name of the segment created from this data source. Required even if 'createStaticSegment' is false because an internal segment is always created.

		* `segmentDescription[String]`

			The description of the segment created from this data source.

		* `createStaticSegment[boolean]`

			If a static segment should be created from this data source.

* **Success Response:**

	* **Code:** 200
	* **Content:** [DataSourceDisplay](../../model/display/contacts/data_source_display.markdown)
		```
		{
			"name": "Cool People",
			"url": "",
			"id": "AV9fsLFZwzuHp_NgwOtI",
			"type": "CSV",
			"event": {
				"name": "DEVCON 2017 Attendees",
				"location": {
					"postalCode": "1012ZJ",
					"addressRegion": "Holland",
					"streetAddress": "Damrak 243",
					"addressLocality": "Amsterdam",
					"addressCountry": "Netherlands"
				},
				"description": null,
				"startDate": 1507075200000,
				"endDate": 1507248000000,
				"sameAs": "https://www.liferay.com/pt/web/events-devcon"
			}
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/data_source/csv',
		qs: {
			name: 'Cool People',
			event: '{"name" : "DEVCON 2017 Attendees", "description" : "", "startDate" : "2017-10-04", "endDate" : "2017-10-06", "sameAs" : "https://www.liferay.com/pt/web/events-devcon", "location" : {"addressCountry" : "Netherlands", "addressRegion" : "Holland", "addressLocality" : "Amsterdam", "streetAddress" : "Damrak 243", "postalCode" : "1012ZJ"}}',
			contactsMappingsMaps: '[{"contactsFieldName":"firstName", "name":"firstName"}, {"contactsFieldName":"lastName", "name":"lastName"}, {"contactsFieldName":"emailAddress", "name":"emailAddress"}]',
			fileName: 'coolpeople.csv',
			idPropertyName: 'emailAddress',
			segmentName: 'coolPeople',
			segmentDescription: 'matt',
			createStaticSegment: 'true '
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
		* `id=[String]`

			The ID of the data source.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 204
	* **Content:** None

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/data_source/AV9ftUWLwzuHp_NgwOtJ'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get CSV
<details>

* **URL** `/csv/{fileName}`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `fileName[String]`

			The name of the uploaded CSV file.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [CSVDisplay](../../model/display/contacts/csv_display.markdown)
		```
		{
			"sourceFields": {
				"firstName": [
					"Joe"
				],
				"lastName": [
					"Bloggs"
				],
				"emailAddress": [
					"test@liferay.com"
				]
			},
			"contactsMappingSuggestions": {
				"firstName": [
					{
						"name": "firstName",
						"values": [
							"isabella"
						]
					},
					{
						"name": "givenName",
						"values": []
					}
				],
				"lastName": [
					{
						"name": "lastName",
						"values": [
							"meyer"
						]
					},
					{
						"name": "familyName",
						"values": []
					}
				],
				"emailAddress": [
					{
						"name": "emailAddress",
						"values": [
							"isabella.meyer@example.com"
						]
					},
					{
						"name": "state",
						"values": [
							"county down"
						]
					},
					{
						"name": "city",
						"values": [
							"bangor"
						]
					},
					{
						"name": "zip",
						"values": [
							"GP4O 0WF"
						]
					},
					{
						"name": "street",
						"values": [
							"4363 victoria street"
						]
					}
				]
			}
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/data_source/csv/coolpeople.csv'
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Get CSV Source Fields
<details>

* **URL** `/csv/{fileName}/source_fields`

* **Method:** `GET`

* **URL Params**

	* Required:
		* `fileName[String]`

			The name of the uploaded CSV file.

		* `fieldName[String]`

			The name of the field from which to grab values.

		* `count[int]`

			The number of values to retrieve.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** `Map<String, List<String>>`
		```
		{
			"emailAddress": [
				"test@liferay.com",
				"matthew.kong@liferay.com",
				"shinn.lok@liferay.com"
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/data_source/csv/coolpeople.csv/source_fields',
		qs: {
			fieldName: 'emailAddress',
			count: '3'
		}
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
		* `id=[String]`

			The ID of the data source.

* **Data Params**

	* Required:
		* `name=[String]`

			The name of the data source.

		* `url=[String]`

			The URL of the data source.

		* `type=[int]`

			See [DataSourceConstants](../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/DataSourceConstants.java).

	* Optional:
		* `event=[Event]`

			See [Event](../../model/event.markdown).

* **Success Response:**

	* **Code:** 200
	* **Content:** [DataSourceDisplay](../../model/display/contacts/data_source_display.markdown)
		```
		{
			"name": "liferayDXP",
			"url": "http://www.liferay.com",
			"id": "AV9e16r1wzuHp_NgwOs5",
			"type": "Liferay DE",
			"event": null
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'POST',
		url: 'http://localhost:8080/o/faro/contacts/data_source/AV9e16r1wzuHp_NgwOs5',
		formData: {
			name: 'liferayDXP',
			url: 'http://www.liferay.com',
			type: 'Liferay DE'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Upload CSV
<details>

* **URL** `/csv/upload/{fileName}`

* **Method:** `PUT`

* **URL Params**

	* Required:
		* `fileName[String]`

			The name of the uploaded CSV file.

* **Data Params**

	* Required:
		* `file=[File]`

			The CSV file to save.

* **Success Response:**

	* **Code:** 200
	* **Content:** `String`
		```
		coolpeople.csv
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/data_source/csv/upload/coolpeople.csv'
		headers: {
			content-type': 'multipart/form-data'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>