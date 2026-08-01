module.exports = (err, req, res, next) => {
  console.error("Express Error Handler:", err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || "An unexpected server error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
