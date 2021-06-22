new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    navigation:true,
    anchors:['home','about','amenities','menu','pricing','contact-us'],
    navigationTooltips:['Home','About','Amenities','Menu','Room & Pricing','Contact Us'],
    showActiveTooltip:true,
    scrollingSpeed:700,
    responsiveWidth: 991,
    menu:'#nav',
    
});

data = 
    `[{
        "day":"Sunday",
        "Breakfast":"Pongali and Sambar <span>or</span> Upma and Chutney <span>or</span> Semiya Upma",
        "Lunch":"Rice, Chicken, Rasam and Butter Milk",
        "Dinner":"Masala Rice and Chutney <span>or</span> Lemon Rice and Potato fry"
    },
    {
        "day":"Monday",
        "Breakfast":"Idly and Chutney",
        "Lunch":"Rice, Sambar and Any Vegetable Curry",
        "Dinner":"Chapathi and Any Vegetable Curry"
    },
    {
        "day":"Tuesday",
        "Breakfast":"Upma and Chutney",
        "Lunch":"Vegetable rice and Any Vegetable Curry",
        "Dinner":"Chapathi and Any Vegetable Curry"
    },
    {
        "day":"Wednesday",
        "Breakfast":"Dosa and Chutney",
        "Lunch":"Lemon rice and Potato fry",
        "Dinner":"Rice, Sambar, Boiled Egg and Appalam"
    },
    {
        "day":"Thursday",
        "Breakfast":"Bonda and Chutney",
        "Lunch":"Rice and Spinach Dal",
        "Dinner":"Chapathi and Any Vegetable Curry"
    },
    {
        "day":"Friday",
        "Breakfast":"Idly and Chutney <span>or</span> Dosa and Chutney",
        "Lunch":"Any variety rice and Vegetable fry",
        "Dinner":"Egg fried rice <span>or</span> Veg fried rice"
    },
    {
        "day":"Saturday",
        "Breakfast":"Poori and Potato Kuruma <span>or</span> Poori and Chana Masala",
        "Lunch":"Rice, Dal and Appalam",
        "Dinner":"Dosa and Chutney"
    }]`;

var menu = JSON.parse(data);
$('.days').click(function(){
    for(let items in menu){
        var keys = Object.keys(menu[items]);
        if(this.innerText === menu[items].day){
            $('.days').removeClass('active');
            this.classList.add('active')
            var menuList =`
                <h2>${keys[1]}</h2>
                <p>${menu[items].Breakfast}</p>
                <h2>${keys[2]}</h2>
                <p>${menu[items].Lunch}</p>
                <h2>${keys[3]}</h2>
                <p>${menu[items].Dinner}</p>
            `;
            document.getElementById('day-menu').innerHTML = menuList;
    }
    }
});
window.innerWidth>991?$('#map iframe').css('width','90%'):$('#map iframe').css('width','100%');
$('#map iframe').css('height','300px');

$('ul').click(function(){
    $('ul').toggleClass('active');
    $('.navigation').toggleClass('active');
})
$('.navigation a').click(function(){
    $(this).parent().removeClass('active');
    $('.hamburger').removeClass('active');
});


if(window.innerWidth<992){
    fullpage_api.destroy('all');

    $('a[data-link]').click(function(e) {
        e.preventDefault();
    
        var scrollto = '.' + $(this).attr('data-link');
        $('html, body').animate({
                scrollTop: $(scrollto).offset().top - $('.header-wrapper').height()
            }, 1000);
    });
}

