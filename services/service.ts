import { Campaign } from './../models/CampaignModel';
import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';

export class CampaignService {
    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send("hi router");
    }

    public getAllCampaigns(req: Request, res: Response) {
        console.log('function get all')
        Campaign.find({}, (err: Error, campaign: MongooseDocument) => {
            if (err) {
                res.send(err)
                console.error(err)
            } else[
                res.json(campaign)
            ]
        })
    }

    public async getCampaign(req: Request, res: Response) {
        const name = req.params.id
        console.log(name)
        try {
            const data = await Campaign.find({ campaignName: name }).sort([['_id', -1]]).limit(1);
            console.log(data)
            res.send(data)
        } catch (err) {
            console.log(err)
        }

    }

    public addNewCampaign(req: Request, res: Response) {
        console.log('add campaign')
        const newCampaign = new Campaign(req.body);
        console.log(`req body ${JSON.stringify(req.body)}`)
        res.end()
        newCampaign.save((err: Error, test: MongooseDocument) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(test)
            }
        })
    }

    public updateCampaign(req: Request, res: Response) {
        console.log('update campaign')
    }

    public deleteCampaign(req: Request, res: Response) {
        console.log('delete campaign')
        const name = req.params.id;

    }

}