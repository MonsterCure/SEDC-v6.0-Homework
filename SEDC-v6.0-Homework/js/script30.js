/*---------------GLOBAL VARIABLES/DOM ELEMENTS---------------*/
let changeStateBtn = document.querySelectorAll('.changeStateBtn');
let changeCurrentlyBtn = document.querySelectorAll('.changeCurrentlyBtn');
let changeLineBtn = document.querySelectorAll('.changeLineBtn');
let changeAvailableSeatsBtn = document.querySelectorAll('.changeAvailableSeatsBtn');

/*---------------THE MAIN BUS OBJECT CONSTRUCTOR---------------*/
function Bus(type, color, numberOfTires, passengers) {
    this.type = type || 'double-decker';
    this.color = color || 'red';
    this.numberOfTires = numberOfTires || 6;
    this.passengers = passengers || 52;

    this.isWorking = false;
    this.isMoving = false;
}

/*---------------THE CUSTOM BUS CONSTRUCTOR---------------*/
function CustomBus(type, color, numberOfTires, passengers, availableSeatsCounter, line) {
    this._super(type, color, numberOfTires, passengers);
    this.availableSeatsCounter = availableSeatsCounter || 0;
    this.line = line || parseFloat(Math.random() * 100).toFixed(0);
}

/*--------CONNECTING THE CUSTOM BUS CONSTRUCTOR TO THE BUS ONE--------*/
CustomBus.prototype = Object.create(Bus.prototype);
CustomBus.prototype.constructor = CustomBus;
CustomBus.prototype._super = Bus;

/*--------------ADDING A GET COLOR METHOD TO CUSTOM BUS---------------*/
CustomBus.prototype.getColor = function (value) {
    let colorElement = document.getElementById(`${value}_name`);
    colorElement.style.color = this.color;
}

/*---------------ADDING A GET TYPE METHOD TO CUSTOM BUS---------------*/
CustomBus.prototype.getType = function (value) {
    let typeSpan = document.getElementById(`${value}_type`);
    typeSpan.textContent = this.type;
}

/*---------ADDING A GET NUMBER OF TIRES METHOD TO CUSTOM BUS----------*/
CustomBus.prototype.getNumberOfTires = function (value) {
    let tiresSpan = document.getElementById(`${value}_NoT`);
    tiresSpan.textContent = this.numberOfTires;
}

/*-------ADDING A GET PASSENGERS CAPACITY METHOD TO CUSTOM BUS--------*/
CustomBus.prototype.getPassengersCapacity = function (value) {
    let passengersSpan = document.getElementById(`${value}_passengers`);
    passengersSpan.textContent = this.passengers;
}

/*------------ADDING A GET IS WORKING METHOD TO CUSTOM BUS------------*/
CustomBus.prototype.getIsWorking = function (value) {
    let stateSpan = document.getElementById(`${value}_state`);
    this.isWorking ? stateSpan.textContent = 'in working condition' : stateSpan.textContent = 'broken';
}

/*------------ADDING A GET IS MOVING METHOD TO CUSTOM BUS-------------*/
CustomBus.prototype.getIsMoving = function (value) {
    let currentlySpan = document.getElementById(`${value}_currently`);
    this.isMoving && this.isWorking ? currentlySpan.textContent = 'in circulation' : currentlySpan.textContent = 'at the bus garage';
}

/*---------------ADDING A GET LINE METHOD TO CUSTOM BUS---------------*/
CustomBus.prototype.getLine = function (value) {
    let lineSpan = document.getElementById(`${value}_line`);
    lineSpan.textContent = this.line;
}

/*-------ADDING A GET AVAILABLE SEATS METHOD TO CUSTOM BUS--------*/
CustomBus.prototype.getAvailableSeats = function (value) {
    let seatsSpan = document.getElementById(`${value}_seats`);
    seatsSpan.textContent = this.availableSeatsCounter;
}

/*-------ADDING A CHANGE WORKING STATE METHOD TO CUSTOM BUS--------*/
CustomBus.prototype.changeIsWorking = function (value) {
    let stateSpan = document.getElementById(`${value}_state`);
    let currentlySpan = document.getElementById(`${value}_currently`);
    this.isWorking ? (this.isWorking = false, stateSpan.textContent = 'broken', currentlySpan.textContent = 'at the bus garage') : (this.isWorking = true, stateSpan.textContent = 'in working condition');
}

/*-------ADDING A CHANGE MOVING STATE METHOD TO CUSTOM BUS--------*/
CustomBus.prototype.changeIsMoving = function (value) {
    let currentlySpan = document.getElementById(`${value}_currently`);
    this.isMoving ? (this.isMoving = false, currentlySpan.textContent = 'at the bus garage') : this.isWorking ? (this.isMoving = true, currentlySpan.textContent = 'in circulation') : this.isMoving;
}

// Creating 6 buses/instances of the CustomBus class
let bus1 = new CustomBus('single-decker', 'rgb(179, 176, 38)', 6, 52, 15, 13);
let bus2 = new CustomBus('double-decker', 'rgb(180, 33, 33)', 6, 132, 75, 17);
let bus3 = new CustomBus('articulated', 'rgb(48, 95, 42)', 8, 92, 45, 5);
let bus4 = new CustomBus('single-decker', 'rgb(44, 117, 167)', 6, 52, 32, 8);
let bus5 = new CustomBus('double-decker', 'rgb(180, 128, 50)', 8, 132, 85, 23);
let bus6 = new CustomBus('articulated', 'rgb(104, 68, 163)', 8, 102, 35, 16);

// Creating an array of the 6 buses/instances of the CustomBus class
let busObjects = [bus1, bus2, bus3, bus4, bus5, bus6];

/*----FILLING IN THE INFO ON THE BUSES IN THE HTML ON WINDOW LOAD-----*/
window.onload = function () {
    for (let i = 0; i < busObjects.length; i++) {
        busObjects[i].getColor(`bus${i + 1}`);
        busObjects[i].getType(`bus${i + 1}`);
        busObjects[i].getNumberOfTires(`bus${i + 1}`);
        busObjects[i].getPassengersCapacity(`bus${i + 1}`);
        busObjects[i].getIsWorking(`bus${i + 1}`);
        busObjects[i].getIsMoving(`bus${i + 1}`);
        busObjects[i].getLine(`bus${i + 1}`);
        busObjects[i].getAvailableSeats(`bus${i + 1}`);
    }
}

/*-----------EVENT LISTENER FOR THE CHANGE STATE BUTTONS------------*/
changeStateBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;

        for (let i = 0; i < busObjects.length; i++) {
            // Checking which changeStateBtn had been clicked, acc. to the html heading with the name of the bus, and calling the changeIsWorking methods for the buses accordingly
            if (busName[4] == i + 1) {
                busObjects[i].changeIsWorking(`bus${i + 1}`);
            }
        }
    });
});

/*--------EVENT LISTENER FOR THE CHANGE MOVING STATE BUTTONS---------*/
changeCurrentlyBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;

        for (let i = 0; i < busObjects.length; i++) {
            // Checking which changeCurrentlyBtn had been clicked, acc. to the html heading with the name of the bus, and calling the changeIsMoving methods for the buses accordingly
            if (busName[4] == i + 1) {
                busObjects[i].changeIsMoving(`bus${i + 1}`);
            }
        }
    });
});

/*------------EVENT LISTENER FOR THE CHANGE LINE BUTTONS-------------*/
changeLineBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;

        // A function to change the DOM to add input fields and save button, and save the newly input value
        function addInput(value) {
            let lineSpan = document.getElementById(`bus${value}_line`);
            lineSpan.innerHTML = `<input type="text" id="bus${value}_line_input">`;
            element.style.visibility = 'hidden';
            let saveLineBtn = document.createElement('button');
            saveLineBtn.textContent = 'Save';
            element.parentNode.insertBefore(saveLineBtn, element.nextSibling);

            // An event listener for the newly created save button
            saveLineBtn.addEventListener('click', (e) => {
                let lineSpanValue = document.getElementById(`bus${value}_line_input`).value;

                let objectName = `bus${value}`;

                // Validation for the line number
                if (lineSpanValue > 0 && lineSpanValue <= 95) {
                    lineSpan.textContent = lineSpanValue;
                } else {
                    alert(`Please input a number between 0 and 95.`);
                    lineSpan.textContent = busObjects[value - 1].line;
                }

                element.style.visibility = 'visible';
                saveLineBtn.parentNode.removeChild(saveLineBtn);
            });
        }

        for (let i = 0; i < busObjects.length; i++) {
            // Checking which changeLineBtn had been clicked, acc. to the html heading with the name of the bus, and calling the addInput function with the suitable argument value
            if (busName[4] == i + 1) {
                addInput(i + 1);
            }
        }
    });
});

/*-------EVENT LISTENER FOR THE CHANGE AVAILABLE SEATS BUTTONS--------*/
changeAvailableSeatsBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;

        // A function to change the DOM to add input fields and save button, and save the newly input value        
        function addInput(value) {
            let seatsSpan = document.getElementById(`bus${value}_seats`);
            seatsSpan.innerHTML = `<input type="text" id="bus${value}_seats_input">`;
            element.style.visibility = 'hidden';
            let saveSeatsBtn = document.createElement('button');
            saveSeatsBtn.textContent = 'Save';
            element.parentNode.insertBefore(saveSeatsBtn, element.nextSibling);

            // An event listener for the newly created save button     
            saveSeatsBtn.addEventListener('click', (e) => {
                let seatsSpanValue = document.getElementById(`bus${value}_seats_input`).value;

                let objectName = `bus${value}`;

                // Validation for the number of available seats
                if (seatsSpanValue > 0 && seatsSpanValue <= busObjects[value - 1].passengers) {
                    seatsSpan.textContent = seatsSpanValue;
                } else {
                    alert(`Please input a number less than ${busObjects[value - 1].passengers}.`);
                    seatsSpan.textContent = busObjects[value - 1].availableSeatsCounter;
                }

                element.style.visibility = 'visible';
                saveSeatsBtn.parentNode.removeChild(saveSeatsBtn);
            });
        }

        for (let i = 0; i < busObjects.length; i++) {
            // Checking which changeAvailableSeatsBtn had been clicked, acc. to the html heading with the name of the bus, and calling the addInput function with the suitable argument value
            if (busName[4] == i + 1) {
                addInput(i + 1);
            }
        }
    });
});