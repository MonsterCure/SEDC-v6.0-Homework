$(document).ready(function(){
    function Contact(id, first_name, last_name, email) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
    }

    function AddressBook() {
        let form = $('#contacts-form');
        let table = $('#contacts-table');
        let save = $('#contacts-op-save');
        let discard = $('#contacts-op-discard');
        let regEx = /^[a-zA-Z0-9\._]+@[a-zA-Z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
        let formErrors = $('.error');
        let contacts = [
            []
        ];
        let contactNo = 1;
        let self = this;

        function resetErrors() {
            for (let i = 0; i < formErrors.length; i++) {
                formErrors[i].innerText = '';
            }
        };

        this.init = function () {

            form.submit(function (ev) {
                ev.preventDefault();
    
                let firstName = this.first_name.value;
                let lastName = this.last_name.value;
                let email = this.email.value;
                let id = contactNo;

                resetErrors();

                let validate = true;
                if (firstName == '') {
                    $('#error-first-name').text('First name is required.');
                    validate = false;
                }
                if (lastName == '') {
                    $('#error-last-name').text('Last name is required.');
                    validate = false;
                }
                if (email == '') {
                    $('#error-email').text('E-mail is required.');
                    validate = false;
                } else if (!regEx.test(email)) {
                    $('#error-email').text('Wrong e-mail format.');
                    validate = false;
                }

                if (validate) {
                    let contact = new Contact(id, firstName, lastName, email);
                    self.addRow(contact, contact.id, 'save');
                    contacts.push(contact);
                    form[0].reset();
                    contactNo++;
                }

                discard.on('click', function (ev) {
                    form[0].reset();
                    form[0].id_entry.value = 0;
                    resetErrors();
                });
            });
        }

        this.addRow = function (contact, rowId, mode) {
            let row;
            if (mode === 'save') {
                row = $('<tr>');
                row.attr('id', `row-${contact.id}`);
            } else if (mode === 'edit') {
                row = $(`#row-${rowId}`);
                row.html('');
            }
            
            function tableCell(value, num) {
                let td = $('<td>');
                td.attr('class', `td-${num}`);
                td.html(value);
                row.append(td);
            }

            tableCell(contact.id, 0);
            tableCell(contact.firstName, 1);
            tableCell(contact.lastName, 2);
            tableCell(contact.email, 3);
            tableCell(`<a href="#" data-id="${contact.id}" id="edit-${contact.id}" class="edit">Edit</a> | <a href="#" data-id="${contact.id}" id="delete-${contact.id}">Delete</a>`, 4);

            if (mode === 'save') {
                table.append(row);
            }
            
            $(`#delete-${contact.id}`).on('click', function (ev) {
                ev.preventDefault();
                let row = $(`#row-${contact.id}`);
                row.remove();
            });

            $(`#edit-${contact.id}`).on('click', function (ev) {
                let rowId = $(`#edit-${contact.id}`).attr('data-id');
                let row = $(`#row-${rowId}`);

                let contactId = row.children('.td-0').text();
                let contactFirstName = row.children('.td-1').text();
                let contactLastName = row.children('.td-2').text();
                let contactEmail = row.children('.td-3').text();

                var contactEdited = new Contact(contactId, contactFirstName, contactLastName, contactEmail);
                self.editRow(contactEdited, rowId);
            });
        }

        this.editRow = function (contact, rowId) {

            let row = $(`#row-${rowId}`);

            row.children('.td-1').html(`<input type="text" value="${contact.firstName}" class="input-1">`);
            row.children('.td-2').html(`<input type="text" value="${contact.lastName}" class="input-2">`);
            row.children('.td-3').html(`<input type="text" value="${contact.email}" class="input-3">`);
            row.children('.td-4').html(`<a href="#" data-id="${contact.id}" id="save-${contact.id}">Save</a> | <a href="#" data-id="${contact.id}" id="delete-${contact.id}">Delete</a>`);

            $(`#save-${contact.id}`).on('click', function (ev) {
                let id = $(`#save-${contact.id}`).attr('data-id');
                let row = $('#row-' + id);               

                let cId = row.children('.td-0').text();
                let cFirstName = row.children('.td-1').children('.input-1').val();
                let cLastName = row.children('.td-2').children('.input-2').val();
                let cEmail = row.children('.td-3').children('.input-3').val();

                let contactEditedSaved = new Contact(cId, cFirstName, cLastName, cEmail);

                self.addRow(contactEditedSaved, id, 'edit');
            });
        }
    }
    let addressBook = new AddressBook();
    addressBook.init();
});