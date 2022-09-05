let person =
{
    tasks: [],
    add: function () {
        console.log(select.value)

        let task = {
            id: Date.now(),
            description: text.value
        }
        this.tasks.push(task)
        console.log(this.tasks);


        this.render(task)
    },

    render: function (task = null) {
        let showList = document.getElementById("show")
        if (task) {
            let li = document.createElement("li")
            li.setAttribute("id", "list")
            let RemoveButton = document.createElement("button")
            RemoveButton.setAttribute("id", task.id)
            li.innerText = task.description
            RemoveButton.innerText = "Remove"
            li.appendChild(RemoveButton)
            RemoveButton.onclick = () => this.Remove(RemoveButton.id)
            showList.appendChild(li)


            let select = document.getElementById("select");

            const option = document.createElement("option")
            option.textContent = task.description
            option.value = task.description
            select.append(option)
            return;
        }

        var self = this;
        select.innerHTML=""
        showList.innerHTML = '';
        this.tasks.forEach(function (task) {
            self.render(task);
        })




    },
    Remove: function (button) {

        let index = this.tasks.findIndex((element) => element.id == button);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            this.render();
            return;
        }
    }


}