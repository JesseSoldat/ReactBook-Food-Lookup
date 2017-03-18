// We populate this file in the chapter "Unit Testing"
/* eslint-disable no-unused-vars */
import { shallow } from 'enzyme';
import React from 'react';
import FoodSearch from '../src/FoodSearch';

describe('FoodSearch', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<FoodSearch/>
		);
	});

	it('should not display the remove icon', () => {
		expect(
			wrapper.find('.remove.icon').length
		).toBe(0);
	});

	it('should display zero rows', () => {
		expect(
			wrapper.find('tbody tr').length
		).toEqual(0);
	});

	describe('user populates search field', () => {
		const value = 'brocc';

		beforeEach(() => {
			const input = wrapper.find('input').first();
			input.simulate('change', {
				target: {value: value}
			});
		});

		it('should update state property searchValue', () => {
			expect(
				wrapper.state().searchValue
			).toEqual(value);
		});

		it('should display the remove icon', () => {
			expect(
				wrapper.find('.remove.icon').length
			).toBe(1);
		});
	});//user populates search field

});//FoodSearch