/*jslint devel: true, nomen: true, sloppy: true, browser: true, regexp: true*/
/*global $, chrome, Audio: false*/
function runningRaptor() {
	console.log('running');
	$.get(chrome.extension.getURL('raptorRun.html'), function (data) {
		$(data).appendTo('body');
		var raptorNoLegs = chrome.extension.getURL('raptorNoLegs.png'),
			raptorLeg = chrome.extension.getURL('raptorLeg.png'),
			raptorLegRight = chrome.extension.getURL('raptorLegRight.png');
		$('.raptorNoLegs').attr("src", raptorNoLegs);
		$('.lpRaptorLegInnerImg').attr("src", raptorLeg);
		$('.lpRaptorLegOuterImg').attr("src", raptorLegRight);
		setTimeout(function () {
			$('.raptorDiv').fadeIn(100);
			$('.raptorDiv').delay(6000).fadeOut(100);
		}, 3000);
	});
}
function treePeeringRaptor() {
	$.get(chrome.extension.getURL('raptorTree1.html'), function (data) {
		$(data).appendTo('body');
		var raptorTree = chrome.extension.getURL('treePeek.png'),
			raptorPeer = chrome.extension.getURL('raptorPeerOut.png');
		$('.rapTree').attr("src", raptorTree);
		$('.rapRaptorPeer').attr("src", raptorPeer);
		setTimeout(function () {
			$('.raptorDiv').fadeIn(100);
			$('.raptorDiv').delay(3600).fadeOut(100);
		}, 17000);
	});
}
function triceratopsWalk() {
	$.get(chrome.extension.getURL('welcome1.html'), function (data) {
		$(data).appendTo('body');
		var triHead = chrome.extension.getURL('tricHead.png'),
			triBody = chrome.extension.getURL('tricNoLegsNoHeadNoTail.png'),
			triLeg1 = chrome.extension.getURL('tricFrontFullLeg.png'),
			triLeg2 = chrome.extension.getURL('tricFrontNotFullLeg.png'),
			triLeg3 = chrome.extension.getURL('tricBackFullLeg.png'),
			triLeg4 = chrome.extension.getURL('tricBackNotFullLeg.png'),
			triTail = chrome.extension.getURL('tricTail.png');
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
		}, 16000);
	});
}
function scaryJumpOutRaptor1() {
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
		}, 26000);
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
var maxNormal = 600,
	randomNormalNumber = Math.floor(Math.random() * (maxNormal - 0 + 1)),
	maxScary = 800,
	randomScaryNumber = Math.floor(Math.random() * (maxScary - 0 + 1));
console.log('Docile dinosaur seen in Sector ' + randomNormalNumber);
console.log('Scary Ass dinosaur seen in Sector ' + randomScaryNumber);
function randomFrom(array) {return array[Math.floor(Math.random() * array.length)]; }
function randomRaptor() {
	var location = window.location.href,
		funcNormal,
		funcScary;
	if (location.indexOf("bodybuilding.com") === -1 && location.indexOf("jira/browse") === -1 && location.indexOf("body.local") === -1 && location.indexOf("body.stage") === -1 && location.indexOf("bcc") === -1) {
		if (document.visibilityState === "visible") {
			if (randomNormalNumber !== randomScaryNumber) {
				if (randomNormalNumber === 1) {
					funcNormal = randomFrom([runningRaptor, treePeeringRaptor, triceratopsWalk]);
					(funcNormal)();
				} else if (randomScaryNumber === 1) {
					funcScary = randomFrom([scaryJumpOutRaptor1, scarySpittingDino]);
					(funcScary)();
				}
			} else {
				funcNormal = randomFrom([runningRaptor, treePeeringRaptor, triceratopsWalk]);
				(funcNormal)();
			}
		}
    }
}
randomRaptor();

//CLOSE DINOSAURS IF THEY ARE CLICKED ON
$('body').on('click', 'div.raptorDiv', function (event) {
	console.log('Dinosaur Closing');
	$('.raptorDiv').remove();
});

//ADD RANDOM RAPTOR GIF TO LOGO IN TOP LEFT
$(document).ready(function () {
	if ($('#header__logo').length) {
		var q = "dinosaur", // search query
			request = new XMLHttpRequest();
		request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + q, true);
		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.responseText).data.image_url;
				$('#header__logo a').hide();
				$('#header__logo').css('overflow', 'hidden');
				$('#header__logo').prepend('<a style="width: 100%;" href="//www.bodybuilding.com/store"><img style="margin: 0 auto; min-height: 75px; max-height: 75px;" src = "' + data + '"></a>');
				$('#header__logo img').css('display', 'block');
			} else {
				console.log('Reached GIPHY, But API Returned An Error');
			}
		};
		request.onerror = function () {
			console.log('GIPHY Error - This Will Not Effect Performance');
		};
		request.send();
	}
});