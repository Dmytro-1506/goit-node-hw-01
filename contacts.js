const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
    try {
        const allContacts = await fs.readFile(contactsPath, `utf-8`);
        return allContacts;
    } catch (error) {
        console.log(error);
    }
};

async function getContactById(contactId) {
    try {
        const allContacts = await listContacts();
        const contactById = allContacts.find(el => el.id === contactId);
        return contactById || null;
    } catch (error) {
        console.log(error);
    }
};

async function removeContact(contactId) {
    try {
        const allContacts = await listContacts();
        const contactIndex = allContacts.indexOf(await getContactById(contactId));
        allContacts.slice(contactIndex, 1);
        await fs.writeFile(contactsPath, allContacts);
    } catch (error) {
        console.log(error);
    }
}

async function addContact(name, email, phone) {
    try {
        const allContacts = await listContacts();
        const newContact = {
            id: nanoid(),
            name: name,
            email: email,
            phone: phone
        };
        allContacts.push(newContact, 2);
        await fs.writeFile(newContact);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};