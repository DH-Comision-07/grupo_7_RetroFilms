const carrousell = require ('../database/carrousell.json');


let carrousellService = {

    carrousell:carrousell,

    getCarrousell: function(){
        return this.carrousell;
    }

}

module.exports=carrousellService;