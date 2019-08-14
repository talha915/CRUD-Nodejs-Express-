function log(req, res, next) {
    console.log("Logging Next");
    next();
}

module.exports = log;