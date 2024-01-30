import User from "../../models/student.js";

// to delete user from database
export const deleteUser = async (req, res) =>{
    const userID = req.body.userID;
    try{
        const result = await User.findByIdAndDelete(userID);
        if(!result) return res.status(404).json({error: "User not found"});

        res.status(200).json(result);
    }
    catch(e){
        res.status(500).json({error: "Something went wrong"});
    }
}