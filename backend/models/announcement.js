import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        title: String,
        content: Text
    },
    { timestamps: true }
);

export default mongoose.model("Teacher", TeacherSchema);