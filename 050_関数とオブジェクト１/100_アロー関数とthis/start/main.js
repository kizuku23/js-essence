window.name = 'John';

const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        const a = () => console.log('bye ' + this.name);
        a();
    }
}
// person.hello();

function b() {
    const a = () => console.log('bye ' + this.name);
    a();
}

b();