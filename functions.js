const sayHello = (name) => `Hello ${name}`;

// console.log(sayHello(process.argv[2]));

const greet = (names) => `Hello ${names.join(" ")}`;

console.log(greet(["Florin", "Liviu", "Sandu"]));