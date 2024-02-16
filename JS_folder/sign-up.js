
let name = document.querySelector(".signName")
let username = document.querySelector(".signUser")
let email = document.querySelector(".signMail")
let password1 = document.querySelector(".signPass1")
let password2 = document.querySelector(".signPass2")
let sigup = document.querySelector(".sign-btn")
let signTab = document.querySelector(".sign-tab")


// localStorage.clear();



class newuser{
    constructor(name , username , email , pass)
    {
        this.name = name;
        this.username = username;
        this.email = email;
        this.pass =pass;
    }

    note = [];
    adduser(){
        let users = JSON.parse( localStorage.getItem("users")) ?? [];
        users.push({username:this.username , name:this.name , email:this.email , pass:this.pass , note:this.note })

        localStorage.setItem("users" , JSON.stringify(users));
    }

    checkUsername(){
        let users =JSON.parse( localStorage.getItem("users")) ?? [];
        for(let i=0 ; i<users.length ;i++)
        {
            if(this.username == users[i].username)
                return true;
        }
    }

    checkFileds(){
        if(this.name == "")
        {
            let error = document.createElement("div");
            error.textContent = "name is required";
            error.style.color = "red";
            signTab.appendChild(error);
            setTimeout(function() {
                error.remove();
              }, 2000);
            return true;
        }
        else if(this.username == "")
        {
            let error = document.createElement("div");
            error.textContent = "username is required";
            error.style.color = "red";
            signTab.appendChild(error);
            setTimeout(function() {
                error.remove();
              }, 2000);
            return true;
        }
        else if(this.email == "")
        {
            let error = document.createElement("div");
            error.textContent = "email is required";
            error.style.color = "red";
            signTab.appendChild(error);
            setTimeout(function() {
                error.remove();
              }, 2000);
            return true;
        }
        else if(this.pass == "")
        {
            let error = document.createElement("div");
            error.textContent = "password is required";
            error.style.color = "red";
            signTab.appendChild(error);
            setTimeout(function() {
                error.remove();
              }, 2000);
            return true;
        }
    }
}

sigup.addEventListener("click" , function(){
    let currUser =new newuser(name.value ,username.value , email.value , password1.value );
    if(currUser.checkFileds())
    {
        console.error("filed is reqired");
    }
    else if(currUser.checkUsername())
    {
        let error = document.createElement("div");
        error.textContent = "username is already exist";
        error.style.color = "red";
        signTab.appendChild(error);
        setTimeout(function() {
            error.remove();
          }, 2000);
    }
    else if(password1.value !== password2.value)
    {
        let error = document.createElement("div");
        error.textContent = "passwords don't match";
        error.style.color = "red";
        signTab.appendChild(error);
        setTimeout(function() {
            error.remove();
          }, 2000);
    }
    else
    {
        console.log(currUser);
        currUser.adduser();
        localStorage.setItem("currUser" ,JSON.stringify( currUser));
        window.location.href = "notes.html";
    }
    
})
