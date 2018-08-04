import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// The before Each function is for code reuse provided by Jest.  Before any test are run the before each function is executed
// Which means that now we can reference wrapped in any test instance.  It is ran before every single test
// We have to define wrapped outside of all the other functions, so that way it can be used globally.  We also define
// wrapped with let because it is going to be reassigned several times throughout this file.
let wrapped;
beforeEach(() =>{
     wrapped = shallow(<App />);
})
// You read the test name as it shows a comment box
// THis code is executed within the environment of the terminal.  JSDOM simulates as browser
it('shows a comment box', () => {
    // JSDOM creates a new div element, it is a fake one though, only exist in memory
    // const div = document.createElement('div');

    // We take our app and render within this fake div, it has no connection to the browser.  This div now has all the HTML
    // rendered by the app component
    // ReactDOM.render(<App />, div);

    // Looks inside the div and checks to see if the comment box exist or any other HTML
    // This is an expectation.  They prove that our code works as the way we intend
    // expect(the subject).matcherStatement(the value we expect it to match or have)
    // In general when testing another components you dont want to test the internal workings instead you want to test
    // just the component itself
    // expect(div.innerHTML).toContain('Comment Box');

    // enzyme is a library made for testing react components a little easier
    // Enzyme api gives us three ways we can render the given component(static, shallow, fulldom)
    // static render is a function that we can pass a component to it and returns an object that contains HTML
    // shallow render test one component but none of its React child components.  This is perfrect for isolating and testing one component
    // Full dom renders the whole component and is lets us interact with the whole dom

    // This just removes the app component from the div
    // ReactDOM.unmountComponentAtNode(div);


    
    // the find method returns an array and returns every instance of comment box in App;
    // When your test passes for the first time, try to make it break, so that it isnt errorenous
    expect(wrapped.find(CommentBox).length).toEqual(1);
});


it('show a comment list', () =>{
   
    expect(wrapped.find(CommentList).length).toEqual(1);
});


