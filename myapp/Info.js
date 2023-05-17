
import mongoose from "mongoose";

const Info = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    phone_number: {type: String, required: true},
    date_of_birth: {type: String, required: true}
})

export default mongoose.model('Info', Info)