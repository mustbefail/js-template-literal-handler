// assign 80 once you accept a challenge to implement Level 80 requirements
export const level = 80;

/*
  Add parameters as appropriate.
  Should allow arbitrary number of expressions.
  Should work with arbitrary function expressions passed.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
*/
export function transform(strings, ...expressions) {
  const result = expressions.reduce((acc, exp, idx) => {
    let transformedExp;
    if (typeof exp === 'function') {
      transformedExp = exp(strings[idx + 1], expressions[idx + 1]);
      console.log(transformedExp);
    } else if (typeof exp === 'number') {
      transformedExp = exp * 2 + 3;
    } else if (typeof exp === 'string') {
      transformedExp = exp.toLowerCase();
    } else if (typeof exp === 'object') {
      transformedExp = JSON.stringify(exp);
    } else transformedExp = exp;

    return `${acc}${transformedExp}${strings[idx + 1]}`;
  }, strings[0]);
  return result;
}

/*
  Level 1: expects no parameters. Returns its own name capitalized.
    Usage example:
      testFunction() should return 'TESTFUNCTION'
  Level 80: expects 2 parameters. Returns its own name capitalized and both parameters' values appended to it.
    Whitespaces should be trimmed from the first parameter.
    Parameters values are glued with '=' and parenthesized.
    Usage example:
      testFunction("some Text", 125) should return 'TESTFUNCTION(someText=125)'
 */

export function testFunction(string, exp) {
  const name = testFunction.name.toUpperCase();
  const newStr = string.replace(/\s/g, '');
  return `${name}(${newStr}=${exp})`;
}
