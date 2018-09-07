/* eslint-env jest */

import { getSafePercent, getStepPosition } from '.';

describe('getSafePercent', () => {
  it('should returns 0 if value is negative', () => {
    expect(getSafePercent(-124)).toEqual(0);
  });
  it('should returns 100 if value is over 100', () => {
    expect(getSafePercent(1307)).toEqual(100);
  });
  it('should returns value if value is between 0 and 100', () => {
    expect(getSafePercent(56)).toEqual(56);
  });
});

describe('getStepPosition', () => {
  it('should returns 75 if steps = 4, stepIndex = 2 and hasStepZero = false', () => {
    expect(getStepPosition(4, 2, false)).toEqual(75);
  });
  it('should returns 100 if steps = 4, stepIndex = 3 and hasStepZero = true', () => {
    expect(getStepPosition(4, 3, true)).toEqual(100);
  });
});
