<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../image/picture3.png" alt="">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间:<span>2022-2-22</span></p>
                        <p>上次登陆地点:<span>北京</span></p>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
</template>
<script>
export default{
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid;
    img{
        margin-right: 40px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
}
.userinfo{
    .name{
        font-size: 32px;
        margin-bottom: 10px;
    }
    .access{
        color: gray;
    }
}
.login-info{
    p{
        line-height: 28px;
        font-size: 14px;
        color:#999;
        span{
            margin-left: 60px;
        }
    }
}
</style>