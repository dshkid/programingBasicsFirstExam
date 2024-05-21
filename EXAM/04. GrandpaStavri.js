function grandpaStavri(input) {
    let days = Number(input[0]);

    let totalRakiaQty = 0;
    let totalDegree = 0;

    for (let i = 1; i <= days; i++) {

        let rakiaQty = Number(input[i]);
        let degree = Number(input[i]);

        totalRakiaQty += rakiaQty;
        totalDegree += degree * rakiaQty;
    }

    let finalDegree = totalDegree / totalRakiaQty;
    console.log(`Liter: ${totalRakiaQty.toFixed(2)}`);
    console.log(`Degrees: ${finalDegree.toFixed(2)}`);
    if (finalDegree < 38) {
        console.log(`Not good, you should baking!`);
    } else if (finalDegree <= 42) {
        console.log(`Super!`);
    } else if (finalDegree > 42) {
        console.log(`Dilution with distilled water!`);
    }
}
grandpaStavri(['3', '100', '45', '50', '55', '150', '36']);