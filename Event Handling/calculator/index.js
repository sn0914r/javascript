const renderBtns=()=>{
    let btnsArr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 0, "(", ")"]
    const btnStructure=val=>`<button id=${val} class="num-btns btn btn-sm btn-primary m-1 px-5">${val}</button>`
    const btnContainer = document.querySelector(".nums");
    btnsArr.forEach(e=>btnContainer.innerHTML+=btnStructure(e))
}

renderBtns();

const showError=msg=>`<div class="alert alert-danger">${msg}</div>`;

document.querySelector(".btns").addEventListener("click",(e)=>{
    const input = document.querySelector("#inputBox");
    const output = document.querySelector("#outputBox")
    const errorBox = document.querySelector(".alertBox");
    errorBox.innerHTML="";
    const curInput = input.value;

    if (e.target.id==="="){
        if (curInput===""){
            errorBox.innerHTML = showError("please write something");
            return;
        }
        const evalOutput = calculator(curInput);
        output.value = evalOutput;
        input.value ="";
        return
    }
    if (e.target.id==="x"){
        if (curInput===""){
            errorBox.innerHTML = showError("empty");
            return;
        }
        input.value = curInput.slice(0, curInput.length-1);
        return
    }
    if (e.target.classList.contains("btn")){
        if (output.value){
            output.value=""
        }
        input.value+=e.target.id
    }    
})

const calculator=(calculation, error)=>{
    try{
        const result = eval(calculation);
        return result;
    }catch(err){
        error = err
    }
}
