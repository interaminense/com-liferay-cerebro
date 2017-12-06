# ContactsCardTemplateDisplay

* `name=[String]`

	The name of the mapping card template.

* `size=[int]`

	The size of the template in number of columns. Valid sizes are 0-4, however certain card template types have additional restrictions. Passing in 0 will automatically use the smallest size for the specified card type.

* `supportedSizes[int[]]`

	The sizes supported by this card template.

* `type=[int]`

	See [ContactsCardTemplateConstants](../../../../../osb-faro-contacts-api/src/main/java/com/liferay/osb/faro/contacts/model/constants/ContactsCardTemplateConstants.java).

Other fields will also be included depending on the card template type.