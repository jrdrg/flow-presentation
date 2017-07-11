// @flow

/*******************************************
   A basic example
 */
type Input = string | number;


function stringifyInput(input: Input): string {
    return input.toString();
}


console.log(stringifyInput(1));
console.log(stringifyInput("1"));
/* console.log(stringifyInput({ input: 123 }));*/  // wrong!



/*******************************************
   Let's make an enum
 */
type Order = 'first' | 'second' | 'third';

function orderToNumber(order: Order): number {
    switch (order) {
        case 'first':
            return 1;
        case 'second':
            return 2;
        case 'third':
            return 3;
    }
    return 0;
}



/*******************************************
   A more complicated example
 */
type Action =
    { type: 'CHANGE_TEXT', text: string } |
    { type: 'SHOW_MODAL', isVisible: boolean } |
    { type: 'BEGIN_SAVE', errorCount: number };


function handleAction(action: Action): void {
    switch (action.type) {
        case 'CHANGE_TEXT': {
            console.log(action.text);
            return;
        }

        case 'SHOW_MODAL': {
            console.log(action.isVisible);
            return;
        }

        case 'BEGIN_SAVE': {
            console.log(action.errorCount);
            return;
        }
    }
}
