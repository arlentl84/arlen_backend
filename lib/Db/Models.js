const enterpriseModel = require('../../app/models/enterpriseModel');
const obraModel = require('../../app/models/obraModel');
const userModel = require('../../app/models/userModel');


class Models {

    static Load(mongoose) {
        return {
            mongoose: mongoose,
            enterprise: new enterpriseModel(mongoose),
            obra: new obraModel(mongoose),
            user: new userModel(mongoose),
        }
    }
}

module.exports = Models;
