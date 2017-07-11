// @flow

function getName(person: { name: string }): string {
    return person.name;
}


function getNameWithNullCheck(person: ?{ name: string }): ?string {
    if (person) {
        return person.name;
    }
    return null;
}


/* console.log(getName(null));*/
