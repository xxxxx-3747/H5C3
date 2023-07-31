$(function () {
    $('.dowebok').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            console.log(index.index);
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index.index).addClass('now');
        },
        onLeave:function (index,nextIndex,direction ) {
            if(index == 2 && nextIndex == 3){
                $('.section').eq(index.index).addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                $('.section').eq(index.index).addClass('leaved');
            }


        }
    });
});




