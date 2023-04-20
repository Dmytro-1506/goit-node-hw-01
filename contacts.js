const fs = require('fs/promises')
const path = require('path')
const {nanoid} = require('nanoid')

const contactsPath = path.join(__dirname, "db/contacts.json");

const fileOperation = async ({ action, data }) => {
    switch (action) {
        case 'read':
            const result = await fs.readFile(contactsPath, `utf-8`)
            console.log(result)
            break

        case 'add':
            await fs.appendFile(contactsPath, data)
            break

        case 'replace':
            await fs.writeFile(contactsPath, data)
            break

        default:
            console.log('Unknown action')
            break
    }
};

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