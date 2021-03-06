


new Vue({
	el: '#vue-header'
})

new Vue({
	el: '#vue-card'
})

document.querySelector("nav").classList.remove("theme--light", "v-toolbar");

// Keybaord typing effect


var text = "Petabyte Experimental";
function typeffect(value) {
	if (value <= text.length) {
		setTimeout(function(){ document.getElementById("effect").innerHTML = text.substr(0, value) }, (value+1)*80)
	} else {
		setTimeout(function(){ document.getElementById("anim").classList.add("visible-text") }, (value+1)*80)
	}
}


for (let i = 0; i <= text.length+1; i++) 
	typeffect(i);


function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function animateValue(obj, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

var elms = document.getElementsByClassName("timeup")

	window.onscroll = function (e) {  

		var scroll = window.pageYOffset;
	if (scroll >= 500) {
		document.querySelector("nav").classList.add("top-header-fixed");
	} else {
		document.querySelector("nav").classList.remove("top-header-fixed");
	};
  
	if (scroll <= 600) {
		try {
			document.querySelector(".top-header-fixed").classList.add("top-header-fixed-btom0");
		}
		catch(err) {
			// what am I gonna do
		}
	} else {
		document.querySelector(".top-header-fixed").classList.remove("top-header-fixed-btom0");
	}

		for(let elm = 0; elm < elms.length; elm++) {
		if (isElementInViewport(elms[elm]) && !elms[elm].classList.contains("done")) {
			elms[elm].classList.add("done")
		
		
			if(!isNaN(elms[elm].innerHTML)){
				animateValue(elms[elm],0, parseFloat(elms[elm].innerHTML),1000)
			}
		}
		
	};
} 