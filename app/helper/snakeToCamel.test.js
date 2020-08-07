const snakeToCamel = require('./snakeToCamel');

const obj = {
    EMPLOYEE_ID: '710001125',
    EMPLOYEE_NAME: 'munna',
    EMPLOYEE_1NAME: 'munna',
}

test('create snake case to camelcase', () => {
    const cases = snakeToCamel.convertToCamelCase;
  expect(cases('MUNNA')).toBe('munna');
  expect(cases('EHSANUL_HAQUE')).toBe('ehsanulHaque');
  expect(cases('EHSANUL_HAQUE-MUNNA')).toBe('ehsanulHaqueMunna');
  expect(cases('EHSANUL HAQUE MUNNA')).toBe('ehsanulHaqueMunna');
  expect(cases('EHSANUL HAQUE_2_MUNNA')).toBe('ehsanulHaque2Munna');
  expect(cases('EHSANUL HAQUE_2MUNNA')).toBe('ehsanulHaque2munna');
  expect(cases('EHSANUL HAQUE                     MUNNA')).toBe('ehsanulHaqueMunna');
  expect(cases('my-snake-string')).toBe('mySnakeString');
});

test('convert object to camelcase', () => {
    const objCase = snakeToCamel.convertObectKeysToCamelCase;
    expect(objCase(obj)).toStrictEqual({employeeId: '710001125', employeeName: 'munna', employee1name: 'munna' });
});

test('convert array to camelcase', () => {
    const list = [obj, obj, obj]
    const arrayCase = snakeToCamel.convertArrayObectKeysToCamelCase;
    expect(arrayCase(list)[2]).toStrictEqual({employeeId: '710001125', employeeName: 'munna', employee1name: 'munna' });
});