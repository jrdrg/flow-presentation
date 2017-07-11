// @flow

type HasName = { name: string };

type HasAddress = { street: string, city: string };

type NameAndAddress = HasName & HasAddress;

function formatAddress(person: NameAndAddress): string {
    return `${person.name}, address: ${person.street}, ${person.city}`;
}

console.log(
    formatAddress({
        name: 'John Doe',
        street: '123 123rd Street',
        city: 'New York'
    })
);
