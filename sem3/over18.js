let years = [2004, 20014, 2000, 2006, 2010];

const ok = (years) => { 
    let an = new Date().getFullYear();
    result = years.filter((year) => {
        if(an - year >= 18)
            return true;
        else 
            return false;
    })
    return result;

}

console.log(ok(years));