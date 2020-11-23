let form = document.getElementById("addForm")
let itemList = document.getElementById("items");//<ul></ul>
let filter = document.getElementById("filter");


form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem)

filter.addEventListener('keyup',filterItem);


function filterItem(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li'); // HTMLCollection
    let itemsArray = Array.from(items) //Change to Array
    // console.log(itemsArray)
    itemsArray.forEach(function (el){
        let itemName = el.firstChild.textContent;
        console.log(itemName.toLowerCase().indexOf(text))
        if(itemName.toLowerCase().indexOf(text) != -1){
            el.style.display = 'block';
        }else{
            el.style.display = "none";
        }
    })
}

function removeItem(e){
    // console.log(e.target);
    if(confirm("Are You Sure U Want to delete this")){
    if(e.target.classList.contains("delete")){
        let li = e.target.parentElement;
        itemList.removeChild(li);

    }
}else{
    alert("You Chose nothing");
}
}


function addItem(e){
    e.preventDefault();//not reload the page
    // console.log("hello")
    //Get the value from the input tag
    let newItem = document.getElementById("item").value;
    //Create Li Element with the help of js function createElement
    let li = document.createElement('li')//<li></li>
    // Add a class
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem)) // <li>Anand</li>
    itemList.appendChild(li);
        //Crate a Button
        let btn = document.createElement('button');//<button></button>
        //Add a class
        btn.className = "btn btn-danger btn-sm float-right delete";
        btn.appendChild(document.createTextNode("X"));//<button>X</button>
        li.appendChild(btn);
    document.getElementById("item").value = "";
}