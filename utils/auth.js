const path = require("path");
const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    console.log(123);
  //  res.sendFile(path.join(__dirname, "../public/html/login.html"));
    res.redirect("/login");
  } else {
    console.log(456);
    next();
  }
};

module.exports = withAuth;
