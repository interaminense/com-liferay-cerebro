# ContactsCardDisplay

* `childContactsCriterionDisplays=[List<ContactsCriterionDisplay>]`

	Child criterion which can be nested indefinitely. Mutually exclusive with values field.

* `contactsMappingDisplay=[ContactsMappingDisplay]`

	See [ContactsMappingDisplay](contacts_mapping_display.markdown).

* `id=[long]`

	The ID of the criterion.

* `name=[String]`

	The name of the criterion.

* `operatorId=[int]`

	See [ContactsCriterionConstants](../../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/ContactsCriterionConstants.java)

* `values=[List<Object>]`

	The values being compared by the specified operator. Values are only specified on leaf nodes of criterion. Mutually exclusive with childContactsCriterionDisplays field.