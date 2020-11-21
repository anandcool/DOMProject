let form = document.getElementById("addForm")
let itemList = document.getElementById("items");//<ul></ul>


form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem)

function removeItem(e){
    // console.log(e.target);
    if(e.target.classList.contains("delete")){
        let li = e.target.parentElement;
        itemList.removeChild(li);

    }
}


function addItem(e){
    e.preventDefault();//not reload the page
    // console.log("hello")
    //Get the value from the input tag
    let newItem = document.getElementById("item").value;
    //Create Li Element with the help of js function createElement
    let li = document.createElement('li')//<li></li>
    //Crate a Button
    let btn = document.createElement('button');//<button></button>
    //Add a class
    btn.className = "btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));//<button>X</button>
    li.appendChild(btn);
    // Add a class
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem)) // <li>Anand</li>
    itemList.appendChild(li);
    document.getElementById("item").value = "";
}