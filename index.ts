import { CampaignController } from './router/CampaignController';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { CampaignService } from './services/service';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

const campaignService = new CampaignService();
const campaignController = new CampaignController(campaignService);
app.use('/api', campaignController.router());

app.listen(8080, () => {
    console.log("Server listening on 8080");
})

mongoose.connect('mongodb://127.0.0.1:27017/undone', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

