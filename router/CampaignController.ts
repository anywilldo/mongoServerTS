import express, { Application } from 'express';
import { CampaignService } from '../services/service';


export class CampaignController {
    constructor(private campaignService: CampaignService) {
    }

    router() {
        const router = express.Router();

        router.get('/', this.campaignService.getAllCampaigns);
        router.post('/', this.campaignService.addNewCampaign);
        router.get('/:id', this.campaignService.getCampaign);
        router.put('/:id', this.campaignService.updateCampaign);
        router.delete('/:id', this.campaignService.deleteCampaign)

        return router
    }
}

// export class CampaignController {
//     private campaignService: CampaignService;

//     constructor(private app: Application) {
//         this.campaignService = new CampaignService();
//         this.routes();
//     }

//     public routes() {
//         this.app.route('/').get(this.campaignService.welcomeMessage);
//         this.app.route('/api/getAll').get(this.campaignService.getAllCampaigns)
//         this.app.route('/api/:id').get(this.campaignService.getCampaign)
//         this.app.route('/api/addCampaign').post(this.campaignService.addNewCampaign)
//         this.app.route('/api/:id').put(this.campaignService.getAllCampaigns)
//         this.app.route('/api/:id').delete(this.campaignService.getAllCampaigns)
//     }
// }
