import {writeFile} from "node:fs";

writeFile("message.txt", "I'm a new file!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
})