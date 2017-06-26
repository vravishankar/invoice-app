import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    //createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Customer', CustomerSchema)
    //export default mongoose.model('Customer', CustomerSchema);