const sdate=document.querySelector("#sd2");

const edate=document.querySelector("#ed2");

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

windows.addEventListener("load",StartVSEndDate)