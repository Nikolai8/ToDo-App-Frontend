window.addEventListener("load", () => {
    ToDo.init();
});

const ToDo = {
    toDoArray: [],
    addToDoInputActive: false,

    async init(){
        this.initControls();
    },

    async initControls() {
        document.getElementById("ListAddItemContainer").addEventListener("click", () => {
            this.addToDo();
        });

        await fetch("http://127.0.0.1:8080/todos/")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            
            for(let todo of data){
                this.createToDoDOM(null, todo.todo, todo.priority);
            }
        });
    },

    addToDo() {
        if(!this.addToDoInputActive) {
            let div = document.createElement("div");
            div.classList.add("ListItemContainer", "ListNewItemContainer");

            let input = document.createElement("input");
            input.classList.add("ListAddItemInput");

            let inputPrio = document.createElement("input");
            inputPrio.type = "number";
            inputPrio.min = "0";
            inputPrio.classList.add("ListAddPrioInput");

            input.onkeydown = (evt) => {
                if(evt.key == "Enter") {
                    if(inputPrio.value != "" && input.value != "") {
                        evt.target.blur();
                        this.createToDoDOM(div, input.value, inputPrio.value);
                    }
                }
            }
            inputPrio.onkeydown = (evt) => {
                if(evt.key == "Enter") {
                    if(inputPrio.value != "" && input.value != "") {
                        evt.target.blur();
                        this.createToDoDOM(div, input.value, inputPrio.value);
                    }
                }
            }

            div.appendChild(input);
            div.appendChild(inputPrio);

            this.addToDoInputActive = true;
            document.getElementById("ListContainer").appendChild(div);
            document.getElementById("ListAddItemMessage").style.display = "block";
            input.focus();
        } else {
            document.getElementsByClassName("ListNewItemContainer")[0].style.outline = "4px solid red";
        }
    },

    createToDoDOM(div, value, prio) {
        let newContainer = null;

        if(div != null) {
            div.classList.remove("ListNewItemContainer");

            newContainer = false;
        } else {
            div = document.createElement("div");
            div.classList.add("ListItemContainer");

            newContainer = true;
        }

        let prioDiv = document.createElement("div");
        prioDiv.classList.add("prio");
        prioDiv.innerText = prio;

        div.innerText = value;
        div.style.outline = "none";

        document.getElementById("ListAddItemMessage").style.display = "none";

        let svg = document.createElement("img");
        svg.classList.add("checkToDoIcon");
        svg.src = "./media/check.svg";
        svg.height = "60";
        svg.width = "60";

        svg.addEventListener("click", () => this.deleteToDo(value, svg.parentElement, prio));

        div.appendChild(prioDiv);
        div.appendChild(svg);

        this.saveToDo(value, prio);

        if(newContainer == true) document.getElementById("ListContainer").appendChild(div);
    },

    async saveToDo(des, prio) {
        this.addToDoInputActive = false;

        let json = { "todo": des, "priority": prio };

        await fetch("http://127.0.0.1:8080/todos/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(json)
        })
        .then(res => {
            console.log(res);
        });
    },

    async deleteToDo(des, item, prio) {
        item.remove();

        let json = { "todo": des, "priority": prio };

        await fetch("http://127.0.0.1:8080/todos/", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(json)
        })
        .then(res => {
            console.log(res);
        });
    }
}