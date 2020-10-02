const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    //const token = req.token;
    const token = req.get("Authorization").split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if(decoded.email) {
      req.userData = decoded;
    } else {
      req.userData = req.body.userData
      req.userData.userId = req.body.userData._id
    }
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
