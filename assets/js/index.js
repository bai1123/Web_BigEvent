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
            Authorization: localStorage.getItem("token") || ''
        },
        success: function (res) {
            console.log(res);
        }
    })
}