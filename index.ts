import { CampaignController } from './router/CampaignController';
import { CampaignService } from './services/CampaignService';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const PORT = 8080
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

const campaignService = new CampaignService();
const campaignController = new CampaignController(campaignService);
app.use('/api/campaign', campaignController.router());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

mongoose.connect('mongodb://127.0.0.1:27017/undone', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

