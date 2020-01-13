const sdate=document.querySelector("#sd");

const edate=document.querySelector("#ed");

const inputsCourse = document.querySelectorAll("input");
const buttonCourse=document.querySelector("#registration");

function StartVSEndDate(){

    if(sdate.value>edate.value)
    {
        alert("Start Date cannot be greater than End Date!")
        sdate.value="";
        edate.value="";
        
    }
}



edate.addEventListener("input",StartVSEndDate);

button.addEventListener("click",StartVSEndDate);