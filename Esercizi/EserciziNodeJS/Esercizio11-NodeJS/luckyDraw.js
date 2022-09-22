function luckyDraw(player) {
    return new Promise((res, rej) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                res(`${player} won a prize in the draw!`);
            } else {
                rej(new Error(`${player} lost the draw`));
            }
        });
    });
}

luckyDraw('Joe')
.then((res) => console.log(res))
.then(() => luckyDraw('Caroline'))
.then((res) => console.log(res))
.then(() => luckyDraw('Sabrina'))
.then((res) => console.log(res))
.catch((rej) => console.log(rej))