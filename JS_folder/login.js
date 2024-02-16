
const submit = document.querySelector(".submit-btn");
const username = document.querySelector(".user");
const password = document.querySelector(".pass");
const login = document.querySelector(".login-tab");
let users=[];
let log=false;

if(localStorage.getItem("users"))
{
    users = JSON.parse(localStorage.getItem("users"));
}

submit.addEventListener("click" , ()=>{

    users.forEach(usr => {
        
        if(usr.username == username.value && usr.pass == password.value)
        {
            window.location.href = "notes.html";
            localStorage.setItem("currUser" ,JSON.stringify( usr))
            log = true;
        }
    });
    
    if(log == false){
        console.error("wrong password");
        let error = document.createElement("div");
        error.textContent="wrong username or password";
        error.style.color = "red";
        error.style.marginTop = "10px"
        login.appendChild(error);

        setTimeout(function() {
            error.remove();
          }, 2000);
    }

})



