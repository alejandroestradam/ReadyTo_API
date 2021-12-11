import {Schema, model} from 'mongoose';

const PropertySchema = new Schema({
    name: {type: String, required: true},
    summary: {type: String},
    description: {type: String},
    property_type: {type: String, required: true},
    room_type: {type: String, required: true},
    cancellation_policy: {type: String},
    bedrooms: {type: Number, required: true},
    beds: {type: Number},
    bathrooms: {type: Number, required: true},
    price: {type: Number, required: true},
    images: {type: Object},
    address: {type: Object},
    reviews: {type: Array} 
});

export default model('Property', PropertySchema);
