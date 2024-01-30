import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json({error: 'Session out'});

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(403).json({error: err});
    req.user = user;
    next();
  });
};
