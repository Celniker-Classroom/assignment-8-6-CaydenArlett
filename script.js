// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
let count = 0;
function myFunc(){
  count ++;
  return count;
}

function onRandomClick(max){
  var x = Math.random();
  if (max > 0 && Number(max) === max){
    x = Math.floor(max * x).f + 1;
  }
  else {
    x = 0;
  }
  return x;
}

function myAdder(x, y){
  x = Number(x);
  y = Number(y);
  var sum = x + y;
  return sum;
}

function distance(x1, y1, x2, y2){
  var d = Math.sqrt((x1-x2) ** 2 + (y1-y2) ** 2);
  return d.toFixed(2);
}

function quadratic(a, b, c){
    var x = [0];
    x.push((-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
    x.push((-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
    return x;
}

// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
