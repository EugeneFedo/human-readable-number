module.exports = function toReadable (number) {
  let result = '';
  
  function unitsNames (num) {
    switch (num) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
  }

  function tensNames (num) {
    switch (num) {
        case 1: return 'ten';
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }
  }

  function tens (num) {
    if (num % 10 === 0) { 
        return tensNames(num / 10);
    }  else if (num < 20) {
        return tensNames(num);
    } else {
        return `${tensNames(Math.floor(num / 10))} ${unitsNames(num % 10)}`;
    }
  }

  function hundreds (num) {
    if (num % 100 === 0) {
        return `${unitsNames(num / 100)} hundred`;
    } else if (num % 100 < 10) {
        return `${unitsNames(Math.floor(num / 100))} hundred ${unitsNames(num % 100)}`;
    } else {
        return `${unitsNames(Math.floor(num / 100))} hundred ${tens(num % 100)}`;
    }
  }

  if (number === 0) {
    result = 'zero';
  } else if (number < 10) {
    result = unitsNames(number);
  } else if (number < 100) {
    result = tens(number);
  } else {
    result = hundreds(number);
  }

  return result;
}