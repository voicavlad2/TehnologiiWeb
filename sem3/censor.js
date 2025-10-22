const sampleText = "javascript este minunat";

const propozitieNoua = sampleText.split(" ").map(cuvant => {
    if(cuvant === "este")
        return cuvant.slice(0, (cuvant.length)/2-1 + "xx" + cuvant.slice(cuvant.cuvant.length)/2+2)
    return cuvant;
})

console.log(propozitieNoua);