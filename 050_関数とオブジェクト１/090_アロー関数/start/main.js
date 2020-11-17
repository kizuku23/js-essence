function a(name) {
  return 'hello ' + name;
}

// const b = name => 'hello ' + name;
// const b = () => 'hello ';
// const b = _ => 'hello ';
const b = () => {
  return 'hello ';
};

console.log(b('Tom', 'Bob'))
