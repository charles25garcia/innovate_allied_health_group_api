const mongoose = require('mongoose');

const dbConnect = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });

        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(error.message);
    }
}

module.exports = dbConnect;
