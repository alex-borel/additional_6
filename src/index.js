module.exports = function zeros(expression) {
  let fact;
  let factDouble;
  let product = '1';
  let amount;

  expression = expression.split('*');
  expression = expression.map(item => {
    if (item.includes('!!')) {
      return double(parseInt(item));
    } else {
      return factorial(parseInt(item));
    }
  });

  expression.forEach(item => product = multiply(product, item));
  amount = count(product);
  return amount;

  function factorial(str) {
    fact = '1';
    while (str > 1) {
      fact = multiply(fact, String(str));
      str--;
    }
    return fact;
  };

  function double(n) {
    factDouble = '1';
    let limit = null;
    if (n % 2 === 0) {
      limit = 2;
    } else {
      limit = 1;
    }
    while (n >= limit) {
      factDouble = multiply(factDouble, String(n));
      n = n - 2;
    }
    return factDouble;
  };

  function count(str) {
    str = str.split('');
    str.reverse();
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      if (Number(str[i]) === 0) {
        result++;
      } else {
        break;
      }
    }
    return result;
  };

  function multiply(first, second) {
    let result = [];
    first = first.split('').reverse();
    second = second.split('').reverse();
    first.forEach((a, i, first) => {
      second.forEach((b, j, second) => {
        if (!result[i + j]) {
          result[i + j] = 0;
        };
        result[i + j] += first[i] * second[j];
      });
    });
    result.forEach((a, i, result) => {
      if (result[i] >= 10) {
        if (!result[i + 1]) {
          result[i + 1] = 0;
        };
        result[i + 1] += Math.floor(result[i] / 10);
        result[i] = result[i] % 10;
      };
    });
    return result.reverse().join('');
  };

}

