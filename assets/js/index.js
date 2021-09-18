$(function () {

    // 调用getUserInfo函数获取用户信息
    getUserInfo();
})

// 获取用户的基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzE4MTgsInVzZXJuYW1lIjoiYmFpbGVpc2hhIiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IiIsImVtYWlsIjoiIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2MzE5NTM4NjgsImV4cCI6MTYzMTk4OTg2OH0.UYGIKUDMZAOOjzGxSYj1TFLE2cRgkGZvxwrhV0QwGfI' || ''
        },
        success: function (res) {
            console.log(res);
        }
    })
}