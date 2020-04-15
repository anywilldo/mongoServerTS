import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
    campaignName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String
    },
    text: {
        type: String
    },
    step1: {
        type: String
    },
    step2: {
        type: String
    },
    step3: {
        type: String
    },
    media: {
        type: String
    },
    buttonWords: {
        type: String
    },
    extraText: {
        type: String
    },
    deadline: {
        type: String
    }
})

export const Campaign = mongoose.model("Campaign", CampaignSchema)