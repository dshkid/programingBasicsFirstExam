function excursion(input) {
    let peopleCount = Number(input[0]);
    let nightStayCount = Number(input[1]);
    let transportCardCount = Number(input[2]);
    let ticketCount = Number(input[3]);

    let totalNightStayPrice = nightStayCount * 20;
    let totalTransportCardPrice = transportCardCount * 1.6;
    let totalTicketPrice = ticketCount * 6;

    let allGroupPrice = (totalNightStayPrice + totalTransportCardPrice + totalTicketPrice) * peopleCount;

    let finalPrice = allGroupPrice *= 1.25;

    console.log(finalPrice.toFixed(2));

}
excursion(['131', '9', '33', '46']);