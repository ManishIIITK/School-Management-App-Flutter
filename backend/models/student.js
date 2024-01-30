import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
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
        DateOfBirth: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Student", StudentSchema);