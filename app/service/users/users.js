'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
    // 新增用户
    async addUsers(usersInfo) {
        const { ctx } = this;
        usersInfo.create_time = new Date();
        const result = await ctx.model.Users.create(usersInfo);
        return result;
    }

    // 查找用户
    async findUsers(tel) {
        const { ctx } = this;
        const result = await ctx.model.Users.find({ tel });
        return result;
    }
}

module.exports = UsersService;
