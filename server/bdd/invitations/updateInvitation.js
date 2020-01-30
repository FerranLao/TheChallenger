import Invitation from "../../models"

export default async ({ id, state }) => {
    try {
        const updated = await Invitation.findByIdAndUpdate(id, { state }, { new: true })
        return updated
    } catch (e) {
        throw e
    }
}