import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';


let wrapped;
// The before each function is run before every other single test
beforeEach(() => {
    wrapped = mount(<CommentBox />);
})
// The purpose of htis method is to some cleanup after every single test.  THis is mandatarory for test that
// use the full dom or mount function.  Unmounts the component from the fake dom that jsDOm creates.
afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a button', () => {
    // To determine if a component has other elements in the components you just have to do find('nameOfElement')
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});
// Describe is used to group functinality that test share. It can also be used ot limit the beforeEach Function
describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })
    
    it('has a text area that users can type in', () => {
        // we are simulating the real html event not onChange, which is an event handler that is called when a change
        // The second arguement is an object that gets merged with the real event object

        // After we have faked an event change, the next thing we want to do is force the component ot rerender
        // The issue with this is that setState() is asynchronous, and is not going to re-render automicatally

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });


    it('when form is submitted, text area gets emptied', () => {

        // 4. Cause a onSumbit event for the form
        wrapped.find('form').simulate('submit');

        // 5. Force the component to re-render
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
});


