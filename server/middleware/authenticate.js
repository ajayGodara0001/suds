import jwt from "jsonwebtoken"

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'please login first' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ✅ Attach user info to req
    req.userId = decoded.id; // ✅ Ensure 'userId' matches JWT payload

    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token ' });
  }
};

