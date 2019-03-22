'use strict';

const Controller = require('egg').Controller;

const mongoose = require('mongoose');


class UsersController extends Controller {
    // 用户登录
    async login() {
        const { ctx } = this;
        ctx.body = await ctx.renderView('users/login');
    }

    // 用户登录操作
    async loginAction() {
        const { ctx } = this;
        const data = ctx.request.body;
        ctx.body = await ctx.service.users.findUsers(data.tel);
    }

    // 用户注册页面
    async register() {
        const { ctx } = this;
        ctx.body = await ctx.renderView('users/register');
    }

    // 用户注册操作
    async registerAction() {
        const { ctx } = this;
        const data = ctx.request.body;
        ctx.body = await ctx.service.users.addUsers(data);
    }
}

module.exports = UsersController;
