/**
 * Created by Arlen on 15/03/2019.
 */

const BaseManager = require('./BaseManager')

class UserManager extends BaseManager {

    static getModelName(){
        return 'User';
    }

    static get getInstance(){
        return new UserManager();
    }

    static get Type(){ return 'UserManager'}

         static async getUserNameAndPass(username, pass){

        if(username == undefined || pass == undefined)
        return {data: null, message:"User or Password can't be empty "}

    let usuario = await db.User.findOne({nombre:username})
        .populate('usuario')
        .exec()

    if(usuario == null)
        return {data: null, message:'Not User Found'}
    if(!bcrypt.compareSync(pass , usuario.password))
        return {data: null, message:'Incorrect Password'}

    return {data: usuario , message:'successful authentication'}
    }

    static async crearUser(){
    var Genre = module.exports = mongoose.model("Genre", genreSchema);
}
}

module.exports = UserManager;
