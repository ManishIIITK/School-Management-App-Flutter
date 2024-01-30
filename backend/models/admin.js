import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type:String,
            required: true,
        },
        fname: {
            type:String,
            required: true,
        },
        lname: {
            type: String,
        },
        contact: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: 'admin',
        },
    },
    { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);