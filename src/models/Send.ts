import mongoose,{ Schema, Document, STATES} from "mongoose"

export interface ISend extends Document{
    id:string
    name:string
    orgName:string
    phoneNumber:string
    description:string
}

let SendSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    orgName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
})

export default mongoose.model<ISend>("Send",SendSchema)