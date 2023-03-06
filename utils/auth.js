const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    console.log(123);
    res.redirect("/api/users/login");
  } else {
    console.log(456);
    next();
  }
};

module.exports = withAuth;
