function Contact(id, first_name, last_name, email) {
    this.id = id;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
}

function AddressBook() {
    let form = document.getElementById('contacts-form');
    let table = document.getElementById('contacts-table');
    let save = document.getElementById('contacts-op-save');
    let discard = document.getElementById('contacts-op-discard');
    let regEx = /^[a-zA-Z0-9\._]+@[a-zA-Z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    let formErrors = [];
    let contacts = [
        []
    ];
    let contactNo = 1;
    let self = this;

    formErrors = Array.from(document.getElementsByClassName('error'));

    function resetErrors() {
        for (let i = 0; i < formErrors.length; i++) {
            formErrors[i].innerText = '';
        }
    };

    this.init = function () {

        form.addEventListener('submit', function (ev) {
            ev.preventDefault();

            let firstName = this.first_name.value;
            let lastName = this.last_name.value;
            let email = this.email.value;
            let id = contactNo;

            resetErrors();

            let validate = true;
            if (firstName == '') {
                document.getElementById('error-first-name').innerText = 'First name is required.';
                validate = false;
            }
            if (lastName == '') {
                document.getElementById('error-last-name').innerText = 'Last name is required.';
                validate = false;
            }
            if (email == '') {
                document.getElementById('error-email').innerText = 'E-mail is required.';
                validate = false;
            } else if (!regEx.test(email)) {
                document.getElementById('error-email').innerText = 'Wrong e-mail format.';
                validate = false;
            }

            if (validate) {
                let contact = new Contact(id, firstName, lastName, email);
                self.addRow(contact, contact.id, 'save');
                contacts.push(contact);
                form.reset();
                contactNo++;
            }

            discard.addEventListener('click', function (ev) {
                form.reset();
                form.id_entry.value = 0;
                resetErrors();
            });
        });
    }

    this.addRow = function (contact, rowId, mode) {
        let row;
        if (mode === 'save') {
            row = document.createElement('tr');
            row.setAttribute('id', `row-${contact.id}`);
        } else {
            row = document.getElementById(`row-${rowId}`);
            row.innerHTML = '';
        }

        function tableCell(value) {
            let td = document.createElement('td');
            td.innerHTML = value;
            row.appendChild(td);
        }

        tableCell(contact.id);
        tableCell(contact.firstName);
        tableCell(contact.lastName);
        tableCell(contact.email);
        tableCell(`<a href="#" data-id="${contact.id}" id="edit-${contact.id}" class="edit">Edit</a> | <a href="#" data-id="${contact.id}" id="delete-${contact.id}">Delete</a>`);

        if (mode === 'save') {
            table.appendChild(row);
        }

        let deleteBtn = document.getElementById(`delete-${contact.id}`);

        deleteBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            this.parentNode.parentNode.remove();
        });

        let editBtn = document.getElementById(`edit-${contact.id}`);

        editBtn.addEventListener('click', function (ev) {
            let rowId = this.getAttribute('data-id');
            let row = document.getElementById(`row-${rowId}`);

            let contactId = row.children[0].innerText;
            let contactFirstName = row.children[1].innerText;
            let contactLastName = row.children[2].innerText;
            let contactEmail = row.children[3].innerText;

            var contactEdited = new Contact(contactId, contactFirstName, contactLastName, contactEmail);
            self.editRow(contactEdited, rowId);
        });
    }

    this.editRow = function (contact, rowId) {

        let row = document.getElementById(`row-${rowId}`);

        row.children[1].innerHTML = `<input type="text" value="${contact.firstName}">`;
        row.children[2].innerHTML = `<input type="text" value="${contact.lastName}">`;
        row.children[3].innerHTML = `<input type="text" value="${contact.email}">`;
        row.children[4].innerHTML = `<a href="#" data-id="${contact.id}" id="save-${contact.id}">Save</a> | <a href="#" data-id="${contact.id}" id="delete-${contact.id}">Delete</a>`;

        let saveInlineBtn = document.getElementById(`save-${contact.id}`);

        saveInlineBtn.addEventListener('click', function (ev) {
            let id = this.getAttribute('data-id');
            let row = document.getElementById('row-' + id);

            let cId = row.children[0].textContent;
            let cFirstName = row.children[1].children[0].value;
            let cLastName = row.children[2].children[0].value;
            let cEmail = row.children[3].children[0].value;

            let contactEditedSaved = new Contact(cId, cFirstName, cLastName, cEmail);

            self.addRow(contactEditedSaved, id, 'edit');
        });
    }
}

let addressBook = new AddressBook();
addressBook.init();