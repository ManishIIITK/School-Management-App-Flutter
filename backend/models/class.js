import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
    {
        className: {
            type: String, 
            required: true
        },
        teacher: String,
        Students:[
            {
                studentID: String
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.model("Class", ClassSchema);