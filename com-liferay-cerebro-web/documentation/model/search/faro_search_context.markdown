# FaroSearchContext

* `cur=[int]`

	The current page, where 1 is the first page.

* `delta=[int]`

	The number of items to show per page.

* `query=[String]`

	The Search query

* `orderByFields=[Map<String, String>]`

	Determines how to order the results. The first item in the map is the property name of ContactsEntry. The second item is either "asc" or "desc".

* `type=[int]`

	See [FaroConstants](../../../../osb-faro-web/src/main/java/com/liferay/osb/faro/web/internal/constants/FaroConstants.java).