// Given an array of [1, 2, 3, 0, 2], print a map that
// looks like
/*
      +
    + +  +
  + + +  + 
*/


const printElevation = (arr) => {
    // What do I know?
    // Input is an array of ints
    // Highest point will need to print first
    // 0 = ' ' (a space)

    // Question everything?
    
    // DO I need to find the highest point?
    // No, idea A eliminates the need for the highest point.

    // 2 ideas
        // A) Loop through array and create string of characters if the int is >= iteration #
            // Loop through array for m where m = highest point
       // // B) Find the highest point, createa  2d array where inner array count is equal to highest point and translate the ints into the 2d array. Then print that array.
       // //     Sort - O(nlogn) -- space lots of array space needed

    // Iterate through input array starting at 1.
    // If i >= array[i] add a '+' to string
    // Else add a space to string
    // If a string is all spaces then I've reached the highest point and can break out of the loop.

    // I Need...
    // A string to store a row
    // A string to store the entire elevation map
    // A way to break out of the loop (highest point check)

    let iteration = 1;
    let searching = true;
    let elevationStrings = []; // This will be used to print the final result

    while(searching) {
        let elevationString = '';
        let foundMatch = false;
        for(let i = 0; i < arr.length; i++) {
            if(iteration <= arr[i]) {
                elevationString += '+';
                foundMatch = true;
            } else {
                elevationString += ' ';
            }
        }
        if(foundMatch) {
            elevationStrings.push(elevationString)
        } else {
            searching = false;
        }
        iteration++;
    }
    for(let i = elevationStrings.length - 1; i >= 0; i--) {
        console.log(elevationStrings[i])
    }
}

printElevation([1,2,3,0,1])