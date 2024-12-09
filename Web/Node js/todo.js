const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const todoFile = 'todo.json';


//loading existing file

let todos = [];
if(fs.existsSync(todoFile)){
    todos = JSON.parse(fs.readFileSync(todoFile));
}
      


    
const commands = {
    add: ()=>{
        readline.question("Enter a new todo : ",(todo)=>{
            todos.push({text: todo, done: false});
            saveTodos();
            console.log("Todo added !");
            mainMenu();
        });
    },
 
    delete: ()=>{
        readline.question("Enter a index to delete Todo : ",(index)=>{
          index = parseInt(index);
          if(index >= 0 && index < todos.length){
            todos.splice(index,1);
            saveTodos();
            console.log("Todos deleted!");
          }else{
            console.log("invalid index");
          }
          mainMenu();
        });
    },

      done: ()=>{
        readline.question(' Enter the index of the todo to make as done : ',(index)=>{
          index = parseInt(index);
          if(index >=0 && index <todos.length){
            todos[index].done = true;
            saveTodos();
            console.log(' Todo marked as done!');
          }else{
            console.log(' Invalid index !');
          }
          mainMenu();
        });
      },

      list: () =>{
        console.log('Todos : ');
        todos.forEach((todo,index)=>{
          console.log(`${index}: ${todo.text} (${todo.done ? 'Done' : 'Not done'})`);
        });
        mainMenu();
      },
};


//save todos to file

function saveTodos(){
    fs.writeFileSync(todoFile,JSON.stringify(todos));
  }


function mainMenu(){
  
  console.log("Options : ");
  console.log('1. Add Todo');
  console.log('2. Delete Todo');
  console.log('3. Mark Todo as done');
  console.log('4. List Todos');
  console.log('5. Quit');
  
  readline.question('Enter your choice : ',(choice) =>{
      switch(choice){
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

