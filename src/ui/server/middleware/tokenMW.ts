import * as jwt from 'express-jwt';

function validateToken(secret: string) {
    const whiteList = [
        '/api/v1/util/system-info',
        '/api/v1/institute',
        '/api-docs/*',
        '/api/v1'
    ];

    return jwt({
        secret,
        getToken: function(req) {
            if (
                req.headers.authorization &&
                req.headers.authorization.split(' ')[0] === 'Bearer'
            ) {
                return req.headers.authorization.split(' ')[1];
            }
            return null;
        }
    }).unless({
        path: whiteList
    });
}

export { validateToken };
