function myFunction(value) {
 const printValue = () => {
    console.log(value);
 }
 const printValuePlusSomething = (something) => {
    console.log(value + something);
 }
 return [printValue, printValuePlusSomething];
}

const [varOne, varTwo] = myFunction('my value');
//valueOne is going to be pointing to printValue

varOne(); // this will pring my value
varTwo('another value');