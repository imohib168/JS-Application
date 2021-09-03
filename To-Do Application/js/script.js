function AddItem() {
    var item = document.getElementById("toDoItem");
    var list = document.getElementById("toDoList");

    if (item.value == "") {
        alert("Please write some text to Add the Task in the List...")
    } else {
        // 
        var li = document.createElement("li");
        var liText = document.createTextNode(item.value);
        li.appendChild(liText);
        list.appendChild(li);

        // 
        var del = document.createElement("button");
        var delText = document.createTextNode("");
        del.setAttribute("class", "fas fa-trash delBtn");
        del.setAttribute("onclick", "delItem(this)")
        del.appendChild(delText);
        li.appendChild(del);

        // 
        var edit = document.createElement("button");
        var editText = document.createTextNode("");
        edit.setAttribute("class", "fas fa-user-edit editBtn")
        edit.setAttribute("onclick", "EditItem(this)")
        edit.appendChild(editText);
        li.appendChild(edit)

        // 
        var done = document.createElement("button");
        var doneText = document.createTextNode("");
        done.setAttribute("class", "fas fa-check-circle doneBtn")
        done.setAttribute("onclick", "done(this)")
        done.appendChild(doneText)
        li.appendChild(done)

        item.value = ""
    }


}

function delItem(delItem) {
    // var confirmDelItem = prompt("Do you want to delete this Item? ", "Yes OR No");

    // if (confirmDelItem.toLowerCase() == "yes") {
    //     delItem.parentNode.remove()
    // }

    delItem.parentNode.remove()

}

function DelAll() {
    var confirmation = prompt("Do you want to delete all Items: ", "Yes OR No")

    if (confirmation.toLowerCase() == "yes") {
        var list = document.getElementById("toDoList");
        list.innerHTML = ""
    }

}

function EditItem(ItemEdit) {
    var target = ItemEdit.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter the Task: ", target);

    if (newValue == "") {
        alert("Can't add empty task...")
    } else {
        ItemEdit.parentNode.firstChild.nodeValue = newValue;
    }
}

function done(completed) {
    var str = completed.parentNode;
    str.style.textDecoration = "line-through";
    str.style.color = "red";
}
