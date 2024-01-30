import User from "../../models/student.js";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

const register = async (req, res) => {
    const {fname, lname, email, password, contact} = req.body;
    const encryptedPassaword = await bcryptjs.hash(password, 10);
    // const session = await mongoose.startSession(); 
    try{
        const oldUser = await User.findOne({email:email});
        if(oldUser){
            return res.status(500).json({error:'Email already exists'});
        }
        const newUser = await User.create({
            fname:fname,
            lname:lname,
            email:email,
            password:encryptedPassaword, 
            contact:contact
        }) ;

        // const token = jwt.sign({ id: newUser._id }, process.env.JWT);
        // res.cookie("access_token", token, {
        //     httpOnly: true,
        //   })
          res.status(200).json({msg: 'Registered successfully'});
    }
    catch(e){
        console.log(e);
        res.status(500).json({error:'Something went Wrong'});
    }
}

const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
      const user = await User.findOne({ email:email });
  
      if (!user) return res.status(404).json({error: 'user not found'})
  
      const isCorrect = await bcryptjs.compare(password, user.password);
      // const isCorrect = (password===user.password);
      if (!isCorrect) return res.status(400).json({error: 'incorrect password'});
      return res.status(200).json(user);
      // const token = jwt.sign({ id: user._id }, process.env.JWT);
    //   const { password, ...othersData } = user._doc;
  
      // res
      //   .cookie("access_token", token, { httpOnly: true, })
      //   .status(200)
      //   .json({msg:'user logined'});
  
    } catch (err) {
      next(err);
    }
  };

  export {
    register,
    signin
  }