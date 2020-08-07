const parse = require('./templateParser');

const template = "This is to certify that %EMPLOYEENAME%, %DESIGNATION% of Daffodil International University (DIU)"
const expectedTemplate = "This is to certify that MD. EHSANUL HAQUE MUNNA, Asst. IT Officer of Daffodil International University (DIU)"

const employee = {
  employeeName: 'MD. EHSANUL HAQUE MUNNA',
  designation: 'Asst. IT Officer'
}

test('should parse templete', () => {
    const cases = parse.toTemplate(template, employee);
  expect(cases).toBe(expectedTemplate);
});
