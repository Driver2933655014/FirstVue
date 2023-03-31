<template>
    <el-menu default-active="1-4-1" 
    class="el-menu-vertical-demo"
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse"
    background-color="#444"
    text-color="#fff"
    active-text-color="cyan"
    >
    <h3 style="text-align:center">{{ isCollapse ? '后台' : '后台管理系统' }}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
        <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="subitem in item.children" :key="subitem.path">
        
        <el-menu-item @click="clickMenu(subitem)" :index="subitem.path">{{ subitem.label }}</el-menu-item>
        
        </el-menu-item-group>
        
    </el-submenu>
    </el-menu>

    
</template>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;

    }
    .el-menu{
        height:100vh;
        border-right: none;
    }
</style>

    <script>
    export default {
        data() {
            return {
                // isCollapse:false,
                menuData: [
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: 's-home',
                        url: 'Home/Home'
                    },
                    {
                        path: '/mall',
                        name: 'mall',
                        label: '商品管理',
                        icon: 'video-play',
                        url: 'MailManage/MailManage',
                    },
                    {
                        path: '/user',
                        name: 'user',
                        label: '用户管理',
                        icon: 'user',
                        url: 'UserManage/UserManage',
                    },
                    {
                        label: '其他',
                        icon: 'location',
                        children: [
                            {
                                path: '/page1',
                                name: 'page1',
                                label: '页面1',
                                icon: 'setting',
                                url: 'Other/PageOne',
                            },
                            {
                                path: '/page2',
                                name: 'page2',
                                label: '页面2',
                                icon: 'seeting',
                                url: 'Other/PageTwo',
                            }
                        ],
                    },
                ],
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            clickMenu(item){
                console.log(item.label);
                // this.$router.push(item.path);
                if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
                    this.$router.push(item.path);
                }
            }
        },
        computed: {
            noChildren(){
                return this.menuData.filter(item => !item.children)
            },
            hasChildren(){
                return this.menuData.filter(item => item.children)
            },
            isCollapse(){
                return this.$store.state.tab.isCollapse
            }
        }
    }
    </script>