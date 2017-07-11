// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import './00_primitives';
import './01_errors';
import './02_maybe';
import './03_objects';
import './04_typealiases';
import './05_uniontypes';
import './06_intersectiontypes';
import './07_anytypes';
import './08_generics';


import Test from './09_react';
import {ButtonsWrapper} from './10_testcoverage';

ReactDOM.render(
    <div>
        <Test
            name={'test'}
            count={1}
        />
        <hr />
        <ButtonsWrapper />
    </div>,
    document.getElementById('app')
);
