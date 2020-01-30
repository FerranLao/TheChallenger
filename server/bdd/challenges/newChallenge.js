import Challenge from '../../models/Challenge'

export default async ({ reciever, sender, inspectors, description, img }) => {
    try {
        const challenge = await Challenge.create({ reciever, sender, inspectors, description, img })
        return challenge
    }catch(e){
        throw e
    }

}