const BTN = document.getElementById("my-btn");
const ul = document.getElementById("my-shopping-list");
let input = document.getElementById("my-input");


BTN.onclick = function(){
     CreateElements();
}


function CreateElements(){
    
    let li = document.createElement("li");
    let span = document.createElement("span")
    const edit_BTN = document.createElement("button");
    const del_BTN = document.createElement("button");


    del_BTN.innerText = "Delete";
    edit_BTN.innerText = "Edit";

    del_BTN.className = "delete"
    edit_BTN.className = "edit"
    span.innerText = input.value;
    li.appendChild(span);
    li.appendChild(edit_BTN);
    li.appendChild(del_BTN);
    ul.appendChild(li);
    li.style.listStyleType = "none";

    input.value = ""
    ul.addEventListener("click", deleteAfterClick);

    function deleteAfterClick(event) {
        // Determine if it was a delete button that was clicked
        if(event.target.classList.contains("delete")){
            event.target.closest("li").remove();
        }
    }
      
    EDIT();
    
    function EDIT(){
        edit_BTN.onclick = function(){
            if(span.contentEditable == "true"){
                span.contentEditable = "false";
                edit_BTN.innerText = "Edit"
            }
            else{
                span.contentEditable = "true";
                edit_BTN.innerText = "Confirm"
            }
            console.log(span.contentEditable)
        }
    }

}