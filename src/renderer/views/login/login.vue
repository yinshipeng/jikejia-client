<template>
    <div class="login">
        <div class="login-form">
            <el-form :model="loginForm" ref="loginForm" :rules="loginFormRules">
                <el-form-item prop="company_id">
                    <el-autocomplete
                            v-model="companyName"
                            :props="companySearchProp"
                            :fetch-suggestions="querySearchAsync"
                            placeholder="请输入公司名称"
                            :trigger-on-focus="triggerOnFocus"
                            @select="handleAutoComplete">
                    </el-autocomplete>
                    <el-input v-model="loginForm.company_id" v-show="1==2"></el-input>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="text" class="forget-password" @click="handleForgetPassword">忘记密码</el-button>
                    <el-button type="primary" @click="handleSubmit">{{buttonText}}</el-button>
                </el-form-item>
                <input @click="handleSubmit" style="position: absolute;top:-100px;"/>
            </el-form>
        </div>
        <div class="login-footer" v-show="errMessage">
            <span class="login-footer-message">{{errMessage}}</span>
        </div>
    </div>
</template>
<script>
    import {queryByCompanyName,loginServ} from '../../api/login/login.service'
    var open = require("open")
    export default{
        data(){
            return {
                errMessage: '',
                buttonDisabled: true,
                companyName: '',
                triggerOnFocus: false,
                companySearchProp: {
                    value: 'company_name',
                    label: 'company_name',
                },
                loginForm: {
                    company_id: '',
                    username: '',
                    password: ''
                },
                loginFormRules: {
                    company_id: [
                        { required: true, message: '请输入公司名称', trigger: 'blur'}
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                }
            }
        },
        computed: {
            buttonText: function () {
                return this.buttonDisabled ? '登 陆' : '登录中……'
            }
        },
        methods: {
            querySearchAsync(queryString, cb) {
                this.loginForm.company_id = ''
                queryByCompanyName(queryString).then(res => {
                    if(this.$utils.isNotEmpty(res)){
                        var results = queryString ? res.data.filter(this.$utils.createStateFilterProp(queryString, 'company_name')) : res.data;
                        cb(results)
                    }
                })
            },
            handleAutoComplete(item){
                this.loginForm.company_id = item.company_id + ''
            },
            handleForgetPassword(){
                open('http://jikejia.cn/enterpriseAccount/toResetPassWord')
            },
            handleSubmit(){
                if(this.buttonDisabled){
                    this.$refs['loginForm'].validate((valid) => {
                        if(valid){
                            this.buttonDisabled = false
                            require('macaddress').one((err, mac) => {
                                if(err){
                                    this.errMessage = '获取设备码失败！'
                                    this.buttonDisabled = true
                                }else{
                                    console.log(mac);
                                    loginServ(this.loginForm).then((res)=>{
                                        console.log(res)
                                        // todo 是否可以打开浏览器登陆
                                        if(true){
                                            open('http://jikejia.cn?token=111111')
                                        }else{
                                            this.$router.push({path: '/login-mac/'+mac})
                                        }
                                    }).catch((res) => {
                                        if(this.$utils.isNotEmpty(res)){
                                            this.errMessage = '后端错误信息提示！'
                                        }else{
                                            this.errMessage = '系统错误，请联系管理员！'
                                        }
                                        this.buttonDisabled = true
                                    })
                                }
                            })
                        }
                    })
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login {
    overflow:hidden;
    .login-form {
        width: 253px;
        margin: 8px auto 0;
    .el-form-item:nth-of-type(3) {
        margin-bottom: 0;
    }
    .el-form-item:nth-of-type(4) {
        margin-bottom: 10px;
    }
    .el-form-item {
        width: 253px;
        margin-bottom: 20px;
    .el-autocomplete {
        width: 253px;
    }

    .el-button {
        width: 253px;
        margin-left: 0;
    }
    .forget-password {
        width: 47px;
        margin-left: 205px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #00A9F1;
        letter-spacing: -0.29px;
    }

    }
    }
    .login-footer {
        height: 36px;
        line-height: 36px;
        background-color: #FCF2F3;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #D0021B;
        letter-spacing: -0.34px;
        text-align: center;
    }

    }
</style>
