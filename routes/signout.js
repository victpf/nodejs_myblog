var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    //  res.send(req.flash());  ---- 只返回空对象

    // 清空 session 中用户信息
    req.session.user = null;
    req.flash('success', '登出成功啦！');
    // 登出成功后跳转到主页
    res.redirect('/posts');
});

module.exports = router;