const contacts = require("./contacts")
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      await contacts.addContact(name, email, phone);
      const newContactsList = await contacts.listContacts();
      console.log(newContactsList);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({action: "list"});
// invokeAction({action: "add"});
// invokeAction({action: "get", id: "vza2RIzNGIwutCVCs4mCL"});