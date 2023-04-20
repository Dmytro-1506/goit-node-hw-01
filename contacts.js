const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
    const allContacts = await fs.readFile(contactsPath, `utf-8`);
    return allContacts;
};

async function getContactById(contactId) {
    const allContacts = await listContacts();
    const contactById = allContacts.find(el => el.id === contactId);
    return contactById || null;
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
    const newContact = {
        id: nanoid(),
        name: name,
        email: email,
        phone: phone
    };
    await fs.appendFile(contactsPath, newContact);
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};