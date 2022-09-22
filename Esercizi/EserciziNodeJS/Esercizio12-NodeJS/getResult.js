function luckyDraw(player) {
    return new Promise ((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error (`${player} lost the draw.`));
            }
        });
    });
}

const getResult = async() => {
    try {
        const draw = await Promise.any([
            await luckyDraw("Tina"),
            await luckyDraw("Jorge"),
            await luckyDraw("Julien")
        ]);

        console.log("Results:", draw);
    } catch (error) {
        console.log(error);
    }
};

getResult()