/*---------------GLOBAL VARIABLES/DOM ELEMENTS---------------*/
let form = document.getElementById('form');
let groupInput = document.getElementById('group-input');
let inputFields = document.querySelectorAll('input');
let submitBtn = document.getElementById('submit');
let deleteBtn = document.getElementById('delete');
let table = document.getElementById('address-book-table');
let alert = document.getElementById('alert');

/*---------------DEFINING THE MAIN PERSON CLASS---------------*/
class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

/*---------DEFINING THE RELATIVE CLASS (EXTENSION OF PERSON)--------*/
class Relative extends Person {
    constructor(firstName, lastName, email, relation) {
        super(firstName, lastName, email);
        this.relation = relation;
    }
}

/*---------DEFINING THE FRIEND CLASS (EXTENSION OF PERSON)--------*/
class Friend extends Person {
    constructor(firstName, lastName, email, yearsOfFriendship, friendsFrom) {
        super(firstName, lastName, email);
        this.yearsOfFriendship = yearsOfFriendship;
        this.friendsFrom = friendsFrom;
    }
}

/*--------DEFINING THE ACQUAINTANCE CLASS (EXTENSION OF PERSON)-------*/
class Acquaintance extends Person {
    constructor(firstName, lastName, email, acquaintedThrough) {
        super(firstName, lastName, email);
        this.acquaintedThrough = acquaintedThrough;
    }
}

/*------------------DEFINING THE ADDRESS BOOK CLASS------------------*/
class AddressBook {
    constructor(group) {
        this.persons = [];
    }

    // The method that will add a new contact/person to the address book
    AddPerson(group, person) {
        this.persons.push(person);
        let row = document.createElement('tr');

        function tableCell(value) {
            let td = document.createElement('td');
            td.innerHTML = value;
            row.appendChild(td);
        }

        tableCell(`<span class="id-entry">${this.persons.length}</span> | <input type="checkbox" id="${this.persons.length}">`);
        tableCell(String(group)[0].toUpperCase() + String(group).slice(1));

        for (let property in person) {
            tableCell(person[property]);
        }

        table.appendChild(row);
    }

    // The method that will remove a contact/person from the address book
    RemovePerson(value) {
        let idEntries = document.querySelectorAll('.id-entry');
        this.persons.splice(value, 1);
        table.removeChild(table.childNodes[value + 2]);
        idEntries.forEach((item, index) => {
            if (index >= value) {
                item.textContent = index;
            } else {
                item.textContent = index + 1;
            }
        });
        alert.style.color = 'rgb(95, 23, 23)';
        alert.textContent = 'You have deleted a person from the address book.';
    }
}

// Creating an instance of the Address Book class/object
let addressBook = new AddressBook;

/*---A FUNCTION WHICH EXTENDS THE CONTACT FORM ACC. TO TYPE OF PERSON/CONTACT---*/
function extendForm(...values) {
    groupInput.innerHTML = '';
    values.forEach((value) => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        label.setAttribute('for', value);
        label.id = `${value}-label`;
        input.type = 'text';
        input.id = value;
        input.name = value;
        input.required = true;
        groupInput.appendChild(label);
        groupInput.appendChild(input);
    });
}

/*-------INPUT FIELDS EVENT LISTENERS FOR EXTENSION OF THE FORM-------*/
inputFields.forEach((element) => {
    element.addEventListener('change', () => {
        let group = form.group.value;
        switch (group) {
            case 'relative':
                extendForm('relation');
                document.getElementById('relation-label').textContent = 'Type of relation: ';
                break;
            case 'friend':
                extendForm('yearsOfFriendship', 'friendsFrom');
                document.getElementById('yearsOfFriendship-label').textContent = 'Years of friendship: ';
                document.getElementById('friendsFrom-label').textContent = 'Friends from (where): ';
                break;
            case 'acquaintance':
                extendForm('acquaintedThrough');
                document.getElementById('acquaintedThrough-label').textContent = 'Acquainted through: ';
                break;
        }
    });
});

/*------------------SUBMIT BUTTON EVENT LISTENER------------------*/
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let email = form.email.value;
    let group = form.group.value;
    let person;

    // Validation for the input fields
    if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@') && group !== '') {
        // Creating an instance of an object acc. to type of contact input
        switch (group) {
            case 'relative':
                let relation = form.relation.value;
                person = new Relative(firstName, lastName, email, relation);
                break;
            case 'friend':
                let yearsOfFriendship = form.yearsOfFriendship.value;
                let friendsFrom = form.friendsFrom.value;
                person = new Friend(firstName, lastName, email, yearsOfFriendship, friendsFrom);
                break;
            case 'acquaintance':
                let acquaintedThrough = form.acquaintedThrough.value;
                person = new Acquaintance(firstName, lastName, email, acquaintedThrough);
                break;
        }
        // Calling the addressBook AddPerson method
        addressBook.AddPerson(group, person);
        alert.style.color = 'rgb(14, 87, 59)';
        alert.textContent = 'You have successfully entered an e-mail address!';
    } else {
        alert.style.color = 'rgb(95, 23, 23)';
        alert.textContent = 'Please fill out all the fields accordingly, with a correct e-mail address!';
    }
    groupInput.innerHTML = '';
    form.reset();
});

/*------------------ENTER KEYPRESS EVENT LISTENER------------------*/
form.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        submitBtn.click();
    }
});

/*------------------DELETE BUTTON EVENT LISTENER------------------*/
deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    checkboxInputs.forEach((item, index) => {
        // Validation for deleting if a contact is checked
        if (item.checked) {
            // Calling the addressBook RemovePerson method
            addressBook.RemovePerson(index);
        }
    });
});