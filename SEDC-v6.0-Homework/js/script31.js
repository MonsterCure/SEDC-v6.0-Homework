// The object classes:
class Person {
    constructor(age, gender, name, surname) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
        this.adult = (this.age >= 18 ? true : false);
    }
}

class Family extends Person {
    constructor(age, gender, name, surname, father, mother, parentOf) {
        super(age, gender, name, surname);
        this.mother = mother || 'none';
        this.father = father || 'none';
        this.parentOf = parentOf || 'none';
        this.childOf = [this.mother, this.father];
    }
}

class Look extends Family {
    constructor(age, gender, name, surname, father, mother, parentOf, eyeColor, hairColor) {
        super(age, gender, name, surname, father, mother, parentOf);
        Object.assign(this, {
            eyeColor,
            hairColor
        });
    }
}

class Info extends Look {
    constructor(age, gender, name, surname, father, mother, parentOf, eyeColor, hairColor) {
        super(age, gender, name, surname, father, mother, parentOf, eyeColor, hairColor);
    }

    getInfo() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Gender: ${this.gender}, Age: ${this.age}, Eye color: ${this.eyeColor}, Hair color: ${this.hairColor}, Mother: ${this.mother}, Father: ${this.father}, ParentOf: ${this.parentOf}, Child of: ${this.childOf}`);
    }

    getName() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}

// The arrays of family members' info
let familySmith = [
    [75, 'male', 'Jonathan', 'Smith', 'Ian Smith', 'Briony Smith', ['James Smith', 'Jacqueline Smith', 'David Smith'], 'blue', 'brown'],
    [75, 'female', 'Jennifer', 'Smith', 'Robert Evans', 'Daisy Evans', ['James Smith', 'Jacqueline Smith', 'David Smith'], 'hazel', 'blond'],
    [50, 'male', 'James', 'Smith', 'Jonathan Smith', 'Jennifer Smith', ['Jane Smith'], 'blue', 'brown'],
    [50, 'female', 'Janet', 'Smith', 'Frederick Wilson', 'Mariah Wilson', ['Jane Smith'], 'green', 'auburn'],
    [27, 'female', 'Jane', 'Smith', 'James Smith', 'Janet Smith', [], 'green', 'brown'],
    [47, 'female', 'Jacqueline', 'Johnson', 'Jonathan Smith', 'Jennifer Smith', ['William Johnson', 'Mary Johnson'], 'hazel', 'blond'],
    [47, 'male', 'Josh', 'Johnson', 'Zachary Johnson', 'Catherine Johnson', ['William Johnson', 'Mary Johnson'], 'brown', 'brown'],
    [20, 'male', 'William', 'Johnson', 'Josh Johnson', 'Jacqueline Johnson', [], 'brown', 'blond'],
    [17, 'female', 'Mary', 'Johnson', 'Josh Johnson', 'Jacqueline Johnson', [], 'blue', 'brown'],
    [45, 'male', 'David', 'Smith', 'Jonathan Smith', 'Jennifer Smith', ['Harvey Smith', 'Catelyn Smith', 'John Smith'], 'blue', 'brown'],
    [46, 'female', 'Amelia', 'Smith', 'Arthur Bennet', 'Selena Bennet', ['Harvey Smith', 'Catelyn Smith', 'John Smith'], 'blue', 'red'],
    [15, 'male', 'Harvey', 'Smith', 'David Smith', 'Amelia Smith', [], 'blue', 'auburn'],
    [11, 'female', 'Catelyn', 'Smith', 'David Smith', 'Amelia Smith', [], 'blue', 'auburn'],
    [5, 'male', 'John', 'Smith', 'David Smith', 'Amelia Smith', [], 'blue', 'brown']
];

let familyJohnson = [
    [85, 'male', 'Zachary', 'Johnson', 'Daniel Johnson', 'Georgiana Johnson', ['Alexandra Robinson', 'Josh Johnson'], 'brown', 'blond'],
    [83, 'female', 'Catherine', 'Johnson', 'Howard Walker', 'Claire Walker', ['Alexandra Robinson', 'Josh Johnson'], 'blue', 'brown'],
    [56, 'female', 'Alexandra', 'Robinson', 'Zachary Johnson', 'Catherine Johnson', ['Irene Robinson'], 'blue', 'blond'],
    [57, 'male', 'Charles', 'Robinson', 'Simon Robinson', 'Margaret Robinson', ['Irene Robinson'], 'green', 'blond'],
    [30, 'female', 'Irene', 'Robinson', 'Charles Robinson', 'Alexandra Robinson', [], 'grey', 'blond'],
    [47, 'male', 'Josh', 'Johnson', 'Zachary Johnson', 'Catherine Johnson', ['William Johnson', 'Mary Johnson'], 'brown', 'brown'],
    [47, 'female', 'Jacqueline', 'Johnson', 'Jonathan Smith', 'Jennifer Smith', ['William Johnson', 'Mary Johnson'], 'hazel', 'blond'],
    [20, 'male', 'William', 'Johnson', 'Josh Johnson', 'Jacqueline Johnson', [], 'brown', 'blond'],
    [17, 'female', 'Mary', 'Johnson', 'Josh Johnson', 'Jacqueline Johnson', [], 'blue', 'brown'],
];

let familyBrown = [
    [82, 'male', 'Richard', 'Brown', 'David Brown', 'Lana Brown', ['Rosamund Green', 'Narcissa Davies'], 'green', 'blond'],
    [81, 'female', 'Danielle', 'Brown', 'Edward Williams', 'Sophie Williams', ['Rosamund Green', 'Narcissa Davies'], 'hazel', 'blond'],
    [50, 'female', 'Rosamund', 'Green', 'Richard Brown', 'Danielle Brown', ['Charlotte Green'], 'green', 'blond'],
    [51, 'male', 'Wesley', 'Green', 'Garret Green', 'Anita Green', ['Charlotte Green'], 'brown', 'brown'],
    [20, 'female', 'Charlotte', 'Green', 'Wesley Green', 'Rosamund Green', [], 'brown', 'brown'],
    [47, 'female', 'Narcissa', 'Davies', 'Richard Brown', 'Danielle Brown', ['Gilbert Davies'], 'hazel', 'blond'],
    [47, 'male', 'Gabriel', 'Davies', 'Jacob Davies', 'Clare Davies', ['Gilbert Davies'], 'grey', 'blond'],
    [20, 'male', 'Gilbert', 'Davies', 'Gabriel Davies', 'Narcissa Davies', [], 'green', 'blond'],
];

let familyWilson = [
    [90, 'male', 'Frederick', 'Wilson', 'Emmett Wilson', 'Anne Wilson', ['Janet Wilson'], 'green', 'brown'],
    [87, 'female', 'Mariah', 'Wilson', 'Ralph Roberts', 'Marianne Roberts', ['Janet Wilson'], 'brown', 'red'],
    [50, 'female', 'Janet', 'Smith', 'Frederick Wilson', 'Mariah Wilson', ['Jane Smith'], 'green', 'auburn'],
    [50, 'male', 'James', 'Smith', 'Jonathan Smith', 'Jennifer Smith', ['Jane Smith'], 'blue', 'brown'],
    [27, 'female', 'Jane', 'Smith', 'James Smith', 'Janet Smith', [], 'green', 'brown'],
];

let familyBennet = [
    [80, 'male', 'Arthur', 'Bennet', 'Rupert Bennet', 'Clarissa Bennet', ['George Bennet', 'Henry Bennet', 'Amelia Bennet'], 'brown', 'brown'],
    [78, 'female', 'Selena', 'Bennet', 'Matthew Thomas', 'Hannah Thomas', ['George Bennet', 'Henry Bennet', 'Amelia Bennet'], 'blue', 'red'],
    [55, 'male', 'George', 'Bennet', 'Arthur Bennet', 'Selena Bennet', ['Ian Bennet'], 'blue', 'brown'],
    [50, 'female', 'Helena', 'Bennet', 'Thomas Jensen', 'Olivia Jensen', ['Ian Bennet'], 'green', 'brown'],
    [20, 'male', 'Ian', 'Bennet', 'George Bennet', 'Helena Bennet', [], 'green', 'auburn'],
    [49, 'male', 'Henry', 'Bennet', 'George Bennet', 'Selena Bennet', ['Iris Bennet'], 'brown', 'red'],
    [40, 'female', 'Deanna', 'Bennet', 'Theodore Wright', 'Nancy Wright', ['Iris Bennet'], 'brown', 'brown'],
    [15, 'female', 'Iris', 'Bennet', 'Henry Bennet', 'Deanna Bennet', [], 'brown', 'auburn'],
    [13, 'male', 'Ethan', 'Bennet', 'Henry Bennet', 'Deanna Bennet', [], 'brown', 'red'],
    [46, 'female', 'Amelia', 'Smith', 'Arthur Bennet', 'Selena Bennet', ['Harvey Smith', 'Catelyn Smith', 'John Smith'], 'blue', 'red'],
    [45, 'male', 'David', 'Smith', 'Jonathan Smith', 'Jennifer Smith', ['Harvey Smith', 'Catelyn Smith', 'John Smith'], 'blue', 'brown'],
    [15, 'male', 'Harvey', 'Smith', 'David Smith', 'Amelia Smith', [], 'blue', 'auburn'],
    [11, 'female', 'Catelyn', 'Smith', 'David Smith', 'Amelia Smith', [], 'blue', 'auburn'],
    [5, 'male', 'John', 'Smith', 'David Smith', 'Amelia Smith', [], 'blue', 'brown']
];

// Empty arrays for the family members' objects
let familySmithObjects = [];
let familyJohnsonObjects = [];
let familyBrownObjects = [];
let familyWilsonObjects = [];
let familyBennetObjects = [];

// The function which will create objects from the arrays with the family members' info, and push them into a new array of objects
function arrayToObjectsArray(familyArray, familyArrayObjects) {
    // for (let i = 0; i < familyArray.length; i++) {
    //     let person = familyArray[i];
    //     familyArrayObjects.push(new Info(person[0], person[1], person[2], person[3], person[4], person[5], person[6], person[7], person[8]));
    // }
    familyArray.reduce((object, property) => {
        familyArrayObjects.push(new Info(property[0], property[1], property[2], property[3], property[4], property[5], property[6], property[7], property[8]));
        return familyArrayObjects;
    }, {});
}

// Calling the function with the appropriate arguments
arrayToObjectsArray(familySmith, familySmithObjects);
arrayToObjectsArray(familyJohnson, familyJohnsonObjects);
arrayToObjectsArray(familyBrown, familyBrownObjects);
arrayToObjectsArray(familyWilson, familyWilsonObjects);
arrayToObjectsArray(familyBennet, familyBennetObjects);

// The function which fills the family tree with the family members
function fillFamilyTree(familyObjects, familyName) {

    // Emptying the html elements for the family members
    let familyInfo = document.querySelectorAll('.family-members');
    familyInfo.forEach((element, index) => {
        element.childNodes[0].textContent = '';
    });
    // Emptying the html elements for the pop-ups
    let familyPopUps = document.querySelectorAll('.popup');
    familyPopUps.forEach((element, index) => {
        element.textContent = '';
    });
    
    document.getElementById('family-name').childNodes[0].textContent = familyName;

    // Filling the family member html elements with the appropriate names
    familyInfo.forEach((element, index) => {

        if (index < familyObjects.length) {
            if (familyObjects[index].gender == 'female' && familyObjects[index].parentOf.length > 0) {
                element.style.color = 'rgb(145, 34, 52)';
            } else if (familyObjects[index].gender == 'female' && familyObjects[index].parentOf.length == 0) {
                element.style.color = 'rgb(179, 106, 39)';
            } else if (familyObjects[index].gender == 'male' && familyObjects[index].parentOf.length > 0) {
                element.style.color = 'rgb(31, 62, 128)';
            } else if (familyObjects[index].gender == 'male' && familyObjects[index].parentOf.length == 0) {
                element.style.color = 'rgb(27, 107, 63)';
            }
            element.childNodes[0].textContent = familyObjects[index].name;
        }

    });
}

// The function which fills the popups with info on the family member
function fillPopUps(familyObjects, value) {

    let familyPopUps = document.querySelectorAll('.popup');

    // Filling the pop-up with the info on the family member
    familyPopUps[value].innerHTML = `<h3>Name: </h3><p>${familyObjects[value].name}</p><br>
                                    <h3>Surname: </h3><p>${familyObjects[value].surname}</p><br>
                                    <h3>Age: </h3><p>${familyObjects[value].age}</p><br>
                                    <h3>Gender: </h3><p>${familyObjects[value].gender}</p><br>
                                    <h3>Eye color: </h3><p>${familyObjects[value].eyeColor}</p><br>
                                    <h3>Hair color: </h3><p>${familyObjects[value].hairColor}</p><br>
                                    <h3>Mother: </h3><p>${familyObjects[value].mother}</p><br>
                                    <h3>Father: </h3><p>${familyObjects[value].father}</p><br>`;
    
    if (familyObjects[value].parentOf.length > 0) {
        familyPopUps[value].innerHTML += `<h3>Parent of: </h3><p>${familyObjects[value].parentOf.join(', ')}</p><br>`;
    }

    let sameEyeColor = [];
    for (let i = 0; i < familyObjects.length; i++) {
        if (familyObjects[i].eyeColor == familyObjects[value].eyeColor && familyObjects[i].name !== familyObjects[value].name) {
            sameEyeColor.push(familyObjects[i].name);
        }
    }
    familyPopUps[value].innerHTML += `<h3>Same eye color as: </h3><p>${sameEyeColor.join(', ')}</p><br>`;

    let sameHairColor = [];
    for (let i = 0; i < familyObjects.length; i++) {
        if (familyObjects[i].hairColor == familyObjects[value].hairColor && familyObjects[i].name !== familyObjects[value].name) {
            sameHairColor.push(familyObjects[i].name);
        }
    }
    familyPopUps[value].innerHTML += `<h3>Same hair color as: </h3><p>${sameHairColor.join(', ')}</p><br>`;
}

// Event listeners for the family buttons
let familyButtons = document.querySelectorAll('.familyBtn');
familyButtons.forEach((element, index) => {
    element.addEventListener('click', () => {

        let familyName = element.textContent;
        familyName = familyName.replace(/The /i, '');
        familyName = familyName.substring(0, familyName.length - 1);
        
        // calling the function which will fill the family tree with the family chosen with a click on one of the family buttons, according to the family name
        switch (familyName) {
            case 'Smith':
                fillFamilyTree(familySmithObjects, familyName);
                break;
            case 'Johnson':
                fillFamilyTree(familyJohnsonObjects, familyName);
                break;
            case 'Brown':
                fillFamilyTree(familyBrownObjects, familyName);
                break;
            case 'Wilson':
                fillFamilyTree(familyWilsonObjects, familyName);
                break;
            case 'Bennet':
                fillFamilyTree(familyBennetObjects, familyName);
                break;
        }
    });
});

// Event listeners for the pop-ups
let familyMembers = document.querySelectorAll('.family-members');
let popup = document.querySelectorAll('.popup');

familyMembers.forEach((element, index) => {
    element.addEventListener('click', () => {

        // Toggling the .show class on the pop-ups on click on a family member
        popup[index].classList.toggle('show');

        // calling the function which will fill the pop-up with info on the family member clicked
        let familyName = document.getElementById('family-name').textContent;
        switch (familyName) {
            case 'Smith':
                fillPopUps(familySmithObjects, index);
                break;
            case 'Johnson':
                fillPopUps(familyJohnsonObjects, index);
                break;
            case 'Brown':
                fillPopUps(familyBrownObjects, index);
                break;
            case 'Wilson':
                fillPopUps(familyWilsonObjects, index);
                break;
            case 'Bennet':
                fillPopUps(familyBennetObjects, index);
                break;
        }
    });
});