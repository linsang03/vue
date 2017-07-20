/**
 * Created by linsang on 2017/7/20.
 */
new Vue({
    el:"#getstart",
    data:{
        notList:[]
    },
    mounted:function(){
        var datas = {id:1,name:"asdsd"};
        this.notListView(datas);
    },
    methods:{
        notListView:function(datas){
            var _this=this;
            this.$http.post("data/getstart.json",{params:datas}).then(function(res){
                _this.notList=JSON.parse(res.body).resle.list;
                console.log(_this.notList)
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
        }
    }
})