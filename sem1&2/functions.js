const sayHello = (name) => `Hello ${name}`;

// console.log(sayHello(process.argv[2]));

const greet = (names) => `Hello ${names.join(" ")}`;

// console.log(greet(["Florin", "Liviu", "Sandu"]));

function checkDivision(n,divisor){
    if(n % divisor){
        return false;
    }else{
        return true;
    } 
}

// console.log(checkDivision(20,3));
// console.log(checkDivision(20,2));

function countDif(str1, str2){
    let count = 0;
    if(str1.length !== str2.length){
        return -1;
    } else{
        for(let i = 0; i < str1.length; i++){
            if(str1[i] !== str2[i])
                count++;
        }
        return count;
    }
}

// console.log(countDif("hop", "hop"));   // 1
// console.log(countDif("hopa", "popa")); // 2
// console.log(countDif("Bam", "PamPam"));  // 3

function countChar(text, character){
    let count = 0;
    for(let i = 0; i < text.length; i++)
        if(text[i] === character)
            count++;
    return count;
}

// console.log(countChar("Sample Text", "e"));

const counting = (text, character) => text.split(character).length - 1;

// console.log(counting("Sample Text", "e"));

const numList = (...numbers) => numbers;

// console.log(numList(1,2,3,4));
// console.log(numList(1,2,3));

const stringConcat = (...arrays) => arrays.flat();

console.log(stringConcat([1, 2], [2,3]));

function fibonacci(n) {
    if (n < 0) {
        return "ordin negativ";
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let a = 0; 
    let b = 1; 

    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b; 
        b = c; 
    }

    return b;
}

console.log(fibonacci(2));