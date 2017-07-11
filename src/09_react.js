// @flow

import React from 'react';


type TestProps = {
    name: string
};

const Test = (props: TestProps) =>
    <div>
        testing: {props.name}
    </div>;


export default Test;
