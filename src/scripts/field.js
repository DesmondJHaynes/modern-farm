let plantsInField = [];

/*
 funtion purpose to add the seed to the field
 so whatever seedObj that is passed through the function needs to be added to the plants in field arr.
    //arr.push(seed object)
    // in this case arr is plantsInField
 */

export const addPlant = (seedObj) => {
  plantsInField.push(seedObj);
}

export const usePlants = () => {
  let arrCopy = plantsInField;

  return arrCopy;
}




