// @flow


/*
   Check some basic stuff
*/
const strangeValue = 5 + "hello"; // flow actually allows this but types it as a string

/* const incorrect: number = 5 + "hello"; // this won't work since we want a number*/



/*
   Make sure that an object has the field we're attempting to access
*/
const person = { name: "John" };

/* console.log(person.address);  // this will throw an error*/


// notice the lack of type annotations here
function printName(somebody) {
    console.log(somebody.firstName);
}

/* printName(person); // this will still throw an error even without any annotations - flow is smart!*/


/*
   Make sure we only try to do math with numbers
*/
function square(n) {
    return n * n;
}

/* console.log(square("this is obviously not going to work"));*/


/*
   Check for extra arguments being passed to a function - this can indicate
   incorrect usage
*/
function concatenateName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}

/* console.log(concatenateName("John", "F", "Kennedy")); // too many names*/

/* console.log(concatenateName("Ozzy")); // not enough names!*/
