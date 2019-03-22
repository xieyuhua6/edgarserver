const path = require('path');
const fs = require('fs');
module.exports = app => {
    const exports = {};

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    };

    exports.view = {
        cache: false
    };

    exports.vuessr = {
        layout: path.join(app.baseDir, 'app/web/view/layout.html'),
        renderOptions: {
            basedir: path.join(app.baseDir, 'app/view')
        }
    };

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    };

    exports.keys = 'xieyuhua';

    exports.middleware = [
        'access'
    ];

    exports.cors = {
        origin: '*', // 访问白名单,根据你自己的需要进行设置
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    exports.mongoose = {
        client: {
            url: 'mongodb://test:123456@140.143.36.230:27017/test',
            options: {
                useNewUrlParser: true,
            },
        },
    };

    return exports;
};
