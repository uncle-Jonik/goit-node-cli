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
      //node index.js -a list

      console.table(await listContacts());
      break;

    case "get":
      // ... id
      //node index.js -a get -i 05olLMgyVQdWRwgKfg5J6

      if (!id) {
        console.log("The ID field is required. Please try again.");
        break;
      }

      console.table(await getContactById(id));
      break;

    case "add":
      // ... name email phone
      //node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
      if (!name && !email && !phone) {
        console.log(
          "The name/email/phone field is required. Please try again."
        );
        break;
      }

      console.table(await addContact(name, email, phone));
      break;

    case "remove":
      // ... id
      //node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
      if (!id) {
        console.log("The ID field is required. Please try again.");
        break;
      }
      console.table(await removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
