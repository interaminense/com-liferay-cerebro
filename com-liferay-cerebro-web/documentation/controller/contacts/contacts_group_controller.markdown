# ContactsGroupController
* **URL Prefix** `/contacts_group`
----

## Add Contacts Entities
<details>

* **URL** `/{id}/addContactsEntities`

* **Method:** `PUT`

* **URL Params**

	* Required:
		* `id=[String]`

			The ID of the group.

* **Data Params**

	* Required:
		* `contactsEntityIds=[List<String>]`

			The IDs of the entities to be added to the group. They may be either ContactsGroupIds or ContactsEntryIds but must always match the type group it is being added to.

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsGroupDisplay](../../model/display/contacts/contacts_group_display.markdown)
		```
		{
			"name": "Cool People",
			"properties": {},
			"id": "MOCK_CONTACTS_GROUP_ID_7",
			"type": 3,
			"count": 0,
			"status": "active",
			"userName": "",
			"dynamic": false,
			"createTime": 0,
			"contactsCriterionId": 42009
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/contacts_group/MOCK_CONTACTS_GROUP_ID_7/addContactsEntities',
		formData: {
			contactsEntityIds: '["AV8q3FnC4hyzox8KNPMu", "AV8q3WXe4hyzox8KNPgm"]'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>

## Create
<details>

* **URL** `/`

* **Method:** `PUT`

* **URL Params**

	None

* **Data Params**

	* Required:
		* `contactsCriterion=[ContactsCriterionDisplay]`

			See [ContactsCriterionDisplay](../../model/display/contacts/contacts_criterion_display.markdown).

		* `name=[String]`

			The name of the group.

		* `description=[String]`

			The description of the group.

		* `type=[int]`

			See [ContactsGroupConstants](../../../../osb-faro-engine-client/src/main/java/com/liferay/osb/faro/engine/client/constants/ContactsGroupConstants.java).

		* `dynamic=[boolean]`

			Dynamic groups essentially saves the criterion being used to create it whereas static groups saves the individual users to the group.

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsGroupDisplay](../../model/display/contacts/contacts_group_display.markdown)
		```
		{
			"name": "Doctors",
			"properties": {},
			"id": "MOCK_CONTACTS_GROUP_ID_5",
			"type": 2,
			"count": 41,
			"status": "active",
			"userName": "Test Test",
			"dynamic": true,
			"createTime": 0,
			"contactsCriterionId": 41810
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'PUT',
		url: 'http://localhost:8080/o/faro/contacts/contacts_group',
		formData: {
			contactsCriterion: '{"name": "","id": 41810,"values": [],"operatorId": 12,"contactsMapping": null,"childContactsCriterion": [{"name": "","id": 41809,"values": ["doctor"],"operatorId": 3,"contactsMapping": {"name": "jobTitle","id": 31631,"type": "string"},"childContactsCriterion": []}]}',
			name: 'Doctors',
			description: 'nerds',
			type: '2',
			dynamic: 'true'
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

			The ID of the card template.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsGroupDisplay](../../model/display/contacts/contacts_group_display.markdown)
		```
		{
			"name": "Doctors",
			"properties": {},
			"id": "MOCK_CONTACTS_GROUP_ID_5",
			"type": 2,
			"count": 41,
			"status": "active",
			"userName": "Test Test",
			"dynamic": true,
			"createTime": 0,
			"contactsCriterionId": 41810
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_group/MOCK_CONTACTS_GROUP_ID_5'
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

			The ID of the group.

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [ContactsGroupDisplay](../../model/display/contacts/contacts_group_display.markdown)
		```
		{
			"name": "Doctors",
			"properties": {},
			"id": "MOCK_CONTACTS_GROUP_ID_5",
			"type": 2,
			"count": 41,
			"status": "active",
			"userName": "Test Test",
			"dynamic": true,
			"createTime": 0,
			"contactsCriterionId": 41810
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_group/MOCK_CONTACTS_GROUP_ID_5'
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

		* `type=[int]`

			See [ContactsGroupConstants](../../../../osb-faro-engine-client/src/main/java/com/liferay/osb/faro/engine/client/constants/ContactsGroupConstants.java).

		* `cur=[int]`

			The current page, where 1 is the first page.

		* `delta=[int]`

			The number of items to show per page.

		* `orderByFields=[Map<String, String>]`

			Determines how to order the results. The first item in the map is the property name of ContactsGroup. The second item is either "asc" or "desc".

* **Data Params**

	None

* **Success Response:**

	* **Code:** 200
	* **Content:** [FaroResultsDisplay](../../model/display/faro_results_display.markdown) with [ContactsGroupDisplay](../../model/display/contacts/contacts_group_display.markdown)
		```
		{
			"total": 6,
			"items": [
				{
					"name": "a",
					"properties": {},
					"id": "MOCK_CONTACTS_GROUP_ID_1",
					"type": 3,
					"count": 0,
					"status": "active",
					"userName": "Test Test",
					"dynamic": false,
					"createTime": 0,
					"contactsCriterionId": 35929
				},
				{
					"name": "Engineers under 40",
					"properties": {},
					"id": "MOCK_CONTACTS_GROUP_ID_2",
					"type": 3,
					"count": 12,
					"status": "active",
					"userName": "Test Test",
					"dynamic": true,
					"createTime": 0,
					"contactsCriterionId": 31719
				}
			]
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'GET',
		url: 'http://localhost:8080/o/faro/contacts/contacts_group/search',
		qs: {
			type: '2',
			cur: '1',
			delta: '2',
			orderByFields: '{"name":"asc"}'
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

			The ID of the group.

* **Data Params**

	* Required:
		* `contactsCriterion=[ContactsCriterionDisplay]`

			See [ContactsCriterionDisplay](../../model/display/contacts/contacts_criterion_display.markdown).

		* `name=[String]`

			The name of the group

		* `description=[String]`

			The description of the group

		* `type=[int]`

			See [ContactsGroupConstants](../../../../osb-faro-engine-client/src/main/java/com/liferay/osb/faro/engine/client/constants/ContactsGroupConstants.java).

		* `dynamic=[boolean]`

			Dynamic groups essentially saves the criterion being used to create it whereas static groups saves the individual users to the group.

* **Success Response:**

	* **Code:** 200 <br />
	* **Content:** [ContactsGroupDisplay](../../model/display/contacts/contacts_group_display.markdown)
		```
		{
			"name": "Doctors",
			"properties": {},
			"id": "MOCK_CONTACTS_GROUP_ID_5",
			"type": 2,
			"count": 41,
			"status": "active",
			"userName": "Test Test",
			"dynamic": true,
			"createTime": 0,
			"contactsCriterionId": 41810
		}
		```

* **Sample Call:**

	```
	var request = require("request");

	var options = {
		method: 'POST',
		url: 'http://localhost:8080/o/faro/contacts/contacts_group/MOCK_CONTACTS_GROUP_ID_5',
		formData: {
			contactsCriterion: '{"name": "","id": 41810,"values": [],"operatorId": 12,"contactsMapping": null,"childContactsCriterion": [{"name": "","id": 41809,"values": ["doctor"],"operatorId": 3,"contactsMapping": {"name": "jobTitle","id": 31631,"type": "string"},"childContactsCriterion": []}]}',
			name: 'Doctors',
			description: 'nerds',
			type: '2',
			dynamic: 'true'
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
	```
</details>