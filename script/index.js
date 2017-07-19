/* 
* @Author: anchen
* @Date:   2017-07-12 22:06:19
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-12 22:07:40
*/
var vm = new Vue({
    el:"#main",
    data: {
        notList:[],
        message: 'Hello Vue.js!',
        sticl:false,
        share:false
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
            console.log(e.currentTarget)
            console.log(e.currentTarget.innerHTML);
            var obox = document.getElementsByClassName("main_header");
            var arr = obox[0].getElementsByTagName("a");
            for(var i=0;i<arr.length;i++){
                arr[i].className="topic-tab";
            }
            e.currentTarget.className="topic-tab cur";
            datas = {id:2,name:"asdsd2"};
            this.notListView(datas);
        }
    }
})