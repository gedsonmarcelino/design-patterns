

function addPrefix(obj) {
  if (obj.value > 99) {
    obj.text = ' <-- ' + obj.text;
  }
  return obj;
}

function addSufix(obj) {
  if (obj.value == 50) {
    obj.text = obj.text + ' -->';
  }
  return obj;
}


function formatText(obj, arrFunc) {
  let res = {...obj};
  arrFunc.forEach(fn => res = fn(res));
  return res;
}

let myObj = {
  value: 50,
  text: 'hello'
}

const result = formatText(myObj, [addPrefix, addSufix]);

console.log({ text: result.text })