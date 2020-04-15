import { CampaignController } from './router/CampaignController';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';


class App {
    public app: Application;
    public campaignController: CampaignController

    constructor() {
        this.app = express();
        this.setConfig();
        this.campaignController = new CampaignController(this.app)
        this.setMongoConfig()
    }

    private setConfig() {
        this.app.use(bodyParse.json({ limit: '50mb' }));
        this.app.use(bodyParse.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());
        this.app.use('/api')
    }

    //Connecting to MongoDB database
    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://127.0.0.1:27017/undone', { useNewUrlParser: true })
            .then(() => console.log('Connected to MongoDB...'))
            .catch(err => console.error('Could not connect to MongoDB...'));
    }
}

export default new App().app;
