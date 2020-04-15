import express, { Application } from 'express';
import { CampaignService } from '../services/CampaignService';

export class Controller {
    private campaignService: CampaignService;

    constructor(private app: Application) {
        this.campaignService = new CampaignService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.campaignService.welcomeMessage);
        this.app.route('/api/getAll').get(this.campaignService.getAllCampaigns)
        this.app.route('/api/:id').get(this.campaignService.getCampaign)
        this.app.route('/api/addCampaign').post(this.campaignService.addNewCampaign)
        this.app.route('/api/:id').put(this.campaignService.getAllCampaigns)
        this.app.route('/api/:id').delete(this.campaignService.getAllCampaigns)
    }
}
