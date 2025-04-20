const todolist = [{
   name :'make dinner',
    dueDate:'2025-12-22',
},{
     name:'wash dishes',
    dueDate:'2025-12-22e'

}];

rendertodolist();
   
function rendertodolist() {

    let todolistHTML = ''

    todolist.forEach((todoobject,index)=>{
        const{name,dueDate} = todoobject;
        const html =
         `<div> ${name} </div>
         <div> ${dueDate} </div>
          <button
          onclick = "todolist.splice(${index},1);
          rendertodolist()"class = "delete"
          >Delete</button>
         `
         // todolistHTML += html;
        todolistHTML = todolistHTML + html;
    });
   
    

    document.querySelector(".js-todo-list")
        .innerHTML = todolistHTML
}

function addtodo() {
    const inputelement = document.querySelector('.js-name-input')

    const name = inputelement.value;

    const dateinputelement = document.querySelector('.js-date-input');

    const  dueDate = dateinputelement.value;

    todolist.push({
      //  name:name,
       // duedate:dueDate,
        name,
        dueDate,
 } );

    inputelement.value = '';
    

    rendertodolist();
}