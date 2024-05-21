function hairSalon(input) {
    let dayTarget = Number(input[0]);

    let targetPerDay = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'closed') {
        let type = command;
        command = input[index];
        index++;
        let type2 = command;
        if (type === 'haircut') {
            switch (type2) {
                case 'mens': targetPerDay += 15; break;
                case 'ladies': targetPerDay += 20; break;
                case 'kids': targetPerDay += 10; break;
            }
        } else if (type === 'color') {
            switch (type2) {
                case 'touch up': targetPerDay += 20; break;
                case 'full color': targetPerDay += 30; break;
            }
        }
        command = input[index];
        index++
        if (targetPerDay >= dayTarget) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${targetPerDay}lv.`);
            break;
        }
    }
    if (command === 'closed') {
        let moneyNeeded = dayTarget - targetPerDay;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        console.log(`Earned money: ${targetPerDay}lv.`);
    }
}
hairSalon(['50', 'color', 'full color', 'haircut', 'ladies']);
