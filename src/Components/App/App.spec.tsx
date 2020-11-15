import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from "../Timer/timer";

describe('App', () => {
   
    let container:any

    beforeEach(() => (container = shallow(<App />)))
    //check only one div in App Component
    it('should render a <div />', () => {
        expect(container.find('div').length).toEqual(1);
    });
    //check is Timer Componet in App Component
    it("should render the Timer Component", () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true)
    })
});