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
      console.log(await contacts.listContacts());
      break;

    case "remove":
      await contacts.removeContact(id);
      console.log(await contacts.listContacts());
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

// # Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
// node index.js --action="list"

// # Отримуємо контакт по id
// node index.js --action="get" --id drsAJ4SHPYqZeG-83QTVW

// # Додаємо контакт
// node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

// # Видаляємо контакт
// node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH