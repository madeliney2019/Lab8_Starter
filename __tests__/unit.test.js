// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber tests
test('true for repeated number', () => {
    expect(functions.isPhoneNumber('888-888-8888')).toBe(true);
});

test('true for regular number', () => {
    expect(functions.isPhoneNumber('916-357-5839')).toBe(true);
});

test('false for long number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('false for words', () => {
    expect(functions.isPhoneNumber('applejack')).toBe(false);
});

// isEmail tests

test('true for normal email', () => {
    expect(functions.isEmail('applejack@gmail.com')).toBe(true);
});

test('true for normal email org', () => {
    expect(functions.isEmail('maddie887@catholicucsd.org')).toBe(true);
});

test('false for no .com ending', () => {
    expect(functions.isEmail('salmon@yahoo')).toBe(false);
});

test('false for all numbers', () => {
    expect(functions.isEmail('0987654321')).toBe(false);
});

// isStrongPassword tests

test('true for shorter password', () => {
    expect(functions.isStrongPassword('a_w0rd')).toBe(true);
});

test('true for longer password', () => {
    expect(functions.isStrongPassword('a_l0ng_passw0rd')).toBe(true);
});

test('false for start with number', () => {
    expect(functions.isStrongPassword('1badpassword')).toBe(false);
});

test('false for bad characters', () => {
    expect(functions.isStrongPassword('a_bad_w0rd!')).toBe(false);
});

// isDate tests

test('true for single digit month', () => {
    expect(functions.isDate('9/19/2020')).toBe(true);
});

test('true for double digit month', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('false for dashes', () => {
    expect(functions.isDate('12-25-2001')).toBe(false);
});

test('false for letters', () => {
    expect(functions.isDate('4/11/2oo5')).toBe(false);
});

// isHexColor tests

test('true for 6 digit hex', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('true for 3 letter hex', () => {
    expect(functions.isHexColor('#ABC')).toBe(true);
});

test('false for out of bounds letters', () => {
    expect(functions.isHexColor('#123MEY')).toBe(false);
});

test('false for too many characters', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});