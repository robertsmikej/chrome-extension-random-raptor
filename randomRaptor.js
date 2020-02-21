

//CHANGE TIMEOUT TIMES FOR MORE RANDOM TIMES
var d = document,
    c = chrome.extension;
var assets = {
    normal: {
        raptorRun: {
            document: "/dinos/raptorRun.html",
            parentDiv: ".raptorDiv",
            imgs: {
                "raptorNoLegs": "imgs/raptor/raptorNoLegs.png",
                "raptorLeg": "imgs/raptor/raptorLeg.png",
                "raptorLegRight": "imgs/raptor/raptorLegRight.png"
            },
            elements: {
                "imgs/raptor/raptorNoLegs.png": ".raptorNoLegs",
                "imgs/raptor/raptorLeg.png": ".lpRaptorLegInnerImg",
                "imgs/raptor/raptorLegRight.png": ".lpRaptorLegOuterImg"
            }, 
            times: {
                waitToShow: 1000,
                waitToFade: 6000,
                waitToHide: 6500
            }
        }
    },
    scary: {
        raptorRun: {
            document: "/dinos/raptorRun.html",
            parentDiv: ".raptorDiv",
            imgs: {
                "raptorNoLegs": "imgs/raptor/raptorNoLegs.png",
                "raptorLeg": "imgs/raptor/raptorLeg.png",
                "raptorLegRight": "imgs/raptor/raptorLegRight.png"
            },
            elements: {
                "imgs/raptor/raptorNoLegs.png": ".raptorNoLegs",
                "imgs/raptor/raptorLeg.png": ".lpRaptorLegInnerImg",
                "imgs/raptor/raptorLegRight.png": ".lpRaptorLegOuterImg"
            }, 
            times: {
                waitToShow: 1000,
                waitToFade: 6000,
                waitToHide: 6500
            }
        }
    }
};
var dinos = {
    buildDino: function (dinoName, type, dinoDeets) {
        console.log(dinoName);
        var url = "/dinos/" + dinoName + ".html";
        $.get(c.getURL(url), function (data) {
            var fragment = document.createElement('div'),
                key;
            fragment.innerHTML = data;
            d.body.appendChild(fragment);
            for (key in assets[type][dinoName].elements) {
                var img = c.getURL(key),
                    elem = assets[type][dinoName].elements[key];
                d.querySelector(elem).setAttribute("src", img);
            }
            var parental = d.querySelector(dinoDeets.parentDiv);
            console.log(dinoDeets.parentDiv);
            setTimeout(function () {
                parental.style.display = "flex";
                setTimeout(function () {
                    parental.style.opacity = "0";
                }, dinoDeets.times.waitToFade);
                setTimeout(function () {
                    parental.style.display = "none";
                }, dinoDeets.times.waitToHide);
            }, dinoDeets.times.waitToShow);
        });
    },
    raptorRun: function () {
        console.log('Running Raptor');
        
        $.get(c.getURL("/dinos/raptorRun.html"), function (data) {
            var fragment = document.createElement('div');
            fragment.innerHTML = data;
            document.body.appendChild(fragment);
            var raptorNoLegs = c.getURL("imgs/raptor/raptorNoLegs.png"),
                raptorLeg = c.getURL("imgs/raptor/raptorLeg.png"),
                raptorLegRight = c.getURL("imgs/raptor/raptorLegRight.png");
            d.querySelector(".raptorNoLegs").setAttribute("src", raptorNoLegs);
            d.querySelector(".lpRaptorLegInnerImg").setAttribute("src", raptorLeg);
            d.querySelector(".lpRaptorLegOuterImg").setAttribute("src", raptorLegRight);
            setTimeout(function () {
                
                d.querySelector(".raptorDiv").style.display = "flex";
                setTimeout(function () {
                    d.querySelector(".raptorDiv").style.opacity = "0";
                }, 6000);
                setTimeout(function () {
                    d.querySelector(".raptorDiv").style.display = "none";
                }, 6500);
            }, 1000);
        });
    },
    treePeeringRaptor: function () {
        console.log('Tree Peering Dino');
        $.get(c.getURL('/dinos/raptorTree1.html'), function (data) {
            var fragment = document.createElement('div');
            fragment.innerHTML = data;
            document.body.appendChild(fragment);
            var raptorTree = c.getURL('imgs/props/treePeek.png'),
                raptorPeer = c.getURL('imgs/raptor/raptorPeerOut.png');
            $('.rapTree').attr("src", raptorTree);
            $('.rapRaptorPeer').attr("src", raptorPeer);
            setTimeout(function () {
                d.querySelector(".raptorDiv").style.display = "flex";
                setTimeout(function () {
                    d.querySelector(".raptorDiv").style.opacity = "0";
                }, 3600);
                setTimeout(function () {
                    d.querySelector(".raptorDiv").style.display = "none";
                }, 4100);
            }, 1000);
        });
    },
    triceratopsWalk: function () {
        console.log('Triceratops Dino');
        $.get(chrome.extension.getURL('walkingtriceratops.html'), function (data) {
            $(data).appendTo('body');
            var triHead = chrome.extension.getURL('imgs/triceratops/tricHead.png'),
                triBody = chrome.extension.getURL('imgs/triceratops/tricNoLegsNoHeadNoTail.png'),
                triLeg1 = chrome.extension.getURL('imgs/triceratops/tricFrontFullLeg.png'),
                triLeg2 = chrome.extension.getURL('imgs/triceratops/tricFrontNotFullLeg.png'),
                triLeg3 = chrome.extension.getURL('imgs/triceratops/tricBackFullLeg.png'),
                triLeg4 = chrome.extension.getURL('imgs/triceratops/tricBackNotFullLeg.png'),
                triTail = chrome.extension.getURL('imgs/triceratops/tricTail.png');
            $('.welHead').attr("src", triHead);
            $('.welBody').attr("src", triBody);
            $('.welFrontLegFull').attr("src", triLeg1);
            $('.welFrontLegNotFull').attr("src", triLeg2);
            $('.welBackLegFull').attr("src", triLeg3);
            $('.welBackLegNotFull').attr("src", triLeg4);
            $('.welTail').attr("src", triTail);
            setTimeout(function () {
                $('.raptorDiv').fadeIn(10);
                $('.raptorDiv').delay(6000).fadeOut(10);
            }, 1000);
        });
    }
    
}


function scaryJumpOutRaptor1() {
    console.log('Spitting Dino');
	$.get(chrome.extension.getURL('raptorScare1.html'), function (data) {
		$(data).appendTo('body');
		var raptorScareImg1 = chrome.extension.getURL('scaryRaptor1.png'),
			screamSRC = chrome.extension.getURL('dinoScream.mp3');
		$('.rapScareImg').attr("src", raptorScareImg1);
		setTimeout(function () {
			var raptorScream = new Audio();
			$(raptorScream).attr("src", screamSRC);
			raptorScream.play();
			$('.raptorDiv').fadeIn(10);
			$('.raptorDiv').delay(2000).fadeOut(100);
		}, 2000);
	});
}
function scarySpittingDino() {
	$.get(chrome.extension.getURL('spittingDino.html'), function (data) {
		$(data).appendTo('body');
		var spitGif = chrome.extension.getURL('diloGif.gif'),
			spifsounds = chrome.extension.getURL('clicking.mp3');
		$('.spitGif').attr("src", spitGif);
		setTimeout(function () {
			var spitsound = new Audio();
			$(spitsound).attr("src", spifsounds);
			spitsound.play();
			$('.spitDiv').show();
			setTimeout(function () {
				$('.spitDiv').remove();
				spitsound.pause();
			}, 1150);
		}, 8000);
	});
}
//function seasonalDino() {
//	$.get(chrome.extension.getURL('seasonal1.html'), function (data) {
//		$(data).appendTo('body');
//		var santaGif = chrome.extension.getURL('santa1.gif'),
//			turekyGobblingSRC = chrome.extension.getURL('gobble1.mp3');
//		$('.santadropdown').attr("src", santaGif);
//		setTimeout(function () {
//			var turekyGobble = new Audio();
//			$(turekyGobble).attr("src", turekyGobblingSRC);
//			setTimeout(function () {
//				turekyGobble.play();
//			}, 700);
//			$('.santaDiv').fadeIn(10);
//			$('.santaDiv').delay(3200).fadeOut(100);
//		}, 2000);
//	});
//}
function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function randomDino(randomNormalNumber, randomScaryNumber) {
	var location = window.location.href,
		funcNormal,
		funcScary,
        normDinoArr = [],
        scaryDinoArr = [];
    if (document.visibilityState === "visible") {
//        dinos.treePeeringRaptor();
        var key;
        for (key in assets.normal) {
            normDinoArr.push(key);            
        }
        for (key in assets.scary) {
            scaryDinoArr.push(key);            
        }
        if (randomNormalNumber !== randomScaryNumber) {
            if (randomNormalNumber === 0) {
//                dinos[(randomFrom(normDinoArr))]();
                var dinoToRun = randomFrom(normDinoArr);
                dinos.buildDino(dinoToRun, "normal", assets["normal"][dinoToRun]);
            } else if (randomScaryNumber === 0) {
//                dinos[(randomFrom(scaryDinoArr))]();
                var dinoToRun = randomFrom(scaryDinoArr);
                dinos.buildDino(dinoToRun, "normal", assets["scary"][dinoToRun]);
            }
        } else {
//            dinos[(randomFrom(normDinoArr))]();
            var dinoToRun = randomFrom(normDinoArr);
            dinos.buildDino(dinoToRun, "normal", assets["normal"][dinoToRun]);
        }
    }
    
}

//var maxNormal = 600,
var maxNormal = 1, //1 out of N times a normal dino should appear on page load
    randomNormalNumber = Math.floor(Math.random() * (maxNormal - 0 + 1)),
//	maxScary = 800,
    maxScary = 8, //1 out of N times a scary dino should appear on page load
    randomScaryNumber = Math.floor(Math.random() * (maxScary - 0 + 1));
console.group("Dinosaur Watch Towers");
console.log("You are currently in Sector 0 right now. We'll keep you up to date on any recent Dinosaur spottings here.");
console.log('Docile dinosaur seen in Sector ' + randomNormalNumber);
console.log('Horrifying dinosaur was spotted in Sector ' + randomScaryNumber);
console.groupEnd("Dinosaur Watch Towers");
randomDino(randomNormalNumber, randomScaryNumber);

var dinoDiv = document.querySelector('.raptorDiv');
document.addEventListener('click', function (event) { //CLOSE DINOSAURS IF THEY ARE CLICKED ON
    if (!event.target.matches('.raptorDiv')) {
        console.log('Dinosaur Closing');
        dinoDiv.style.display = "none";
    }
}, false);



//$('body').on('click', 'div.raptorDiv', function (event) {
//	console.log('Dinosaur Closing');
//	$('.raptorDiv').remove();
//});

//ADD RANDOM RAPTOR GIF TO LOGO IN TOP LEFT
//document.addEventListener("DOMContentLoaded", function() {
//    var headerLogo = document.querySelector('#header__logo');
//	if (headerLogo) {
//		var q = "dinosaur", // search query
//			request = new XMLHttpRequest();
//		request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + q, true);
//		request.onload = function () {
//			if (request.status >= 200 && request.status < 400) {
//				var data = JSON.parse(request.responseText).data.image_url;
//                headerLogo.getElementsByTagName('a')[0].style.display = "none";
//                headerLogo.style.overflow = "hidden";
//				$('#header__logo').prepend('<a style="width: 100%;" href="//www.bodybuilding.com/store"><img style="margin: 0 auto; min-height: 75px; max-height: 75px;" src = "' + data + '"></a>');
//				$('#header__logo img').css('display', 'block');
//			} else {
//				console.log('Reached GIPHY, But API Returned An Error');
//			}
//		};
//		request.onerror = function () {
//			console.log('GIPHY Error - This Will Not Effect Performance');
//		};
//		request.send();
//	}
//});
