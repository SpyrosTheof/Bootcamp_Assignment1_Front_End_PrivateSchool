const inputs = document.querySelectorAll("input");
const button=document.querySelector("#registration");

const text=document.querySelectorAll("[type=text]");

function onlyLetters(){
    for(i=0;i<text.length;i++)
    {
        text[i].setAttribute("pattern","[a-zA-Z]*")

    }
}


//start date and end date validation



//sets all inputs to the attribute required
function setRequired(){

for (var i=0; i < inputs.length; i++) {
    inputs[i].setAttribute("required", "");
}

}



function buttonDisabled()
{
    for(i=0;i<inputs.length;i++)
    {
        if(inputs[i].value==="")
        {
            button.setAttribute("disabled","");
        }

        else{
            button.removeAttribute("disabled");
        }
    }

}

for(i=0;i<inputs.length;i++)
{
    inputs[i].addEventListener("input",buttonDisabled);
}

//start date and end date validation



function success(){
    
    alert("success");

}



window.addEventListener("load",setRequired);

window.addEventListener("load",buttonDisabled);

window.addEventListener("load",onlyLetters);