function santasHoliday(input) {
    let dayForHoliday = Number(input[0] - 1);
    let roomType = input[1];
    let rating = input[2];

    let price = 0;
    let discount = 0;
    let ratingDiscount = 0;

    let totalDiscount = discount + ratingDiscount;

    if (roomType === 'room for one person') {
        price = 18;
    } else if (roomType === 'apartment') {
        price = 25;
    } else if (roomType === 'president apartment') {
        price = 35;
    }

    let priceForStay = dayForHoliday * price;

    if (dayForHoliday < 10 && roomType === 'apartment') {
        priceForStay *= 0.7;
    } else if (dayForHoliday <= 15 && roomType === 'apartment') {
        priceForStay *= 0.65;
    } else if (dayForHoliday > 15 && roomType === 'apartment') {
        priceForStay *= 0.5;
    } else if (dayForHoliday < 10 && roomType === 'president apartment') {
        priceForStay *= 0.9;
    } else if (dayForHoliday <= 15 && roomType === 'president apartment') {
        priceForStay *= 0.85;
    } else if (dayForHoliday > 15 && roomType === 'president apartment') {
        priceForStay *= 0.8;
    }

    if (rating === 'positive') {
        priceForStay *= 1.25;
    } else if (rating === 'negative') {
        priceForStay *= 0.9;
    }
    console.log(priceForStay.toFixed(2));

}
santasHoliday(['30', 'president apartment', 'negative']);