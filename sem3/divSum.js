let arr = [12, 24, 11, 13, 25, 9];


const suma = (arr, div) => {
    return arr.reduce((suma, curr) => {
        if(curr % div === 0)
            return suma + curr;
        return suma;
    }, 0);
}

console.log(suma(arr, 2));