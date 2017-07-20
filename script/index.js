/* 
* @Author: anchen
* @Date:   2017-07-12 22:06:19
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-12 22:07:40
*/


new Vue({
    el:"#main",
    data: {
        notList:[],
        message: 'Hello Vue.js!',
        sticl:false,
        share:false
    },
    computed:{

    },
    mounted:function(){
        var datas = {id:1,name:"asdsd"};
        this.notListView(datas);
    },
    methods:{
        notListView:function(datas){
            var _this=this;
            this.$http.post("data/all.json",{params:datas}).then(function(res){
                _this.notList=JSON.parse(res.body).resle.list;
            })
        },
        tabFun:function(e){
            var obox = document.getElementsByClassName("main_header");
            var arr = obox[0].getElementsByTagName("a");
            for(var i=0;i<arr.length;i++){
                arr[i].className="topic-tab";
            }
            e.currentTarget.className="topic-tab cur";
            datas = {id:2,name:"asdsd2"};
            this.notListView(datas);
        },
        loginFun:function(){
            var name = document.getElementById("name").value;
            var pas = document.getElementById("password").value;
            var loginArr = [];
            this.$http.post("data/login.json",{params:{name:name,password:pas}}).then(function(res){
                loginArr=JSON.parse(res.body).resle.list;
                console.log(loginArr);
                for(var i=0;i<loginArr.length;i++){
                    if(name==loginArr[i].name&&pas==loginArr[i].password){
                        alert("登录成功");
                        window.location.href="index.html";
                    }
                }
            })

        }
    }
})

