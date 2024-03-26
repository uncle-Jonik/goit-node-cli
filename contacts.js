import { promises as fs } from "fs";
import { nanoid } from "nanoid";
import path from "path";

//path to the variable
const contactsPath = path.resolve("db", "contacts.json");
// console.log(contactsPath);

export async function listContacts() {
  try {
    // ...твій код. Повертає масив контактів.

    const readResult = await fs.readFile(contactsPath);
    const contactsParse = JSON.parse(readResult);
    console.table(contactsParse);
  } catch (err) {
    console.log(err);
  }
}
// listContacts();

export async function getContactById(contactId) {
  try {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.

    const readResult = await fs.readFile(contactsPath);
    const contactsParse = JSON.parse(readResult);

    const filterContacts = contactsParse.filter((user) => {
      return user.id === contactId ? user : null;
    });
    console.table(filterContacts);
  } catch (err) {
    console.log(err);
  }
}
// getContactById("Z5sbDlS7pCzNsnAHLtDJd1");
// getContactById("Z5sbDlS7pCzNsnAHLtDJd");

export async function addContact(name, email, phone) {
  try {
    // ...твій код. Повертає об'єкт доданого контакту (з id).

    const createContact = { id: nanoid(), name, email, phone };

    const readResult = await fs.readFile(contactsPath);
    const contactsParse = JSON.parse(readResult);

    const newContactsObj = [...contactsParse, createContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContactsObj));

    console.table(createContact);
  } catch (error) {
    console.log(error);
  }
}
// addContact("bob", "bob@i.ua", "222-22-222"); //FfJF59Sytdq7FN8I_qPKB

export async function removeContact(contactId) {
  try {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.

    const readResult = await fs.readFile(contactsPath);
    const contactsParse = JSON.parse(readResult);

    const filterContacts = contactsParse.filter((user) => {
      return user.id === contactId ? user : null;
    });
    console.table(filterContacts);

    const filteredContacts = contactsParse.filter(
      (user) => user.id !== contactId
    );
    // console.log(filteredContacts);
    await fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
  } catch (err) {
    console.log(err);
  }
}
// removeContact("FfJF59Sytdq7FN8I_qPKB");
