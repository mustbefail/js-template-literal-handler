// assign 80 once you accept a challenge to implement Level 80 requirements
export const level = 80;

/*
  Add parameters as appropriate.
  Should allow arbitrary number of expressions.
  Should work with arbitrary function expressions passed.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
*/
export function transform(strings, ...expressions) {
  const strArgs = [...strings];
  const expArgs = [...expressions];

  const transformExp = (exp, idx) => {
    switch (typeof exp) {
      case 'function':
        const strArg = strArgs.splice(idx + 1, 1);
        const expArg = expArgs.splice(idx + 1, 1);
        return exp(...strArg, ...expArg);
      case 'number':
        return exp * 2 + 3;
      case 'string':
        return exp.toLowerCase();
      case 'object':
        return JSON.stringify(exp);
      default:
        return exp;
    }
  };

  return expArgs.reduce((acc, exp, idx) => {
    return `${acc}${transformExp(exp, idx)}${strArgs[idx + 1]}`;
  }, strings[0]);
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
