let changeStateBtn = document.querySelectorAll('.changeStateBtn');
let changeCurrentlyBtn = document.querySelectorAll('.changeCurrentlyBtn');
let changeLineBtn = document.querySelectorAll('.changeLineBtn');
let changeAvailableSeatsBtn = document.querySelectorAll('.changeAvailableSeatsBtn');

function Bus(type, color, numberOfTires, passengers) {
    this.type = type || 'double-decker';
    this.color = color || 'red';
    this.numberOfTires = numberOfTires || 6;
    this.passengers = passengers || 52;

    this.isWorking = false;
    this.isMoving = false;
}

function CustomBus(type, color, numberOfTires, passengers, availableSeatsCounter, line) {
    this._super(type, color, numberOfTires, passengers);
    this.availableSeatsCounter = availableSeatsCounter || 0;
    this.line = line || parseFloat(Math.random() * 100).toFixed(0);
}

CustomBus.prototype = Object.create(Bus.prototype);
CustomBus.prototype.constructor = CustomBus;
CustomBus.prototype._super = Bus;

CustomBus.prototype.getColor = function (value) {
    let colorElement = document.getElementById(`${value}_name`);
    colorElement.style.color = this.color;
}

CustomBus.prototype.getType = function (value) {
    let typeSpan = document.getElementById(`${value}_type`);
    typeSpan.textContent = this.type;
}

CustomBus.prototype.getNumberOfTires = function (value) {
    let tiresSpan = document.getElementById(`${value}_NoT`);
    tiresSpan.textContent = this.numberOfTires;
}

CustomBus.prototype.getPassengersCapacity = function (value) {
    let passengersSpan = document.getElementById(`${value}_passengers`);
    passengersSpan.textContent = this.passengers;
}

CustomBus.prototype.getIsWorking = function (value) {
    let stateSpan = document.getElementById(`${value}_state`);
    if (this.isWorking) {
        stateSpan.textContent = 'in working condition';
    } else {
        stateSpan.textContent = 'broken';
    }
}

CustomBus.prototype.getIsMoving = function (value) {
    let currentlySpan = document.getElementById(`${value}_currently`);
    if (this.isMoving) {
        currentlySpan.textContent = 'in circulation';
    } else {
        currentlySpan.textContent = 'at the bus garage';
    }
}

CustomBus.prototype.getLine = function (value) {
    let lineSpan = document.getElementById(`${value}_line`);
    lineSpan.textContent = this.line;
}

CustomBus.prototype.getAvailableSeats = function (value) {
    let seatsSpan = document.getElementById(`${value}_seats`);
    seatsSpan.textContent = this.availableSeatsCounter;
}

CustomBus.prototype.changeIsWorking = function (value) {
    let stateSpan = document.getElementById(`${value}_state`);
    if (this.isWorking) {
        this.isWorking = false;
        stateSpan.textContent = 'broken';
    } else {
        this.isWorking = true;
        stateSpan.textContent = 'in working condition';
    }
    return this.isWorking;
}

CustomBus.prototype.changeIsMoving = function (value) {
    let currentlySpan = document.getElementById(`${value}_currently`);
    if (this.isMoving) {
        this.isMoving = false;
        currentlySpan.textContent = 'at the bus garage';
    } else {
        this.isMoving = true;
        currentlySpan.textContent = 'in circulation';
    }
    return this.isMoving;
}

let bus1 = new CustomBus('single-decker', 'rgb(179, 176, 38)', 6, 52, 15, 13);
let bus2 = new CustomBus('double-decker', 'rgb(180, 33, 33)', 6, 132, 75, 17);
let bus3 = new CustomBus('articulated', 'rgb(48, 95, 42)', 8, 92, 45, 5);
let bus4 = new CustomBus('single-decker', 'rgb(44, 117, 167)', 6, 52, 32, 8);
let bus5 = new CustomBus('double-decker', 'rgb(180, 128, 50)', 8, 132, 85, 23);
let bus6 = new CustomBus('articulated', 'rgb(104, 68, 163)', 8, 102, 35, 16);

window.onload = function () {
    bus1.getColor('bus1');
    bus1.getType('bus1');
    bus1.getNumberOfTires('bus1');
    bus1.getPassengersCapacity('bus1');
    bus1.getIsWorking('bus1');
    bus1.getIsMoving('bus1');
    bus1.getLine('bus1');
    bus1.getAvailableSeats('bus1');

    bus2.getColor('bus2');
    bus2.getType('bus2');
    bus2.getNumberOfTires('bus2');
    bus2.getPassengersCapacity('bus2');
    bus2.getIsWorking('bus2');
    bus2.getIsMoving('bus2');
    bus2.getLine('bus2');
    bus2.getAvailableSeats('bus2');

    bus3.getColor('bus3');
    bus3.getType('bus3');
    bus3.getNumberOfTires('bus3');
    bus3.getPassengersCapacity('bus3');
    bus3.getIsWorking('bus3');
    bus3.getIsMoving('bus3');
    bus3.getLine('bus3');
    bus3.getAvailableSeats('bus3');

    bus4.getColor('bus4');
    bus4.getType('bus4');
    bus4.getNumberOfTires('bus4');
    bus4.getPassengersCapacity('bus4');
    bus4.getIsWorking('bus4');
    bus4.getIsMoving('bus4');
    bus4.getLine('bus4');
    bus4.getAvailableSeats('bus4');

    bus5.getColor('bus5');
    bus5.getType('bus5');
    bus5.getNumberOfTires('bus5');
    bus5.getPassengersCapacity('bus5');
    bus5.getIsWorking('bus5');
    bus5.getIsMoving('bus5');
    bus5.getLine('bus5');
    bus5.getAvailableSeats('bus5');

    bus6.getColor('bus6');
    bus6.getType('bus6');
    bus6.getNumberOfTires('bus6');
    bus6.getPassengersCapacity('bus6');
    bus6.getIsWorking('bus6');
    bus6.getIsMoving('bus6');
    bus6.getLine('bus6');
    bus6.getAvailableSeats('bus6');
}

changeStateBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;
        switch (busName) {
            case 'Bus 1':
                bus1.changeIsWorking('bus1');
                break;
            case 'Bus 2':
                bus2.changeIsWorking('bus2');
                break;
            case 'Bus 3':
                bus3.changeIsWorking('bus3');
                break;
            case 'Bus 4':
                bus4.changeIsWorking('bus4');
                break;
            case 'Bus 5':
                bus5.changeIsWorking('bus5');
                break;
            case 'Bus 6':
                bus6.changeIsWorking('bus6');
                break;
        }
    });
});

changeCurrentlyBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;
        switch (busName) {
            case 'Bus 1':
                bus1.changeIsMoving('bus1');
                break;
            case 'Bus 2':
                bus2.changeIsMoving('bus2');
                break;
            case 'Bus 3':
                bus3.changeIsMoving('bus3');
                break;
            case 'Bus 4':
                bus4.changeIsMoving('bus4');
                break;
            case 'Bus 5':
                bus5.changeIsMoving('bus5');
                break;
            case 'Bus 6':
                bus6.changeIsMoving('bus6');
                break;
        }
    });
});

changeLineBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;

        function addInput(value) {
            let lineSpan = document.getElementById(`bus${value}_line`);
            lineSpan.innerHTML = `<input type="text" id="bus${value}_line_input">`;
            element.style.visibility = 'hidden';
            let saveLineBtn = document.createElement('button');
            saveLineBtn.textContent = 'Save';
            element.parentNode.insertBefore(saveLineBtn, element.nextSibling);
            
            saveLineBtn.addEventListener('click', (e) => {
                let lineSpanValue = document.getElementById(`bus${value}_line_input`).value;
                lineSpan.innerHTML = lineSpanValue;
                element.style.visibility = 'visible';
                saveLineBtn.parentNode.removeChild(saveLineBtn);
            });
        }

        switch (busName) {
            case 'Bus 1':
                addInput(1);
                break;
            case 'Bus 2':
                addInput(2);
                break;
            case 'Bus 3':
                addInput(3);
                break;
            case 'Bus 4':
                addInput(4);
                break;
            case 'Bus 5':
                addInput(5);
                break;
            case 'Bus 6':
                addInput(6);
                break;
        }
    });
});

changeAvailableSeatsBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let busName = element.parentNode.children[0].textContent;

        function addInput(value) {
            let seatsSpan = document.getElementById(`bus${value}_seats`);
            seatsSpan.innerHTML = `<input type="text" id="bus${value}_seats_input">`;            
            element.style.visibility = 'hidden';
            let saveSeatsBtn = document.createElement('button');
            saveSeatsBtn.textContent = 'Save';
            element.parentNode.insertBefore(saveSeatsBtn, element.nextSibling);

            saveSeatsBtn.addEventListener('click', (e) => {
                let seatsSpanValue = document.getElementById(`bus${value}_seats_input`).value;
                seatsSpan.innerHTML = seatsSpanValue;
                element.style.visibility = 'visible';
                saveSeatsBtn.parentNode.removeChild(saveSeatsBtn);
            });
        }

        switch (busName) {
            case 'Bus 1':
                addInput(1);
                break;
            case 'Bus 2':
                addInput(2);
                break;
            case 'Bus 3':
                addInput(3);
                break;
            case 'Bus 4':
                addInput(4);
                break;
            case 'Bus 5':
                addInput(5);
                break;
            case 'Bus 6':
                addInput(6);
                break;
        }
    });
});