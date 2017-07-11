// @flow

function getCurrency(input: { currency: string }) {
    return input.currency;
}

const currency = getCurrency({ amount: 123, currency: 'USD' });
