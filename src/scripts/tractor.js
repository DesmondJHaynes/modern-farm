import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";



export const plantSeeds = (yearlyPlanArr) => {
  for (const childArr of yearlyPlanArr) {
    for (const seed of childArr) {
      if (seed === "Asparagus") {
        const asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
      } else if (seed === "Potato") {
        const potatoSeed = createPotato();
        addPlant(potatoSeed);
      } else if (seed === "Soybean") {
        const soybeanSeed = createSoybean();
        addPlant(soybeanSeed);
      } else if (seed === "Sunflower") {
        const sunflowerSeed = createSunflower();
        addPlant(sunflowerSeed);
      } else if (seed === "Wheat") {
        const wheatSeed = createWheat();
        addPlant(wheatSeed);
      } else if (seed === "Corn") {
        const cornSeed = createCorn();
        let [corn1,corn2] = cornSeed
        addPlant(corn1)
        addPlant(corn2);
      }
    }
  }

}

// The function must accept the year's planting plan as input
// Figure out how to iterate both the parent array and the child arrays. 
  // (loop through the main array of arrays, using for()
    // and then for each of those smaller arrays, loop through those to access the string values inside). using for()
  
  // So looking at the individual seed of the childArr, set up an if statement to see if seed string equals any of the seeds that we've created modules 

  // for corn, in order to have final array be simple just object, seperate your corn array into 2 seperate objects