let currentFloor = 0;

function updateLiftPosition() {
    const lift = document.querySelector('.Lift');
    lift.style.transform = `translateY(-${currentFloor * 300}px)`;
}

function lift1() {
    currentFloor = 0;  
    updateLiftPosition();
}

function lift2() {
    currentFloor = 1;  
    updateLiftPosition();
}

function lift3() {
    currentFloor = 1.7;  
    updateLiftPosition();
}
function lift4() {
    currentFloor = 2.5;  
    updateLiftPosition();
}


updateLiftPosition();
