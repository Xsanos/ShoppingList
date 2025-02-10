const EnterName = document.getElementById('input-new-item').addEventListener('keypress', function(event){
    if (event.key === "Enter"){
        AddToList();
    }
})
const AddItem = document.getElementById('add-new-item').addEventListener('click',()=> AddToList());

let id = 0;
const ID = 0;

function DeleteElement(ID){
    const element = document.getElementById(ID);
    element.remove();
    console.log(`Element ${ID} has been removed`);
}

function AddToList(){
    const TypeItem = document.getElementById('input-new-item');
    // Trim checks if there are not only whitespaces
    if (TypeItem.value.trim()){
        const div = document.createElement('div');
        div.className = "item";
        div.id = id;
        const p = document.createElement('p');
        p.innerHTML = TypeItem.value;
        p.className = "item-name";
        const deletebtn = document.createElement('input');
        deletebtn.className = "item-delete";
        deletebtn.setAttribute('type', "submit")
        deletebtn.setAttribute('value', "x")
        deletebtn.setAttribute('onclick', `DeleteElement(${id})`)
        
        // Assembling the element
        div.appendChild(p);
        div.appendChild(deletebtn)
        document.getElementById('container').appendChild(div);

        // Post production
        TypeItem.value = "";
        id +=1;
        console.log(`Created:  ${div.innerHTML}`);
    } else { 
        console.log('Name is empty');
    }
}
