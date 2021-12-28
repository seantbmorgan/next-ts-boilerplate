import add from '@src/add';

describe('Add Function', () => {
  it('sums up two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
