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

console.log(countDif("hop", "hop"));   // 1
console.log(countDif("hopa", "popa")); // 2
console.log(countDif("Bam", "PamPam"));  // 3