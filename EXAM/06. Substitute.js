function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let counter = 0;

    for (let firstNumberOf1 = k; firstNumberOf1 <= 8; firstNumberOf1++) {
        if (firstNumberOf1 % 2 === 1) {
            continue;
        }
        for (let secondNumberOf1 = 9; secondNumberOf1 >= l; secondNumberOf1--) {
            if (secondNumberOf1 % 2 === 0) {
                continue;
            }
            for (let firstNumOf2 = m; firstNumOf2 <= 8; firstNumOf2++) {
                if (firstNumOf2 % 2 === 1) {
                    continue;
                }
                for (let secondNumOf2 = 9; secondNumOf2 >= n; secondNumOf2--) {
                    if (secondNumOf2 % 2 === 0) {
                        continue;
                    }
                    if (firstNumberOf1 === firstNumOf2 && secondNumberOf1 === secondNumOf2) {
                        console.log(`Cannot change the same player.`);
                    } else {
                        counter++;
                        console.log(`${firstNumberOf1}${secondNumberOf1} - ${firstNumOf2}${secondNumOf2}`);
                    }
                    if (counter === 6) {
                        return;
                    }
                }
            }
        }
    }
}
substitute(['7', '6', '8', '6']);