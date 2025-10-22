function formatString(template, ...args) {
    let params = {};
    if (args.length === 1 && typeof args[0] === "object") {
        params = args[0];
        return template.replace(/{(\w+)}/g, (match, key) => {
            return key in params ? params[key] : match;
        });
    }
}

const template = "un {substantiv} este {adjectiv}";

const result = formatString(template, { substantiv: "calut", adjectiv: "dragut" });

console.log(result);