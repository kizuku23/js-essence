function pringTypeAndValue(val) {
  console.log(typeof val, val)
}

let a = 0;

pringTypeAndValue(a);

let b = parseInt('1') + a;

pringTypeAndValue(b);

let c = 15 - b;

pringTypeAndValue(c);

let d = c - null;

pringTypeAndValue(d);

let e = d - true;

pringTypeAndValue(e);