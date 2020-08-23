<template>
  <div class="login">
    <div class="login_div">
      <el-form :model="login" :rules="loginRules" class="login_form" ref="loginForm">
        <div class="login_title">
          <p>登录</p>
        </div>
        <el-form-item prop="userName">
          <el-input v-model="login.userName" prefix-icon="el-icon-warning"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="login.password" prefix-icon="el-icon-warning" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="loginFunc">登录</el-button>
          <el-button type="info">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        userName: "",
        password: "",
      },
      loginRules: {
        userName: [
          {
            require: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度在3-10位",
            trigger: "blur",
          },
        ],
        password: [
          {
            require: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "长度在6-15位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginFunc() {
      let qs = this.$qs
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) {
          return;
        }

        const {data: result} = await this.$http.post("login", qs.stringify(this.login),{headers:{
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }});
        if(result.code==200){
          this.$message.success(result.msg)
        }
        else{
          this.$message.error(result.msg)
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: yellow;
  position: absolute;
}
.login_title {
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "微软雅黑";
}
.login_div {
  position: relative;
  width: 400px;
  height: 300px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
}
.login_form {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
