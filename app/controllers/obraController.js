/**
 * Created by Arlen on 15/03/2019.
 */

const obraRepository = require('../Repository/obraRepository')

class ObraController {

    static Register(app){

        app.post('/obra/create', this.CreateObra)
        app.get('/home/get-all-obras', this.LoadObras)
        app.get('/home/get-obra-by-id/:id', this.ObraByID)
        app.get('/home/get-obra-by-name/:name', this.ObraByName)

    }

    static async CreateObra(req, res){
        try{
            const record = req.body;

            console.log(record);

            const result = await obraRepository.Singleton.Create(record);

            res.json({result});



        }
        catch (e) {

        }
    }

    static async LoadObras(req, res) {
        try {

            const result = await obraRepository.Singleton.FindAll();
            res.json({result});

        }
        catch (e) {
            console.log(e);
        }
    }

    static async ObraByName(req, res){
        try{

            let obraName = req.body.obraname
            const result = await obraRepository.Singleton.Find({nombre: obraName});

            res.json({result});
        }
        catch (e) {
            console.log(e)
        }
    }

    static async ObraByID(req, res){
        try{

            let obraID = req.body.obraid
            const result = await obraRepository.Singleton.Find({_id: obraID});

            res.json({result});
        }
        catch (e) {
            console.log(e)
        }
    }
}
module.exports = ObraController;