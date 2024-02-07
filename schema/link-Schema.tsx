import mongoose from "mongoose";

interface Interface extends mongoose.Document {
    links: Array<String>
  }

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    links: {
        type: Array<String>,
        required: true
    }
})

schema.index({}, { unique: false });

let AllowedLinks: mongoose.Model<Interface>;
try {
    AllowedLinks = mongoose.model<Interface>('ticket-systems'); 
}catch {
   AllowedLinks = mongoose.model<Interface>('ticket-systems', schema); 
}


export default AllowedLinks;