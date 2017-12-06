import moment from 'moment';

import * as Util from '../util';

describe('Util', () => {
	describe('isDateOrRange', () => {
		it('should return true if the value is a date or a range', () => {
			const values = [
				moment(0),
				{
					end: moment(200000),
					start: moment(0)
				},
				{
					end: null,
					start: moment(0)
				},
				{
					end: null,
					start: null
				},
				null,
				undefined
			];

			values.forEach(value =>
				expect(Util.isDateOrRange(value)).toBe(true)
			);
		});

		it('should return false if the value is not a date or range', () => {
			const values = [
				23,
				'January 23rd',
				{
					end: moment(200000),
					startz: moment(0)
				}
			];

			values.forEach(value =>
				expect(Util.isDateOrRange(value)).toBe(false)
			);
		});
	});

	describe('isInRange', () => {
		it('should return true if the date is in the range', () => {
			expect(
				Util.isInRange(
					{
						end: moment(0).add(3, 'days'),
						start: moment(0)
					},
					moment(0).add(1, 'days')
				)
			).toBe(true);
		});

		it('should return false if the date is not in the range', () => {
			expect(
				Util.isInRange(
					{
						end: moment(0).add(3, 'days'),
						start: moment(0)
					},
					moment(0).add(10, 'days')
				)
			).toBe(false);

			expect(
				Util.isInRange(
					{
						end: moment(0).add(3, 'days'),
						start: moment(0)
					},
					moment(0)
				)
			).toBe(false);
		});
	});

	describe('isRange', () => {
		it('should return true if the value is a range object', () => {
			expect(
				Util.isRange({
					end: moment(200000),
					start: moment(0)
				})
			).toBe(true);
		});
	});

	describe('updateRange', () => {
		it('should update an empty range object with a new value', () => {
			expect(
				Util.updateRange({end: null, start: null}, moment(0))
			).toMatchObject({
				end: null,
				start: expect.anything()
			});
		});

		it('should update a half range object with an end', () => {
			expect(
				Util.updateRange({end: null, start: moment(0)}, moment(23))
			).toMatchObject({
				end: expect.anything(),
				start: expect.anything()
			});
		});

		it('should set the new start of the range', () => {
			const newRange = Util.updateRange(
				{end: moment(200), start: moment(100)},
				moment(50)
			);

			expect(newRange.end).toBe(null);
			expect(newRange.start.milliseconds()).toBe(50);
		});

		it('should swap the start to end if the new end is before', () => {
			const newRange = Util.updateRange(
				{end: null, start: moment(100)},
				moment(50)
			);

			expect(newRange.start.milliseconds()).toBe(50);
			expect(newRange.end.milliseconds()).toBe(100);
		});
	});
});