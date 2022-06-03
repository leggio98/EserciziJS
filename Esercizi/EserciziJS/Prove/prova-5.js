let hero = "";

let setHero = function (name) {
    hero = name;
}

setHero("Batman");
console.log('Sync', `Hi ${hero}`);

let setHeroAsync = function (name) {
    setTimeout(() => {
        hero = name;
    }, 3000);
}

let asyncPrint = function(name) {
    setTimeout(() => {
        console.log('Async', `Hi ${hero}`)
    }, 3000);
}

setHeroAsync("Superman");
console.log('Async', `Hi ${hero}`);
asyncPrint();

let setHeroAsyncCallback = function (name, surname, callback) {
    setTimeout(() => {
        hero = name;
        hero2 = surname;
        callback();
    } , 3000);
}

setHeroAsyncCallback('Mario', 'draghi', () => console.log(`Hi ${hero} ${hero2}`));