import Invitation from "../../models"

export default async ({ sender, reciever, message, challenge, type }) => {
    try {
        const invitation = await Invitation.create({ sender, reciever, message, challenge, type })
        return invitation
    } catch (e) {
        throw e
    }
}