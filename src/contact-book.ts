// Basically a binary search
export function findContact(contacts, name) {
  let leftIndex = 0;
  let rightIndex = contacts.length - 1;

  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    if (contacts[mid].name === name) {
      return contacts[mid].phone;
    } else if (contacts[mid].name < name) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }

  return null;
}