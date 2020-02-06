const logMe = (req, res, next) => {
    console.log('hello logger');
    next();
};

module.exports = {
    logMe
}