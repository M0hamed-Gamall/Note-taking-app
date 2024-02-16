
const add = document.querySelector(".add");
const newNote = document.querySelector(".newNote");
const users =JSON.parse( localStorage.getItem("users"));

let currUser = JSON.parse(localStorage.getItem("currUser"));

function information(usr){
    let hello = document.createElement("div");
    let name = document.createElement("h2");
    let username = document.createElement("h2");
    let email = document.createElement("h2");

    name.textContent = `Name : ${usr.name}`
    username.textContent = `UserName : ${usr.username}`
    email.textContent = `Email : ${usr.email}`

    hello.append(name);
    hello.append(username);
    hello.append(email);

    document.body.prepend(hello);
}
//////////////////////////////////////////////////
function displayNotes(notes) {
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "<h1>Your Notes</h1>";
  
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const noteElement = document.createElement("div");
      noteElement.classList.add("note");
  
      const noteContent = document.createElement("p");
      noteContent.textContent = note;
      noteElement.appendChild(noteContent);
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        notes.splice(i, 1);
        displayNotes(notes);
        currUser.note = notes;
        localStorage.setItem("currUser" ,JSON.stringify( currUser));
        updataUsers();
      });
      noteElement.appendChild(deleteButton);
  
      notesContainer.appendChild(noteElement);
    }
  }
////////////////////////////////////////////////////

function updataUsers(){
    for(let i=0 ; i<users.length ; i++)
    {
        if(users[i].username == currUser.username)
        {
            users[i] = currUser;
            localStorage.setItem("users" ,JSON.stringify( users));
        }
    }
}

/////////////////////////////////////////////////////
information(currUser);
displayNotes(currUser.note);

add.addEventListener("click" , ()=>{
    if(newNote.value != "")
    {
        currUser.note[Object.keys(currUser.note).length]=newNote.value;
        displayNotes(currUser.note);
        newNote.value = "";
        localStorage.setItem("currUser" ,JSON.stringify( currUser));
        updataUsers();
    }
})




