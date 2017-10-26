<template>
    <div class="login-mac">
        <div class="login-mac__text">
            <p>该设备尚未授权！</p>
            <p>请复制设备码（{{mac}}）并发送给门店负责人进行授权。</p>
            <p class="login-mac__button">
                <el-button type="primary" @click="handleCopyMacAddress">复制设备码</el-button>
            </p>
            <p class="login-mac__hidden"><input type="text" :value="mac" id="mac"></p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                mac: ''
            }
        },
        methods: {
            handleCopyMacAddress(){
                var e = document.getElementById("mac")
                e.select()
                document.execCommand("Copy")
            }
        },
        created(){
            this.mac = this.$route.params.mac
        }
    }
</script>
<style lang="scss" scope>
    .login-mac {
        .login-mac__text {
            width: 259px;
            margin: 0 auto;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0.34px;
            .login-mac__button {
                margin-top: 120px;
                .el-button {
                    width: 259px;
                }
            }
            .login-mac__hidden {
                position: absolute;
                top: -100px;
            }
        }
    }
</style>
