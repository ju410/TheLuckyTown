
$(document).ready(function(){

$('.scroll-content').find('ul>li').click(function () {
  // var list = $('.scroll-content').find('ul>li').length;
  var this_index =   $('.scroll-content').find('ul>li').index(this);

    $except = $(this);
    $remainder = $('.scroll-content').find('ul>li').not($except);

    $except_name = $(this).find('.tile_name');
    $except_name_text = $(this).find('.tile_name>h1,p');
    $except_name_h = $(this).find('.tile_name>h1');
    $except_fig = $(this).find('.tile_fig');
    $except_fig_img = $(this).find('.tile_fig>img');


    // $fadeIn = $('.detail-view').not($('.fadeIn'));
    // var last_index = $('.scroll-content').find('ul>li').lastIndexOf(this);
    var exceptof = $(this).offset().top;

    down($except_name_text);
    opac0($except_name);
    opac0($remainder);

		$except.animate({
			width: "50%",
		  height: "80%",
		}, 1000, function(){

      switchfun(this_index);

			$('html, body').animate({
				scrollTop: 0
			}, 800,function(){
        $('.detail-tile-fig').append($except_fig_img);
        name($except_name_h);
        opac1( $('.detail-view').not($('.fadeIn'),$('.slide-side-left'),$('.slide-side-right')));
        $(window).scroll(function(){
          if($('.detail-view').css("visibility") == "visible"){
          $('.fadeIn').each(function(i){
            var bottom_obj = $(this).offset().top+$(this).outerHeight();
            var bottom_win = $(window).scrollTop()+$(window).height();
            if(bottom_win>bottom_obj/1.2){
              $(this).addClass('list-opac1');
            }
          });
          $('.slide-left').each(function(i){
            var bottom_obj = $(this).offset().top+$(this).outerHeight();
            var bottom_win = $(window).scrollTop()+$(window).height();
            if(bottom_win>bottom_obj/1.2){
              $(this).addClass('slide-left_ain');
            }
          });
          $('.slide-right').each(function(i){
            var bottom_obj = $(this).offset().top+$(this).outerHeight();
            var bottom_win = $(window).scrollTop()+$(window).height();
            if(bottom_win>bottom_obj/1.2){
              $(this).addClass('slide-right_ain');
            }
          });
        }
        });

      });
		});



		$('.detail-close').click(function(){
      reset($('.detail-tile-name'));
      down($('.detail-tile-name'));
      opac0($('.detail-tile-name'));
      $('.detail-view').animate({

      },1000,function(){

        opac0($('.detail-view'));
        // opac0($('.fadeIn'));
        // opac0($('.slide-left'));
        // opac0($('.slide-right'));
        $('.fadeIn').removeClass('list-opac1');
        $('.slide-left').removeClass('slide-left_ain');
        $('.slide-right').removeClass('slide-right_ain');

        $except.animate({
          width: "35%",
          height: "80%"
        }, 1000, function(){
          dataremove();
          $except_fig.prepend($except_fig_img);
          $except_name.prepend($except_name_h);
          reset($except_name_text);
          opac1($except_name);
          opac1($remainder);
          // $('html, body').animate({scrollTop: exceptof }, 800);
        });
      });
      // $except.pop();
			console.log(this_index);
		});

		console.log(this_index);

		return false;

 });//li click

});

function name(name){
  $('.detail-tile-name').append(name);
  reset($except_name_h);
  up($('.detail-tile-name'));
}

function reset(obj){
	obj.addClass("reset").removeClass("down").removeClass("up");
}
function down(obj){
	obj.addClass("down").removeClass("reset");
}
function up(obj){
	obj.addClass("up").removeClass("reset");
}
function opac0(obj){
	obj.removeClass("list-opac1").addClass("list-opac0");
}
function opac1(obj){
	obj.removeClass("list-opac0").addClass("list-opac1");
}

function switchfun (this_index) {
  switch (this_index) {
    case 0:
    date(luckbakeshop);
    // indexreset($('.LuckyBakeShop'));
    break;
    case 1:
    date(gorocoffee);
    break;
    case 2:
    date(nearbysoap);
    break;
    case 3:
    date(thaifamily);
    break;
    case 4:
    date(surffire);
    break;
    case 5:
    date(emptyfolders);
    break;
    case 6:
    date(lilt);
    break;
    case 7:
    date(pago);
    break;
    case 8:
    date(salondebook);
    break;
    default:

  }

}
function date (shop){

  var content = document.createElement("p");
   content.innerHTML = shop.key_content;
    var opentime = document.createElement("span");
     opentime.innerHTML = shop.key_opentime;
      var review = document.createElement("p");
       review.innerHTML = shop.key_review;

       var btn = shop.key_btn;
       $('.btn-review').click(function(){
           window.open(btn,'_blank');
       });
       // var btn = shop.key_btn;
        // btn.innerHTML = shop.key_btn;
       var insta = shop.key_insta;
       $('.detail-insta-link').click(function(){
           window.open(insta,'_blank');
       });

       // var insta = document.createElement("div");
       // insta.innerHTML = shop.key_insta;
       console.log(btn);
       console.log(insta);
       var last = document.createElement("p");
        last.innerHTML = shop.key_last;

  $('.detail-content-js').append(content);
  $('.detail-opentime-left').append(shop.key_left_img);
  $('.detail-opentime-time-js').append(opentime);
  $('.detail-opentime-right').append(shop.key_right_img);
  $('.detail-review-comment').append(review);
  // $('.btn-review').append(btn);
  $('.detail-insta-img').append(shop.key_insta_img);
  $('.detail-last').append(last);

  // $('.detail-insta-link').append(insta);
}



// function createElement(key,type){
//   var content = document.createElement("type");
//    content.innerHTML = key;
//    $('.detail-content').append(element_type);
//
// }
function dataremove(){
  $('.detail-content-js *').remove();
  $('.detail-opentime-left *').remove();
  $('.detail-opentime-time-js *').remove();
  $('.detail-opentime-right *').remove();
  $('.detail-review-comment *').remove();
  // $('.btn-review *').remove();
  // $('.detail-insta-link *').remove();
  $('.detail-insta-img *').remove();
  $('.detail-last *').remove();

  $('.detail-tile-fig *').remove();
  $('.detail-tile-name *').remove();
}


var luckbakeshop = {
  key_content:
  "The Haengdang (LuckyBakeShop) is the name that was created by the location of the Haengdong. There are no signboards, but many people come by word of mouth. Daily bread lineups can be different and can be checked through Instagram.",
  key_left_img:"<img src="+"image/shop/open/lucky_left.jpg"+">",
  key_right_img:"<img src="+"image/shop/open/lucky_right.jpg"+">",
  key_opentime:"MON ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>TUE ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>WED ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>THU ▪▪▪▪▪ 2:00PM --- Sold out<br>FRI ▪▪▪▪▪ 2:00PM --- Sold out<br>SAT ▪▪▪▪▪ 2:00PM --- Sold out<br>SUN ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br><br>Please Check Instagram",
  key_review:"I like baguette and bread among the Haengdang menu. I have been to many bakeries, but I could not feel the unique chewiness of Haengdang. Since bread is made in limited quantities, it is recommended to visit early because the bread you want may be sold out if you visit late.",
  key_btn:"https://www.google.com/maps/place/%ED%96%89%EC%9A%B4%EB%8B%B9/@37.4806236,126.9551787,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca0262ff91b17:0x7c7287177107725c!8m2!3d37.4806236!4d126.9573674",
  key_insta:"https://www.instagram.com/luckybakeshop/?hl=ko",
  key_insta_img:"<img src="+"image/shop/open/lucky_insta.jpg"+">",
  key_last:" \" Bakery that only I want to know.\" "
    };
var gorocoffee = {
  key_content:
  "Goro Coffee Roasters is a cafe located in a residential area. This cafe is a place where beans are roasted by themselves and various desserts are made and sold. It is a place where you feel calm when you visit with a wooden interior and a quiet atmosphere.",
  key_left_img:"<img src="+"image/shop/open/goro_left.jpg"+">",
  key_right_img:"<img src="+"image/shop/open/goro_right.jpg"+">",
  key_opentime:"MON ▪▪▪▪▪ 11:00AM --- 10:00PM<br>TUE ▪▪▪▪▪ 11:00AM --- 10:00PM<br>WED ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>THU ▪▪▪▪▪ 11:00AM --- 10:00PM<br>FRI ▪▪▪▪▪ 11:00AM --- 10:00PM<br>SAT ▪▪▪▪▪ 11:00AM --- 10:00PM<br>SUN ▪▪▪▪▪ 11:00AM --- 7:00PM ",
  key_review:"I don't know much about coffee because I can't drink coffee, but I can definitely see that it has a deeper flavor than other cafes. I personally liked Bamboo latte and pineapple soda the most. Bamboo latte is an espresso added to the Matcha latte, And it is said to be named Bamboo latte because it looks like a bamboo forest with a striped mixture of Matcha and coffee. It also sells a variety of dessert. Among them, I recommend Financier.",
  key_btn:"https://www.google.com/maps/place/GORO+COFFEE+ROASTERS+%EA%B3%A0%EB%A1%9C%EC%BB%A4%ED%94%BC%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4/@37.4807194,126.9557302,17z/data=!4m10!1m2!2m1!1z6rOg66Gc7Luk7ZS866Gc7Iqk7YSw7Iqk!3m6!1s0x0:0x95d274895467a3d!8m2!3d37.4807159!4d126.957922!9m1!1b1",
  key_insta:"https://www.instagram.com/gorocoffeeroasters/?hl=kotarget",
  key_insta_img:"<img src="+"image/shop/open/goro_insta.jpg"+">",
  key_last:" \" A cafe with delicious coffee.\" "
};
var nearbysoap = {
  key_content:
  "NearBySoap is a place that sells eco-friendly, mild handmade soap. In addition, the design is unique and pretty, so many people visit and get one-day classes.",
  key_left_img:"<img src="+"image/shop/open/near_left.jpg"+">",
  key_right_img:"<img src="+"image/shop/open/near_right.jpg"+">",
  key_opentime:"MON ▪▪▪▪▪ 11:00AM --- 8:00PM<br>TUE ▪▪▪▪▪ 11:00AM --- 8:00PM<br>WED ▪▪▪▪▪ 11:00AM --- 8:00PM<br>THU ▪▪▪▪▪ 11:00AM --- 8:00PM<br>FRI ▪▪▪▪▪ 11:00AM --- 8:00PM<br>SAT ▪▪▪▪▪ 11:00AM --- 8:00PM<br>SUN ▪▪▪▪▪ 11:00AM --- 8:00PM",
  key_review:"I like baguette and bread among the Haengdang menu. I have been to many bakeries, but I could not feel the unique chewiness of Haengdang. Since bread is made in limited quantities, it is recommended to visit early because the bread you want may be sold out if you visit late.",
  key_btn:"https://m.place.naver.com/place/1145174399/home?subtab=location",
  key_insta:"https://www.instagram.com/nearby_soap/?hl=ko",
  key_insta_img:"<img src="+"image/shop/open/near_insta.jpg"+">",
  key_last:" \" With taste, Natural handmade soap.\" "
  };

  var thaifamily = {
    key_content:
    "There are many unfamiliar menus in the Thai family, although there are some familiar menus. The kitchen is a place that is trusted with open kitchen and is run by the owner's family, so making it more friendly.",
    key_left_img:"<img src="+"image/shop/open/thai_left.jpg"+">",
    key_right_img:"<img src="+"image/shop/open/thai_right.jpg"+">",
    key_opentime:"MON ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>TUE ▪▪▪▪▪ 11:30AM --- 9:00PM<br>WED ▪▪▪▪▪ 11:30AM --- 9:00PM<br>THU ▪▪▪▪▪ 11:30AM --- 9:00PM<br>FRI ▪▪▪▪▪ 11:30AM --- 9:00PM<br>SAT ▪▪▪▪▪ 11:30AM --- 9:00PM<br>SUN ▪▪▪▪▪ 11:30AM --- 9:00PM<br><br>Break Time ▪▪▪ 4:00PM --- 5:00PM",
    key_review:"Personally, I think the price is cheaper than other Thai restaurants. Also, it was good because there were various kinds of menus and the ingredients were generously added, so the taste was good. By constantly developing the menu and creating new menu, you can enjoy it without getting tired of it.",
    key_btn:"https://www.google.com/maps/place/Thai+family+%ED%83%80%EC%9D%B4%ED%8C%A8%EB%B0%80%EB%A6%AC/@37.4812391,126.9544593,17z/data=!4m8!1m2!2m1!1z7YOA7J207Yyo67CA66as!3m4!1s0x357ca15e770451c1:0x8f1e84d7d2110e6!8m2!3d37.4820277!4d126.9561433",
    key_insta:"https://www.instagram.com/thaifamily_89/?hl=ko",
    key_insta_img:"<img src="+"image/shop/open/thai_insta.jpg"+">",
    key_last:" \" To the taste of the Thailand.\" "
      };
  var surffire = {
    key_content:
    "Surf Fire is beer houses where pets can enter, and there are resident dogs, so be careful. Due to the small number of seats, group customers can only have up to five people. Its owner is a former firefighter and has great interest in firefighters and socially disadvantaged people.",
    key_left_img:"<img src="+"image/shop/open/surf_left.jpg"+">",
    key_right_img:"<img src="+"image/shop/open/surf_right.jpg"+">",
    key_opentime:"MON ▪▪▪▪▪ 6:00PM --- 02:00AM<br>TUE ▪▪▪▪▪ 6:00PM --- 02:00AM<br>WED ▪▪▪▪▪ 6:00PM --- 02:00AM<br>THU ▪▪▪▪▪ 6:00PM --- 02:00AM<br>FRI ▪▪▪▪▪ 6:00PM --- 02:00AM<br>SAT ▪▪▪▪▪ 6:00PM --- 02:00AM<br>SUN ▪▪▪▪▪▪▪▪▪▪▪▪ Closed ",
    key_review:"First of all, there was a big merit in my position of raising a dog that pets can enter. I also liked the idea that some of the proceeds would be donated to children in need. Of course, it tastes good. Especially, I recommend pepperoni pizza. It's not a pizza place, but the pizza is so delicious.",
    key_btn:"https://www.google.com/maps/place/%EC%84%9C%ED%94%84%ED%8C%8C%EC%9D%B4%EC%96%B4/@37.4803382,126.9547828,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca1ce0f43f643:0xba5b9c926f1753dc!8m2!3d37.4803382!4d126.9569715",
    key_insta:"https://www.instagram.com/surf_fire/?hl=ko",
    key_insta_img:"<img src="+"image/shop/open/surf_insta.jpg"+">",
    key_last:" \" # I cheer for the firefighter. Hero Service.\" "
  };
  var emptyfolders = {
    key_content:
    "EmptyFolders sells a variety of independent books as an independent bookstore. We always run book curations and programs (workshop, one-day class) called 'Monthly Book Writers' that bring together a variety of stories on one topic each month.",
    key_left_img:"<img src="+"image/shop/open/empty_left.jpg"+">",
    key_right_img:"<img src="+"image/shop/open/empty_right.jpg"+">",
    key_opentime:"MON ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>TUE ▪▪▪▪▪ 2:00PAM --- 9:00PM<br>WED ▪▪▪▪▪ 2:00PAM --- 9:00PM<br>THU ▪▪▪▪▪ 2:00PAM --- 9:00PM<br>FRI ▪▪▪▪▪ 1:00PM --- 8:00PM<br>SAT ▪▪▪▪▪ 1:00PM --- 8:00PM<br>SUN ▪▪▪▪▪▪▪▪▪▪▪▪ Closed",
    key_review:"This is a comfortable space where you can learn about various books that you might not have known in your lifetime. There is a separate space for reading books comfortably and elementary schools are located nearby, many fairy tales have been arranged.",
    key_btn:"https://www.google.com/maps/place/%EC%97%A0%ED%94%84%ED%8B%B0%ED%8F%B4%EB%8D%94%EC%8A%A4/@37.4816921,126.954352,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca027d43880cf:0xce47d58dc13ad300!8m2!3d37.4816921!4d126.9565407",
    key_insta:"https://www.instagram.com/emptyfolders/?hl=ko",
    key_insta_img:"<img src="+"image/shop/open/empty_insta.jpg"+">",
    key_last:" \" # Monthly Book Writers.\" "
    };
    var lilt = {
      key_content:
      "Lilt stands for lost in little talks. It is a cafe that sells various desserts together and is famous for milk tea in glass bottles. The atmosphere is fresh and calm.",
      key_left_img:"<img src="+"image/shop/open/lilt_left.jpg"+">",
      key_right_img:"<img src="+"image/shop/open/lilt_right.jpg"+">",
      key_opentime:"MON ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>TUE ▪▪▪▪▪ 12:00PM --- 10:00PM<br>WED ▪▪▪▪▪ 12:00PM --- 10:00PM<br>THU ▪▪▪▪▪ 12:00PM --- 10:00PM<br>FRI ▪▪▪▪▪ 12:00PM --- 10:00PM<br>SAT ▪▪▪▪▪ 12:00PM --- 10:00PM<br>SUN ▪▪▪▪▪ 12:00PM --- 9:00PM<br><br>Please Check Instagram",
      key_review:"First of all, it is a place where you can feel that the owner take care of the interior design. So it comes out well no matter how you take a picture. Also, the plate comes out very pretty. Good looking food is good to eat. It tastes good, too.",
      key_btn:"https://www.google.com/maps/place/Lilt/@37.4809329,126.9549064,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca02633d84dd7:0x778539faf744ee82!8m2!3d37.4809329!4d126.9570951",
      key_insta:"https://www.instagram.com/lostinlittletalks/?hl=ko",
      key_insta_img:"<img src="+"image/shop/open/lilt_insta.jpg"+">",
      key_last:" \" Lost in little talks.\" "
        };
    var pago = {
      key_content:
      "Pago is the place that sells food that goes well with wine. So there are far more wine menus than food. You'll get a 20% discount if you take out wine.",
      key_left_img:"<img src="+"image/shop/open/pogo_left.jpg"+">",
      key_right_img:"<img src="+"image/shop/open/pogo_right.jpg"+">",
      key_opentime:"MON ▪▪▪▪▪▪▪▪▪▪▪▪ Closed<br>TUE ▪▪▪▪▪ 5:00PM --- 12:00AM<br>WED ▪▪▪▪▪ 5:00PM --- 12:00AM<br>THU ▪▪▪▪▪ 5:00PM --- 12:00AM<br>FRI ▪▪▪▪▪ 5:00PM --- 12:00AM<br>SAT ▪▪▪▪▪ 2:00PM --- 12:00AM<br>SUN ▪▪▪▪▪ 2:00PM --- 11:00PM ",
      key_review:"The atmosphere is so antique that I feel like I'm in Spain while I'm in the store. There are so many kinds of wine and you can order a glass of non-bottle, so you don't feel too much pressure. ",
      key_btn:"https://www.google.com/maps/place/%ED%8C%8C%EA%B3%A0+PAGO/@37.4809277,126.9220756,13z/data=!4m8!1m2!2m1!1spago+!3m4!1s0x357ca1b4fd05e81b:0x80daed52a79fe963!8m2!3d37.4806236!4d126.9573674",
      key_insta:"https://www.instagram.com/pago_seoul/?hl=ko",
      key_insta_img:"<img src="+"image/shop/open/pogo_insta.jpg"+">",
      key_last:" \" A wine-loving little shop.\" "
    };
    var salondebook = {
      key_content:
      "Salon de Book is an independent bookstore where you can have a light drink. Depending on your mood, depending on your compatibility with the book, you can enjoy a variety of drinks.",
      key_left_img:"<img src="+"image/shop/open/salon_left.jpg"+">",
      key_right_img:"<img src="+"image/shop/open/salon_right.jpg"+">",
      key_opentime:"MON ▪▪▪▪▪ 2:00PAM --- 11:00PM<br>TUE ▪▪▪▪▪ 2:00PAM --- 11:00PM<br>WED ▪▪▪▪▪ 2:00PAM --- 11:00PM<br>THU ▪▪▪▪▪ 2:00PAM --- 11:00PM<br>FRI ▪▪▪▪▪ 2:00PM --- 11:00PM<br>SAT ▪▪▪▪▪ 2:00PM --- 11:00PM<br>SUN ▪▪▪▪▪▪▪▪▪▪▪▪ Closed",
      key_review:"What's special about this place is that when the owner is away, regular customers take over. The owner is a place to rest like the guest and the guest is a place to rest like the owner. Therefore, it is a space where you can meet people from various fields and give various opinions.",
      key_btn:"https://www.google.com/maps/place/%EC%82%B4%EB%A1%B1%EB%93%9C%EB%B6%81+%EC%B1%85%EB%B0%A9/@37.480356,126.954772,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca0264b7556dd:0x6520716217a3db85!8m2!3d37.480356!4d126.9569607",
      key_insta:"https://www.instagram.com/salon_book/?hl=ko",
      key_insta_img:"<img src="+"image/shop/open/salon_insta.jpg"+">",
      key_last:"  "
      };
