$(document).ready(function(){
    var cartCountValue = 0;
    var cartCount = $('.cart .count');
    $(cartCount).text(cartCountValue);
    
    

    $('.cart-btn').on('click',function(){
        var cartBtn = this;
        var cartCountPostion = $(cartCount).offset();
        var btnPostion = $(this).offset();
        var leftPos =
        cartCountPostion.left < btnPostion.left
        ? btnPostion.left - (btnPostion.left - cartCountPostion.left)
        : cartCountPostion.left;

        var topPos =
        cartCountPostion.top < btnPostion.top
        ? cartCountPostion.top
        : cartCountPostion.top;
        $(cartBtn)
        .append("<span class='count'>1</span>");
    
        $(cartBtn).find(".count").each(function(i,count){
            $(count).offset({
                left: leftPos,
                top: topPos
            })
            .animate(
                {
                    opcity:0      
            },
            800,
            function(){
                $(this).remove();
                cartCountValue++;
                $(cartCount).text(cartCountValue);
            }
            );
        });
    });
});

function addtoCart(){
    alert("here")
}