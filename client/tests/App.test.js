import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('initializes selectedFoods to a blank array', () => {
    expect(
      wrapper.state().selectedFoods
    ).toEqual([]);
  });





});//describe App

