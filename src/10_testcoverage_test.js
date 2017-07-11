import React from 'react';
import {Buttons, ButtonsWrapper} from './10_testcoverage';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('100% test coverage!!! woohoo!', () => {

    it('should render Buttons in the ButtonWrapper', () => {
        const shallowRenderer = new ShallowRenderer();
        shallowRenderer.render(<ButtonsWrapper />);
        const wrapper = shallowRenderer.getRenderOutput();

        expect(wrapper).toMatchSnapshot();
    });


    it('should call onClick', () => {
        let incremented = null;

        const onClick = value => {
            incremented = value;
        };

        const value = { amount: 1 };
        const shallowRenderer = new ShallowRenderer();
        shallowRenderer.render(
            <Buttons
                value={value}
                incrementValue={onClick}
            />
        );
        const buttons = shallowRenderer.getRenderOutput();
        const buttonOnClick = buttons.props.children.props.onClick;

        buttonOnClick();

        expect(incremented).toBe(2);
    });
});
