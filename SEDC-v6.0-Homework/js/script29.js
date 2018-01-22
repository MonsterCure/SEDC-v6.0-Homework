let form = document.getElementById('form');
let groupInput = document.getElementById('group-input');
let inputFields = document.querySelectorAll('input');
let submitBtn = document.getElementById('submit');
let deleteBtn = document.getElementById('delete');
let table = document.getElementById('address-book-table');
let alert = document.getElementById('alert');

class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

class Relative extends Person {
    constructor(firstName, lastName, email, relation) {
        super(firstName, lastName, email);
        this.relation = relation;
    }
}

class Friend extends Person {
    constructor(firstName, lastName, email, yearsOfFriendship, friendsFrom) {
        super(firstName, lastName, email);
        this.yearsOfFriendship = yearsOfFriendship;
        this.friendsFrom = friendsFrom;
    }
}

class Acquaintance extends Person {
    constructor(firstName, lastName, email, acquaintedThrough) {
        super(firstName, lastName, email);
        this.acquaintedThrough = acquaintedThrough;
    }
}

class AddressBook {
    constructor(group) {
        this.persons = [];
    }

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

    RemovePerson() {
        let checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
        let idEntries = document.querySelectorAll('.id-entry');
        checkboxInputs.forEach((item, index) => {
            if (item.checked) {
                this.persons.splice(index, 1);
                table.removeChild(table.childNodes[index + 2]);
            }
        });
        for (let i = 0; i < checkboxInputs.length; i++) {
            idEntries[i].innerHTML = i + 1;
            checkboxInputs[i].id = i + 1;
        }
        alert.style.color = 'rgb(95, 23, 23)';
        alert.textContent = 'You have deleted a person from the address book.';
    }
}

let addressBook = new AddressBook;

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

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let email = form.email.value;
    let group = form.group.value;
    let person;

    if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@') && group !== '') {
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

form.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        submitBtn.click();
    }
});

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addressBook.RemovePerson();
});