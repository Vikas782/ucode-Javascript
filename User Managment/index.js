let managment =
{
    users: [],
    add: function (value) {
        if (value.Name !== "" && value.UserName !== "" && value.Mail !== "" && value.Phone !== "") {
            const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regex_pattern.test(value.Mail)) {
                let user = {
                    id: Date.now(),
                    name: value.Name,
                    username: value.UserName,
                    mail: value.Mail,
                    phone: value.Phone,
                    created: new Date().toLocaleString(),
                    status: "Inactive",

                }
                this.users.push(user)
                this.render(user)
                console.log(this.users)
            }
            else {
                alert("The email address is not valid")
            }
        }
        else {
            alert("All fields are compulsary*");
        }
    },
    render: function (user = null) {
        if (user) {
            //creating table rowData
            let table = document.getElementById("table");
            let tableRow = document.createElement("tr");
            let tableName = document.createElement("td");
            let tableUserName = document.createElement("td");
            let tableUserMail = document.createElement("td");
            let tableUserPhone = document.createElement("td");
            let tableUserStatus = document.createElement("td");
            let tableCreated = document.createElement("td");

            //creating button
            let removeButton = document.createElement("button");
            let viewButton = document.createElement("button");
            let editButton = document.createElement("button");
            let disableButton = document.createElement("button");

            //asign value to HTML TAGS
            tableName.innerHTML = user.name;
            tableUserName.innerHTML = user.username;
            tableUserMail.innerHTML = user.mail;
            tableUserPhone.innerHTML = user.phone;
            tableCreated.innerHTML = user.created;
            tableUserStatus.innerHTML = user.status;

            //button value ,id and class
            removeButton.innerText = "Remove";
            viewButton.innerHTML = "View";
            editButton.innerHTML = "Edit";
            disableButton.innerHTML = "Active";

            if (user.status == 'Active') {
                disableButton.innerHTML = "Inactive"
            }

            removeButton.setAttribute("id", user.id);
            viewButton.setAttribute("id", user.id);
            editButton.setAttribute("id", user.id);
            disableButton.setAttribute("id", user.id);
            disableButton.classList.add("display-btn")
            removeButton.classList.add("removeButton");
            viewButton.classList.add("viewButton");
            editButton.classList.add("editButton");

            disableButton.addEventListener('click', () => {
                const initialText = 'Active';
                console.log(disableButton.textContent);
                if (disableButton.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                    disableButton.textContent = 'Inactive';
                } else {
                    disableButton.textContent = initialText;
                }
                this.render();
            });

            //Button onClick function
            removeButton.onclick = () => { this.remove(removeButton.id) }
            viewButton.onclick = () => { this.view(viewButton.id) }
            editButton.onclick = () => { this.edit(viewButton.id) }
            disableButton.onclick = () => { this.change(disableButton.id) }

            //append in parent tags
            tableRow.appendChild(tableName);
            tableRow.appendChild(tableUserName);
            tableRow.appendChild(tableUserMail);
            tableRow.appendChild(tableUserPhone);
            tableRow.appendChild(tableCreated);
            tableRow.appendChild(tableUserStatus);
            tableRow.appendChild(removeButton);
            tableRow.appendChild(viewButton);
            tableRow.appendChild(editButton);
            tableRow.appendChild(disableButton);
            table.appendChild(tableRow);
            return
        }
        //delete all rows and re-print the data
        let tableLength = table.rows.length
        for (let i = tableLength - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        var self = this;
        this.users.forEach(function (user) {
            self.render(user);

        })
    },
    remove: function (buttonID) {
        let index = this.users.findIndex((users) => users.id == buttonID)
        this.users.splice(index, 1)
        console.log(this.users)
        this.render()
    },
    view: function (buttonID) {
        this.users.forEach(function (element) {
            if (element.id == buttonID) {
                alert(`
                User ID: ${element.id} 
                Name of user : ${element.name}
                Username: ${element.username}
                Mail: ${element.mail}  
                Phone: ${element.phone} 
                Registered on: ${element.created} 
                `)
            }
        })
    },
    edit: function (buttonID) {
        document.querySelector(".btn-register").style.display = "none";
        document.querySelector(".btn-edit").style.display = "block"
        this.users.forEach(function (element) {
            if (element.id == buttonID) {
                yourName.value = element.name
                userName.value = element.username
                mail.value = element.mail
                phone.value = element.phone
            }
        })
        document.querySelector("#js-user-id").value = buttonID;
        console.log(document.querySelector("#js-user-id").value);

    },
    update: function (value) {
        console.log("hi")
        let hidden = document.querySelector("#js-user-id").value
        {
            this.users.forEach(function (element) {
                if (hidden == element.id) {
                    element.name = value.Name
                    element.username = value.UserName
                    element.mail = value.Mail
                    element.phone = value.Phone
                    element.password = value.Password
                }
            })

        }
        this.render();
        document.querySelector(".btn-register").style.display = "block";
        document.querySelector(".btn-edit").style.display = "none"

    },
    change: function (buttonID) {
        this.users.forEach(element => {
            if (element.id == buttonID) {
                if (element.status == "Inactive") {
                    element.status = "Active"
                }
                else {
                    element.status = "Inactive"
                }
            }
            this.render()
        })

    },
    search: function (searchUser) {
        if (searchUser !== "") {
            let tableLength = table.rows.length
            for (let i = tableLength - 1; i > 0; i--) { table.deleteRow(i); }
            this.users.forEach(element => {
                if (element.name.toUpperCase().includes(searchUser.toUpperCase())) {
                    this.render(element);
                }
            })
        }
    }
}