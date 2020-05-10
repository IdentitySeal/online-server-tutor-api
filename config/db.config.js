const mongoose = require('mongoose');
const connectDatabase = async () => {
    const conn = await mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .catch((err) => {
            console.error(err);
        });
    console.log(`Connected to Database : ${conn.connection.host}`);
};

module.exports = connectDatabase;

