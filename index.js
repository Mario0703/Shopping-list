const BTN = document.getElementById("my-btn");
const ul = document.getElementById("my-shopping-list");
let input = document.getElementById("my-input");


BTN.onclick = function(){
     CreateElements();
}


function CreateElements(){
    
    let li = document.createElement("li");
    let p = document.createElement("p")
    const edit_BTN = document.createElement("button");
    const del_BTN = document.createElement("button");

    del_BTN.innerText = "delete";
    edit_BTN.innerText = "EDIT";

    del_BTN.className = "delete"

    p.innerText = input.value;
    li.appendChild(p);
    li.appendChild(edit_BTN);
    li.appendChild(del_BTN);
    ul.appendChild(li);
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
            if(p.contentEditable == "true"){
                edit_BTN.innerText = "EDIT"
                p.contentEditable = "false";
            }
            else{
                edit_BTN.innerText = "confirm"
                p.contentEditable = "true";
            }
        }
    }

}