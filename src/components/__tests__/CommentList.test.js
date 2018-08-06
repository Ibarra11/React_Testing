import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../../components/CommentList';
// Whenever you are testing a component hooked up to redxu you also need to hook up the redux in your testing environment
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    // We create inital state for the component
    const initialState = {
        comments: ['Comment1', 'Comment2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
})

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () =>{
    console.log(wrapped.find('li').forEach(node =>{
        console.log(node);
    }))
})

// Whenever you are using mount enzyme method you have to unmount it because it attaches itself to dom and cause
// issue with other tests.

afterEach(() => {
    wrapped.unmount();
})