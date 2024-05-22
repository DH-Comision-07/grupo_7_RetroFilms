const carrousell = require ('../database/json/carrousell.json');


let carrousellService = {

    carrousell:carrousell,

    getCarrousell: function(){
        return this.carrousell;
    }

}

module.exports=carrousellService;