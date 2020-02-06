const moment = require('moment');

myMoment = (req, res, next) => {
    console.log(moment().format('MMMM Do YYYY, h:mm a'));
    next()
}
module.exports = {
    myMoment
};
