function getRole() {
    var role = $('#numInput1').val();
    var menu = document.getElementById('menu');

    function schoolSchedule() {
        let listItem = document.createElement('li');
        let textNode = document.createTextNode('School Schedule');
        listItem.appendChild(textNode);
        menu.appendChild(listItem);
    }

    function grades() {
        let listItem = document.createElement('li');
        let textNode = document.createTextNode('Grades');
        listItem.appendChild(textNode);
        menu.appendChild(listItem);
    }

    function students() {
        let listItem = document.createElement('li');
        let textNode = document.createTextNode('Students');
        listItem.appendChild(textNode);
        menu.appendChild(listItem);
    }

    if (role == 'student' || role == 'Student') {
        menu.innerText = '';
        grades();
        schoolSchedule();
    } else if (role == 'administrator' || role == 'Administrator' || role == 'admin' || role == 'Admin' || role == 'professor' || role == 'Professor') {
        menu.innerText = '';
        students();
        grades();
        schoolSchedule();
    } else if (role == 'receptionist' || role == 'Receptionist') {
        menu.innerText = '';
        schoolSchedule();
    } else {
        menu.innerText = '';
        document.getElementById('result').innerHTML = 'To access your profile\'s menu, <br> please tell us your role at our school.';
    }
}



$('#sbtbtn1').click(function (e) {
    e.preventDefault();
    getRole();
});

$('#numInput1').keydown(function (e) {
    if (e.which == 13) {
        $('#sbtbtn1').click();
        return false;
    }
});