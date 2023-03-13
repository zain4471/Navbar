$(document).ready(function() {
	$('.cross').hide()
    $('.list').hide()
    $('.menu').click(function(){
        $('.list').slideToggle("slow",function(){
            $('.menu').hide()
            $('.cross').show()
        })
    })
    $('.cross').click(function(){
        $('.list').slideToggle("slow",function(){
            $('.menu').show()
            $('.cross').hide()
        })
    })
    
});

