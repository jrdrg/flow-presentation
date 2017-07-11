// @flow

type Price = {
    amount: number,
    currency: string
};

function getAmount(price: Price): number {
    return price.amount;
}


console.log(getAmount({ amount: 123, currency: 'USD' }));
