'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const prefix = '/users';

    router.post(`/${prefix}/loginAction`, controller.users.users.loginAction);
    router.post(`/${prefix}/registerAction`, controller.users.users.registerAction);
};