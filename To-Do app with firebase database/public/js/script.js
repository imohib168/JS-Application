firebase.database().ref("ToDoList").on("child_added", function (data) {

    var list = document.getElementById("toDoList");

    // 
    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().toDoItem);
    li.appendChild(liText);
    list.appendChild(li);

    // 
    var del = document.createElement("button");
    var delText = document.createTextNode("");
    del.setAttribute("class", "fas fa-trash delBtn");
    del.setAttribute("id", data.val().key)
    del.setAttribute("onclick", "delItem(this)")
    del.appendChild(delText);
    li.appendChild(del);

    // 
    var edit = document.createElement("button");
    var editText = document.createTextNode("");
    edit.setAttribute("class", "fas fa-user-edit editBtn")
    edit.setAttribute("id", data.val().key)
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
})

function AddItem() {
    var item = document.getElementById("toDoItem");

    if (item.value == "") {
        alert("Please write some text to Add the Task in the List...")
    } else {
        var databaseRef = firebase.database().ref("ToDoList");
        var key = databaseRef.push().key;

        var toDoObj = {
            toDoItem: item.value,
            key: key
        }

        databaseRef.child(key).set(toDoObj);
        item.value = ""
    }
}

function delItem(delItem) {
    firebase.database().ref("ToDoList").child(delItem.id).remove();
    delItem.parentNode.remove()
}

function DelAll() {
    var confirmation = prompt("Do you want to delete all Items: ", "Yes OR No")

    if (confirmation.toLowerCase() == "yes") {
        var list = document.getElementById("toDoList");
        firebase.database().ref("ToDoList").remove();
        list.innerHTML = ""
    }

}

function EditItem(ItemEdit) {
    var target = ItemEdit.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter the Task: ", target);

    if (newValue == "") {
        alert("Can't add empty task...")
    } else {
        var editItem = {
            toDoItem: newValue,
            key: ItemEdit.id
        }
        firebase.database().ref("ToDoList/" + ItemEdit.id).set(editItem);
        ItemEdit.parentNode.firstChild.nodeValue = newValue;
    }
}

function done(completed) {
    var str = completed.parentNode;
    str.style.textDecoration = "line-through";
    str.style.color = "red";
}
