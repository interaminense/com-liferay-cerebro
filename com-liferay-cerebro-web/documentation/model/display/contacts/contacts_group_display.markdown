# ContactsGroupDisplay

* `contactsCriterionId=[long]`

	The ID of the ContactsCriterion that specifies which entities are in this group.

* `createTime=[long]`

	The time when this group was created.

* `dynamic=[boolean]`

	Dynamic groups essentially saves the criterion being used to create it whereas static groups saves the individual users to the group.

* `id=[String]`

	The ID of the group.

* `name=[String]`

	The name of the group.

* `properties=[Map<String, Object]`

	A map containing properties of the group such as name, address, etc.

* `status=[String]`

	See [ContactsGroupConstants](../../../../../osb-faro-engine-client/src/main/java/com/liferay/osb/faro/engine/client/constants/ContactsGroupConstants.java).

* `type=[int]`

	See [FaroConstants](../../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).

* `userName=[String]`

	The name of the user that created the group.