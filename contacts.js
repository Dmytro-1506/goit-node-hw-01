const fs = require('fs/promises')
// const path = require('node:path')

const contactsPath = __filename;
console.log(__dirname);
console.log(contactsPath);
console.log(__filename);

const fileOperation = async ({ action, data }) => {
    switch (action) {
        case 'read':
            const result = await fs.readFile(filePath, `utf-8`)
            console.log(result)
            break

        case 'add':
            await fs.appendFile(filePath, data)
            break

        case 'replace':
            await fs.writeFile(filePath, data)
            break

        default:
            console.log('Unknown action')
            break
    }
};

module.exports = {
    info,
    log,
};

// fileOperation({ action: 'read' })
// fileOperation({ action: 'add', data: 'smth' })
// fileOperation({ action: 'replace', data: 'Hello' })
// fs.rename(filePath, './quote.txt')
// fs.unlink('./quote.txt')