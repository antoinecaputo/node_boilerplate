const {Sensor} = require("../models/sensor-model");


export function getAllSensors() {
   return Sensor.find().then(sensors => {
        return sensors;
    }).catch(err => {
        throw err;
    });
}

export function getSensor(Code_commune_INSEE) {
    return Sensor.findOne({Code_commune_INSEE: Code_commune_INSEE}).then(sensor => {
        return sensor;
    }).catch(err => {
        throw err;
    });
}

export async function addSensor(sensor) {
    const newSensor = new Sensor(sensor);
    try {
        await newSensor.save();
        return newSensor;
    } catch(err) {
      throw err;
    }
}

export function deleteSensor(Code_commune_INSEE) {
    return Sensor.findOneAndDelete({Code_commune_INSEE: Code_commune_INSEE}).then(sensor => {
        return sensor;
    }).catch(err => {
        throw err;
    })
}

export function updateSensor(Code_commune_INSEE, sensor) {
    return Sensor.findOneAndUpdate({Code_commune_INSEE: Code_commune_INSEE}, sensor).then(sensor => {
        return sensor;
    }).catch(err => {
        throw err;
    })
}

