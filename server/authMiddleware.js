const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    let headers = req.headers['authorization'];

    if (headers) {
        const token = headers.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY)

        if (decoded) {
            const userId = decoded.userId;
            models.user.findOne({
                where: {
                    id: userId
                }
            }).then( (result) => {
                if (result) {
                    next()
                } else {
                    res.json({error: 'unauthorized access'})
                }
            })
        }
    } else {
        res.json({error: 'Authorization header not found.'})
    }
}

module.exports = authenticate;