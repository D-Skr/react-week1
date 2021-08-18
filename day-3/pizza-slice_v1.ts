/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
​
 */
function drawSmallPizzaSlice(): void {
    console.log(" _ ");
    console.log(" |_| ");
}
​
/**
 * Draw a length 1 width 2 pizza slice 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
 */
​
function drawMediumPizzaSlice(): void {
    console.log(" __ ");
    console.log(" |__| ");
}
​
/**
 * 
 * Draws a length 2 width 2 pizza slice 
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
​
 */
function drawLargePizzaSlice(): void {
    console.log(" __ ");
    console.log(" | .| ")
    console.log(" |__| ");
}
​
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 * 
 * Small - Length 1 width 1:
   -
  |_|
​
 * 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
​
 * 
 * Large - Length 2 width 2:
 * 
  
   --
  | .|
  |__|
​
 */
function drawAnyPizzaSlice(length : number, width: number): string {
    if(length == 1 && width == 1):
        return drawMediumPizzaSlice();
    else if (length == 1 && width == 2):
        return drawSmallPizzaSlice();
    else if (length == 2 && width == 2):
        return drawLargePizzaSlice();
    else: console.log("Please enter valid value: 1 or 2")
}
​
console.log(drawAnyPizzaSlice(2,2))
//console.log(drawSmallPizzaSlice());
// console.log(drawMediumPizzaSlice());
// console.log(drawLargePizzaSlice());
// console.log(drawAnyPizzaSlice());