function deerOfSanta(input) {
    let daysWithoutSanta = Number(input[0]);
    let foodLeftInKilo = Number(input[1]);
    let firstDeerFoodInKilo = Number(input[2]);
    let secondDeerFoodInKilo = Number(input[3]);
    let thirdDeerFoodInKilo = Number(input[4]);

    let neededFoodForFirstDeer = daysWithoutSanta * firstDeerFoodInKilo;
    let neededFoodForSecondDeer = daysWithoutSanta * secondDeerFoodInKilo;
    let neededFoodForThirdDeer = daysWithoutSanta * thirdDeerFoodInKilo;

    let totalNeededFood = neededFoodForFirstDeer + neededFoodForSecondDeer + neededFoodForThirdDeer;

    if (totalNeededFood <= foodLeftInKilo) {
        let foodLeft = foodLeftInKilo - totalNeededFood;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        let neededFood = totalNeededFood - foodLeftInKilo;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }

}
deerOfSanta(['2', '10', '1', '1', '2']);