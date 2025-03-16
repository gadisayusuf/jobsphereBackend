export const protectAdmin = (req, res, next) => {
  const user = req.user;

  if (user.role === "ADMIN") {
    next();
  }
  return res.status(403).json({
    message: "Forbidden",
  });
};
