function getRandom(min, max) {
    let random = Math.random() * (max - min) + min;

    return random;
}

function getRandomPositiveOrNegative() {
    return Math.round(Math.random()) * 2 - 1;
}

function getDistance(object1, object2) {
    let dist = Math.sqrt(Math.pow(object1.x - object2.x, 2) + Math.pow(object1.y - object2.y, 2));

    return dist;
}

function checkClickPosition(object1, object2) {
    let dist = getDistance(object1, object2);
    return (dist < object2.radius + 10)
}

function getDirection(dx, dy){
    return Math.floor(Math.atan2(dx, dy) * 360);
}

console.log(getDirection(1,1));