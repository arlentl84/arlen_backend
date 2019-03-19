/**
 * Created by Arlen on 15/03/2019.
 */

const request = require('request');
const path = require('path');
const obraManager = require('./../managers/obraManager')
const userManager = require('./../managers/userManager')

class HomeController {

    static Register(app){

        app.get('/home/get-all-obras', this.LoadObras)
        app.get('/home/get-obra-by-id', this.ObraByID)
        app.get('/home/get-obra-by-name', this.ObraByName)
        app.get('/home/get-all-users', this.LoadUsers)
        app.get('/home/createuser', this.CreateUser)

    }

    static async CreateUser(req, res){

    try{
        const record = {
            nombre: "Manolo",
        };


        const result = await userManager.Singleton.Create(record);

        res.json({result});
    }
    catch (e) {
        console.log(e)
    }
}

    static async LoadObras(req, res) {
    try {

        const result = await obraManager.Singleton.FindAll();
        res.json({result});

    }
    catch (e) {
        console.log(e);
    }
    }

    static async LoadUsers(req, res) {
    try {

        const result = await userManager.Singleton.FindAll();
        res.json({result});

    }
    catch (e) {
        console.log(e);
    }
}

    static async ObraByName(req, res){
    try{

        let obraName = req.body.obraname
        const result = await obraManager.Singleton.Find({nombre: obraName});

        res.json({result});
    }
    catch (e) {
        console.log(e)
    }
    }

    static async ObraByID(req, res){
    try{

        let obraID = req.body.obraid
        const result = await obraManager.Singleton.Find({_id: obraID});

        res.json({result});
    }
    catch (e) {
        console.log(e)
    }
  }
}

module.exports = HomeController;









