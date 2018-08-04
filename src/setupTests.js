// The purpose of this file is to configure enzyme
// The filename is important and has to be setupTests
// When Jest begins to run, it is going to look for a file in SRC called setupTests.js and automaticaly executes before any 
// other code is ran
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})