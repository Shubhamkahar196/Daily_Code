const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const TODO_FILE = 'todo.json';

// Load existing todos
let todos = [];
if (fs.existsSync(TODO_FILE)) {
  todos = JSON.parse(fs.readFileSync(TODO_FILE));
}

// CLI commands
const commands = {
  add: () => {
    readline.question('Enter a new todo: ', (todo) => {
      todos.push({ text: todo, done: false });
      saveTodos();
      console.log('Todo added!');
      mainMenu();
    });
  },
  delete: () => {
    readline.question('Enter the index of the todo to delete: ', (index) => {
      index = parseInt(index);
      if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        saveTodos();
        console.log('Todo deleted!');
      } else {
        console.log('Invalid index!');
      }
      mainMenu();
    });
  },

  done: () => {
    readline.question('Enter the index of the todo to mark as done: ', (index) => {
      index = parseInt(index);
      if (index >= 0 && index < todos.length) {
        todos[index].done = true;
        saveTodos();
        console.log('Todo marked as done!');
      } else {
        console.log('Invalid index!');
      }
      mainMenu();
    });
  },
  list: () => {
    console.log('Todos:');
    todos.forEach((todo, index) => {
      console.log(`${index}: ${todo.text} (${todo.done ? 'Done' : 'Not done'})`);
    });
    mainMenu();
  }
};

// Save todos to file
function saveTodos() {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos));
}

// Main menu
function mainMenu() {
  console.log('Options:');
  console.log('1. Add todo');
  console.log('2. Delete todo');
  console.log('3. Mark todo as done');
  console.log('4. List todos');
  console.log('5. Quit');
  readline.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        commands.add();
        break;
      case '2':
        commands.delete();
        break;
      case '3':
        commands.done();
        break;
      case '4':
        commands.list();
        break;
      case '5':
        process.exit();
      default:
        console.log('Invalid choice!');
        mainMenu();
    }
  });
}

mainMenu();


