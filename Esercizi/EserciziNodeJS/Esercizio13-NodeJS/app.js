import express from "express";


const app = express();

function showPlanets() {
    const planets = [{name: "Earth"}, {name:"Venerus"}, {name:"Jupiter"}];

    return planets
}


app.get("/", (req,res) => {
    res.send("This is the planets API");
} );

app.get("/planets", (req,res) => {
    const planets = showPlanets();
    res.json(planets);
});


export default app