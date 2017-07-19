var vm = new Vue({
    el:"#indexPage",
    data: {
        notList:[],
        message: 'Hello Vue.js!'
    },
    mounted:function(){
        this.notListView();
    },
    methods:{
        notListView:function(){
            var _this=this;
            this.$http.get("../data/notic.json").then(function(res){
                console.log(res)
                _this.notList=JSON.parse(res.body).resle.list;
                console.log(_this.notList);
            })
        }
    }
})
/*
$(function(){
    timeD()
})

function timeD() {
    endTime = new Date("10/18/2017 11:31:00"); //倒计时结束时间Date("9/17/2015 19:22:00")
    var endYear = endTime.getFullYear(); //得到年
    var endMouth = endTime.getMonth() + 1; //得到月
    var endDate = endTime.getDate(); //得到日
    var nowTime = new Date();
    var timeInt = endTime.getTime() - nowTime.getTime(); //getTime()是把时间转换成毫秒
    //  console.log(endTime.getTime());console.log(nowTime.getTime());
    /!*if (timeInt < 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "倒计时已经结束！";
        return false;
    }*!/
    var timer = setTimeout("timeD()", 1000);
    days = timeInt / (24 * 60 * 60 * 1000);
    days_show = Math.floor(days);
    //  console.log(days_show);
    hours = (days - days_show) * 24;
    hours_show = Math.floor(hours);
    minutes = (hours - hours_show) * 60;
    minutes_show = Math.floor(minutes);
    seconds = (minutes - minutes_show) * 60;
    seconds_show = Math.floor(seconds);
    
    //  console.log(seconds_show);
    /!*document.getElementById("time").innerHTML = "距离" + endYear + "年" + endMouth + "月" + endDate + "日倒计时：" + days_show + "天" + hours_show + "时" + minutes_show + "分" + seconds_show + "秒";*!/
    document.getElementById("hh").innerHTML= hours_show;
    document.getElementById("mm").innerHTML= minutes_show;
    document.getElementById("ss").innerHTML= seconds_show;
}*/
