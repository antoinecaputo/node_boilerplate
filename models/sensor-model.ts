import mongoose, {Schema} from "mongoose";

export interface ISensor extends Document {
    Code_commune_INSEE: string,
    Nom_commune: string,
    Code_postal: number,
    lattitude: number,
    longitude: number,
}

const SensorSchema: Schema = new Schema({
    Code_commune_INSEE: {type: Number, required: true},
    Nom_commune: {type: String, required: true},
    Code_postal: {type: Number, required: true},
    lattitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
});

const Sensor = mongoose.model<ISensor>('Sensor', SensorSchema);

export {Sensor};
