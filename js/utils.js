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
console.log(getDistance({ 'x': 10, 'y': 10 }, { 'x': 20, 'y': 20 }))

function checkClickPosition(object1, object2) {
    let dist = getDistance(object1, object2);
    return (dist < object2.radius + 10)
}
