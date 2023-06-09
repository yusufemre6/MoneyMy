// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});


var $loginMsg = $('.loginMsg'),
$login = $('.login'),
$signupMsg = $('.signupMsg'),
$signup = $('.signup'),
$frontbox = $('.frontbox');

$('#switch1').on('click', function() {
$loginMsg.addClass("visibility");
$frontbox.addClass("moving");
$signupMsg.removeClass("visibility");

$signup.removeClass('hide');
$login.addClass('hide');
})

$('#switch2').on('click', function() {
$loginMsg.removeClass("visibility");
$frontbox.removeClass("moving");
$signupMsg.addClass("visibility");

$signup.addClass('hide');
$login.removeClass('hide');
})

// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

function showForm(formId,linkId) {
	var forms = document.getElementsByClassName("pages");
	
	for (var i = 0; i < forms.length; i++) {
	  forms[i].style.display = "none";
	}
	
	var form = document.getElementById(formId);
	form.style.display = "block";
	if(linkId=='girisYapLink'){
		$('#switch2').click()
	}
	else if(linkId=='kayitOlLink'){  
		$('#switch1').click()
	}
  }
  
  // Sayfa başladığında "Ana Sayfa" formunu göster
  document.addEventListener("DOMContentLoaded", function() {
	showForm("anaSayfa");
  });




