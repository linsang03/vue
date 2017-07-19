(function($){
    $.fn.sider=function(options){
        var siders={
            'showId' : '',
            'time' : '',
            'animation' : 'none',
            'auto' : true,
            'ways' : 'click',
            'bottomClick':true
        };
        var options = $.extend(siders,options);
        var $this = $(this);
        var i=0;
        var show = $this.find(siders.showId);
        var showLi = show.find("li");
        var imgNum = showLi.length;
        var imgWidth = showLi.width();
        var marl = 0;
        if(siders.bottomClick){
            var xHtml = '';
            xHtml += '<div class="prev" id="prev" style="-webkit-user-select:none;-ms-user-select:none"></div>';
            xHtml += '<div class="next" id="next" style="-webkit-user-select:none;-ms-user-select:none"></div>';
            xHtml += '<ul class="num" id="num">';
            xHtml += '<li class="cur"></li>';
            for(var x=1;x<imgNum;x++){
                xHtml += '<li></li>';
            }
                xHtml += '</ul>';
                
            $this.append(xHtml);
        }
        
        var next = $("#next");
        var prev = $("#prev");
        var numId = $("#num");
        var numLi = numId.find("li");
        nextL = function(){
            i++;
            if(siders.animation=='none'){
                showLi.eq(i).show().siblings().hide();
                judgeP();
                numLi.eq(i).addClass("cur").siblings().removeClass("cur");
            }else if(siders.animation=='sider'){
                marl = -(i*imgWidth);
                show.css("margin-left",marl);
                judgeP();
                numLi.eq(i).addClass("cur").siblings().removeClass("cur");
                // show.css("transition","all"+" "+siders.time)
                show.css("transition","all "+(siders.time)/1000+"s")
            }
            
        };
        prevL = function(){
            i--;
            if(siders.animation=='none'){
                showLi.eq(i).show().siblings().hide();
                judgeR();
                numLi.eq(i).addClass("cur").siblings().removeClass("cur");
            }else if(siders.animation=='sider'){
                marl=-i*imgWidth;
                show.css("margin-left",marl);
                judgeR();
                numLi.eq(i).addClass("cur").siblings().removeClass("cur");
            }
        }
        judgeP = function(){
            if(i>imgNum-1){
                i=0;
                if(siders.animation=="none"){
                    showLi.eq(i).show().siblings().hide();
                }else if(siders.animation=="sider"){
                    marl=0;
                    show.css("margin-left",marl);
                }
            }
        }
        judgeR = function(){
            if(i<0){
                i=imgNum-1;
                if(siders.animation=="none"){
                    showLi.eq(i).show().siblings().hide();
                }else if(siders.animation=="sider"){
                    marl=-i*imgWidth;
                    show.css("margin-left",marl);
                }
            }
        }
        if(siders.ways=="hover"){
            siders.ways="mouseover";
        }
        numLi.bind(siders.ways,function(){
            i = $(this).index();
            if(siders.animation=="none"){
                showLi.eq(i).show().siblings().hide();
            }else if(siders.animation=="sider"){
                marl = -(i*imgWidth);
                show.css("margin-left",marl);
            }
            $(this).addClass("cur").siblings().removeClass("cur");
        })
        
        next.click(function(){
            nextL();
        });
        prev.click(function(){
            prevL();
        });
        $this.mouseover(function(){
            clearInterval(timer);
        }).mouseout(function(){
            timer = setInterval("nextL()", siders.time);
        })
        if(siders.auto){
            var timer = setInterval("nextL()", siders.time);
        }
    }
})(jQuery);
