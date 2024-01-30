import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        username: {
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
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contact: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: 'admin',
        },
        class: {
            type: String,
            default: '',
        },
        appliedDate: {
            type: Date,
            default: null,
        },
        status: {
            type: String,
            default: "pending",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Teacher", TeacherSchema);