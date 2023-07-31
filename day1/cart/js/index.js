$(function () {
    $('.dowebok').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            // console.log(index.index);
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index.index).addClass('now');
        },
        onLeave:function (index,nextIndex,direction ) {
            console.log(index.index);
            console.log(nextIndex.index);
            if(index.index == 1  && nextIndex.index == 2){
                $('.section').eq(index.index).addClass('leaved');
            }else if(index.index == 2 && nextIndex.index == 3){
                $('.section').eq(index.index).addClass('leaved');
            }


        },
        afterRender:function () {
            //点击更多向下滚动
            $(".more").on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
            $(".screen04 .content .cart").on('transitionend',function () {
                console.log("xxx");
                $(".screen04 .content .address").addClass("show");

            })
        },
        scrollingSpeed:1000
    });
});




