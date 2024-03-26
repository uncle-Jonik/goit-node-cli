import { program } from "commander";
import {
  addContact,
  removeContact,
  listContacts,
  getContactById,
} from "./contacts.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// console.log(listContacts);

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      listContacts();
      break;

    case "get":
      // ... id
      getContactById(id);
      break;

    case "add":
      // ... name email phone
      addContact(name, email, phone);
      break;

    case "remove":
      // ... id
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
