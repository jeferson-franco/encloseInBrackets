const solution = require('./encloseInBrackets.js');

test('test 1', () => {
    expect(solution('abacaba')).toBe('(abacaba)');
});

test('test 2', () => {
    expect(solution('abcdef')).toBe('(abcdef)');
});

test('test 3', () => {
    expect(solution('aaad')).toBe('(aaad)');
});

test('test 4', () => {
    expect(solution('if')).toBe('(if)');
});

test('test 5', () => {
    expect(solution('it')).toBe('(it)');
});

test('test 6', () => {
    expect(solution('doesnt')).toBe('(doesnt)');
});

test('test 7', () => {
    expect(solution('challenge')).toBe('(challenge)');
});

test('test 8', () => {
    expect(solution('you')).toBe('(you)');
});

test('test 9', () => {
    expect(solution('itt')).toBe('(itt)');
});

test('test 10', () => {
    expect(solution('wont')).toBe('(wont)');
});
