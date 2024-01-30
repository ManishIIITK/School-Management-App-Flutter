import express from 'express';
const router = express.Router();

import {register as studentRegister, signin as studentLogin}  from '../controllers/student/auth.js';
import {deleteUser as studentDelete} from "../controllers/student/delete.js";
router.post('/login', studentLogin);
router.post('/register', studentRegister);
router.delete('/delete', studentDelete);
export default router;