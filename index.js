const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch(action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


invokeAction(argv);


