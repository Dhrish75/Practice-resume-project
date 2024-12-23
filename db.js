const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://dhrish:dhrish75@cluster0.tgap5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',);
        console.log('MongoDB connected');
    }
        catch (error) {
        console.error(error);
        process.exit(1);
}
    };

module.exports = connectDB;