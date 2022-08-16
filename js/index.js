//step-1: add event listener to the email feild
document.querySelector("#click-button").addEventListener("click", function(){
    //step-2 email value get
    const emailFeild = document.querySelector("#email-feild");
    const email = emailFeild.value;
    //step-3 password value get
    const passwordFeild = document.querySelector("#password-feild");
    const password = passwordFeild.value;
    //step-4 condition or varify step-2 & step-3 
    if(email==='bipul.phero@gmail.com' && password==='bipul#'){
        window.location.href = "indor.html"
    }
    else{
      alert('Incorrect Password')
    }
})