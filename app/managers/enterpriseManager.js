/**
 * Created by Arlen on 15/03/2019.
 */

const BaseManager = require('./BaseManager')

class EnterpriseManager extends BaseManager {

    static getModelName(){
        return 'Enterprise';
    }
}

module.exports = EnterpriseManager;
