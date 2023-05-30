import { catalog } from "./catalog.js";
import { addPlant, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan);

plantSeeds(yearlyPlan);
const usePlantsTest = usePlants();
console.log(usePlantsTest);

const arrofseeds = harvestPlants(usePlantsTest)
// console.log(arrofseeds);

document.querySelector(".container").innerHTML = catalog(arrofseeds);