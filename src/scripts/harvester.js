

export const harvestPlants = (plantsArr) => {
  let arrOfSeeds = [];
  for (const plantobj of plantsArr) {
    if (plantobj.type === "Corn") {
        for (let counter = 0; counter < (plantobj.output/2); counter++) {
          arrOfSeeds.push(plantobj);
      }
    } else {
      for (let counter = 0; counter < plantobj.output; counter++) {
        arrOfSeeds.push(plantobj);
      }
    }
  }
  console.log(arrOfSeeds);
  return arrOfSeeds
}


// The harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. 
    // On each plant, get the value of the output property. .output
    // use the .ouput value as a number to define how many how many of the taken in object will be added to the arrofseeds. (master)
        //iterate thorugh the objects. create another loop at each object, (counter = 0, counter less than obj.outpt, counter++) (for each loop push object to arrofseeds)

    
    // current issue: you only want have of corn, so we'll have to figure out how to split that.
        // if object.type --- corn (aka if the corn object occurs)
          // perform master function code on resulting objects only with the outpt being halved
