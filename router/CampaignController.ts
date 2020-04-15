import express from 'express';
import { CampaignService } from '../services/CampaignService';

export class CampaignController {
    constructor(private campaignService: CampaignService) {
    }

    router() {
        const router = express.Router();

        router.get('/hi', this.campaignService.welcomeMessage);
        router.get('/', this.campaignService.getAllCampaigns);
        router.post('/', this.campaignService.addNewCampaign);
        router.get('/:id', this.campaignService.getCampaign);
        router.put('/', this.campaignService.updateCampaign);
        router.delete('/:id', this.campaignService.deleteCampaign)

        return router
    }
}
