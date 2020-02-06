import mongoose from 'mongoose';

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://host.docker.internal:27017/test';

const connect = () => mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default {
    connect,
    connection: mongoose.connection
}