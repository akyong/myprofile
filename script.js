var rock = false;
function toggleMenu() {
	var x = document.getElementById("menu-pop");
  	x.classList.toggle("anime");

}

function requestDesktopSite(){
 	if(document.getElementsByTagName('meta')['viewport'].content=='width= 1440px;'){
 		
 		document.getElementById('dekstopmobile').innerHTML = '<a onclick="requestDesktopSite()"><img alt="White iMac icon" srcset="https://img.icons8.com/material-rounded/2x/imac.png 2x" style="filter: invert(94%) sepia(76%) saturate(333%) hue-rotate(250deg) brightness(121%) contrast(100%);"> Deskop View'+'</a>';
  		document.getElementsByTagName('meta')['viewport'].content='width= 400px;';
 	}else{
 		document.getElementById('dekstopmobile').innerHTML = '<a onclick="requestDesktopSite()"><img srcset="https://img.icons8.com/material-outlined/2x/phone-case.png 2x" alt="White Phone Case icon" loading="lazy" style="filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(353deg) brightness(102%) contrast(102%);"> Mobile View'+'</a>';
  		document.getElementsByTagName('meta')['viewport'].content='width= 1440px;';
 	}
}

function changeActive(xxx){
	document.querySelectorAll('.mmenu').forEach(item => item.classList.remove('active'));

	var objek = document.getElementById(xxx);
	objek.classList.add("active");
}

function changeActivePopUp(xxx) {
	changeActive(xxx);
	toggleMenu();
}

function toggleActiveMenuPop(xxx){
	// var xx = document.getElementsByClassName("psm1");
	// var yy = document.getElementsByClassName("psm2");
		// xx.classList.toggle("list-active");
		// yy.classList.toggle("list-font-active");

		var dik = document.getElementById('r1c1')[0].parentNode;
	this.style.backgroundColor = xxx;
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

function hardRock(){

	if(!rock){
		

		document.getElementById("hand-rock").style.animation = "rock-on 1.25s ease-out backwards";
		document.getElementById("hand-rock").style.animationIterationCount  = "infinite";

		document.getElementById("profile-name").style.animation = "rock-on 1.25s ease-out backwards";
		document.getElementById("profile-name").style.animationIterationCount  = "infinite";

		document.getElementById("body").style.animation = "rock-on 1.25s ease-out backwards";
		document.getElementById("body").style.animationIterationCount  = "infinite";

		document.getElementById("notes").style.animation = "note 1.25s ease-out backwards";
		document.getElementById("notes").style.animationIterationCount  = "infinite";

		
		var width = (window.innerWidth > 0);
		if(width < 900)
		{
			document.getElementById("menu-right").style.position = "fixed";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";
			document.getElementById("menu-right").style.top = "100";
			document.getElementById("menu-right").style.left = "0";			
			document.getElementById("menu-right").style.borderRight = "1px solid white";
			document.getElementById("menu-right").style.borderTop = "1px solid white";
			document.getElementById("menu-right").style.borderLeft = "none";
			document.getElementById("menu-right").style.zIndex = "50";	
			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";	

		}
		else{
			document.getElementById("menu-right").style.position = "fixed";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";				
			document.getElementById("menu-right").style.borderLeft = "1px solid white";				
			document.getElementById("menu-right").style.borderTop = "none";
			document.getElementById("menu-right").style.top = "0";
			document.getElementById("menu-right").style.right = "0";
			document.getElementById("menu-right").style.zIndex = "50";			
			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";	
		}

		
		
		document.getElementById("myAudio").loop = true;
		document.getElementById("myAudio").play(); 


		rock=true;
	}
	else{
		document.getElementById("hand-rock").style.animation = "none";
		document.getElementById("hand-rock").style.animationIterationCount  = "none";

		document.getElementById("profile-name").style.animation = "none";
		document.getElementById("profile-name").style.animationIterationCount  = "none";

		document.getElementById("body").style.animation = "none";
		document.getElementById("body").style.animationIterationCount  = "none";

		document.getElementById("notes").style.animation = "none";
		document.getElementById("notes").style.animationIterationCount  = "none";



		if(width < 900){
			document.getElementById("menu-right").style.position = "fixed";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";
			document.getElementById("menu-right").style.top = "none";
			document.getElementById("menu-right").style.right = "none";
			document.getElementById("menu-right").style.borderLeft = "1px solid white";
			document.getElementById("menu-right").style.borderRight = "none";
			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";

		}else{
			document.getElementById("menu-right").style.position = "relative";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";
			document.getElementById("menu-right").style.borderLeft = "1px solid white";
			document.getElementById("menu-right").style.borderTop = "1px solid white";
			document.getElementById("menu-right").style.top = "0";
			document.getElementById("menu-right").style.right = "none";

			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";

		}
		
		

		document.getElementById("myAudio").pause(); 

		rock=false;
	}

}

function rockonbaby() {
	if(!rock){

		document.getElementById("hand-rock").style.animation = "rock-on 1.25s ease-out backwards";
		document.getElementById("hand-rock").style.animationIterationCount  = "infinite";

		document.getElementById("profile-name").style.animation = "rock-on 1.25s ease-out backwards";
		document.getElementById("profile-name").style.animationIterationCount  = "infinite";

		document.getElementById("notes").style.animation = "note 1.25s ease-out backwards";
		document.getElementById("notes").style.animationIterationCount  = "infinite";

		
		var width = (window.innerWidth > 0);
		if(width < 900)
		{
			document.getElementById("menu-right").style.position = "fixed";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";
			document.getElementById("menu-right").style.top = "102";
			document.getElementById("menu-right").style.left = "0";			
			document.getElementById("menu-right").style.borderRight = "1px solid white";
			document.getElementById("menu-right").style.borderTop = "1px solid white";
			document.getElementById("menu-right").style.borderLeft = "1px solid white";
			document.getElementById("menu-right").style.zIndex = "50";	
			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";	

		}
		else{
			document.getElementById("menu-right").style.position = "fixed";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";				
			document.getElementById("menu-right").style.borderLeft = "1px solid white";				
			document.getElementById("menu-right").style.borderTop = "none";
			document.getElementById("menu-right").style.top = "0";
			document.getElementById("menu-right").style.right = "0";
			document.getElementById("menu-right").style.zIndex = "50";			
			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";	
		}

		
		
		document.getElementById("myAudio").loop = true;
		document.getElementById("myAudio").play(); 


		rock=true;
	}
	else{
		document.getElementById("hand-rock").style.animation = "none";
		document.getElementById("hand-rock").style.animationIterationCount  = "none";

		document.getElementById("profile-name").style.animation = "none";
		document.getElementById("profile-name").style.animationIterationCount  = "none";

		document.getElementById("notes").style.animation = "none";
		document.getElementById("notes").style.animationIterationCount  = "none";



		if(width < 900){
			document.getElementById("menu-right").style.position = "fixed";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";
			document.getElementById("menu-right").style.top = "none";
			document.getElementById("menu-right").style.right = "none";
			document.getElementById("menu-right").style.borderLeft = "1px solid white";
			document.getElementById("menu-right").style.borderRight = "none";
			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";

		}else{
			document.getElementById("menu-right").style.position = "relative";
			document.getElementById("menu-right").style.borderBottom = "1px solid white";
			document.getElementById("menu-right").style.borderLeft = "1px solid white";
			document.getElementById("menu-right").style.borderTop = "1px solid white";
			document.getElementById("menu-right").style.top = "0";
			document.getElementById("menu-right").style.right = "none";

			document.getElementById("menu-right").style.transition = "all 1s ease-in-out";

		}
		
		

		document.getElementById("myAudio").pause(); 

		rock=false;
	}


	
}

 window.onload = function refreshTime(){

	var timeDisplay = document.getElementById("time");
	var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
  	var formattedString = dateString.replace(", ", " - ");
  	timeDisplay.innerHTML = formattedString;
  	 setInterval(refreshTime, 1000);
 } 

	




