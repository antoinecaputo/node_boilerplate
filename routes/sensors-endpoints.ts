import {addSensor, deleteSensor, getAllSensors, getSensor, updateSensor} from "../controllers/sensor-controller";

module.exports.SensorsRoutes = (app) => {
    app.get('/sensors', function(req, res, next) {
        getAllSensors().then(sensors => {
            res.status(200).send(sensors);
        }).catch(err => {
            res.status(400).send(err);
        })
    });

    app.get('/sensors/:Code_commune_INSEE', function(req, res, next) {
       const codeCommune = req.params.Code_commune_INSEE = parseInt(req.params.Code_commune_INSEE);
       getSensor({Code_commune_INSEE: codeCommune}).then(sensors => {
              res.status(200).send(sensors);
       }).catch(err => {
              res.status(404).send(err);
       });
    });


    app.post('/sensors', function(req, res, next) {
        addSensor(req.body).then(sensor => {
            res.status(201).send(sensor);
        }).catch(err => {
            res.status(400).send(err);
        });
    });

    app.delete('/sensors/:Code_commune_INSEE', function(req, res, next) {
        const Code_commune_INSEE = req.params.Code_commune_INSEE = parseInt(req.params.Code_commune_INSEE);
        deleteSensor({Code_commune_INSEE: Code_commune_INSEE}).then(sensor => {
            res.status(200).send(sensor);
        }).catch(err => {
            res.status(404).send(err);
        });
    });

    app.patch('/sensors/:Code_commune_INSEE', function(req, res, next) {
        const Code_commune_INSEE = req.params.Code_commune_INSEE = parseInt(req.params.Code_commune_INSEE);
        updateSensor({Code_commune_INSEE: Code_commune_INSEE}, req.body).then(sensor => {
            res.status(200).send(getSensor({Code_commune_INSEE: Code_commune_INSEE}));
        }).catch(err => {
            res.status(404).send(err);
        });
    });


}

module.exports
