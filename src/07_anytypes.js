// @flow

/*
   if we remove the 'any' types here, then type checking works again
*/
const a: any = "B";
const b: number = a + 1;
const c: any = b;

// Obviously, d is not an Object
const d: Object = c;

// Object is almost as bad - no null check enforced here!
/* const e = d.thisPropDoesNotExist.thisNestedAccessShouldFail;*/



/*
   Always make sure to cast service responses or other outside
   library calls to a concrete type, don't leave them as any!
*/
function mockServiceResponse(): any { // because service responses are untyped
    return { amount: 123, currency: 'USD' };
}


function doubleAmount(amount: number) {
    return amount * 2;
}


const response = mockServiceResponse();

// response is 'any', otherwise this would fail!
console.log(doubleAmount(response));
