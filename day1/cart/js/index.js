$(function () {
    $('#dowebok').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (Link,index) {
            // console.log($('.section').index);
            console.log($('.section').eq(index-1));
            $('.dowebok').eq(index-1).addClass('now');
        }
    });
});




