class Bag {
    constructor(weight) {
        if(!weight) { throw new Error("bag needs weight") }
        this.weight = weight;
    }
}

try {
    const bag = new Bag();
} catch (e) {
    console.log(e)
}

//Export the module
module.exports = Bag;