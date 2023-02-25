function betterThanAverage(classPoints, yourPoints) {
    const Average = classPoints.reduce((a, b) => (a + b)) / classPoints.length;
    if(Average < yourPoints) {
        return true;
    } else {
        return false;
    }
}