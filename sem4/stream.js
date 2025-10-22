class Stream{
    #value;
    static #count = 0;
    
    constructor(value) {
        if(value % 2 === 0)
            this.#value = value;
        else
            this.#value = value + 1;
        Stream.#count++;
    }

    get next(){
        this.#value = this.#value + 2;
        return this.#value;
    }


}


let stream = new Stream(2);

for(i = 1; i <= 5; i++)
    console.log(`${i}: ` + stream.next + "\n");
