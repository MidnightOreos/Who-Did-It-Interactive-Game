
function sceneTwoChange() {
  document.getElementById("imgTwo").style.display = "none";
  document.getElementById("imgThree").style.display = "block";
  setTimeout(function() { document.getElementById("imgFour").style.display = "block" }, 1500);
  document.getElementById("btnOne").style.cssText = "display:none;transition:1.5s;";

  setTimeout(function() { document.getElementById("btnTwo").style.cssText = "display:block;transition:1.5s;" }, 500);

  setTimeout(function() { document.getElementById("btnThree").style.cssText = "display:block;transition:1.5s;" }, 10);
}

function sceneFourChange() {
  document.getElementById("btnTwo").style.cssText = "display:none;transition:1.5s;";

  document.getElementById("imgFour").style.display = "none";

  document.getElementById("imgFive").style.display = "block";
  setTimeout(function() { document.getElementById("imgSix").style.display = "block" }, 5000);
  document.getElementById("btnThree").style.cssText = "display:none;transition:1.5s;";

  setTimeout(function() { document.getElementById("btnFour").style.cssText = "display:block;transition:1.5s;" }, 5000);
}

function sceneFiveChange() {
  document.getElementById("btnFour").style.cssText = "display:none;transition:1.5s;";

  setTimeout(function() { document.getElementById("btnFive").style.cssText = "display:block;transition:1.5s;" }, 0);
}

function sceneSixChange() {
  document.getElementById("btnFive").style.cssText = "display:none;transition:1.5s;";

  setTimeout(function() { document.getElementById("btnSix").style.cssText = "display:block;transition:1.5s;" }, 0);

  setTimeout(function() { document.getElementById("btnSix").style.cssText = "transition:1.5s;top:20%;" }, 2500);

  setTimeout(function() { document.getElementById("btnSeven").style.cssText = "display:block;transition:1.5s;" }, 0);

  setTimeout(function() { document.getElementById("btnEight").style.cssText = "display:block;transition:1.5s;" }, 0);

}



function sceneEightChange() {
  setTimeout(function() { document.getElementById("btnFive").style.cssText = "display:none;transition:0s;" }, 0);
  document.getElementById("btnFour").style.cssText = "display:block;";
  document.getElementById("btnSix").style.cssText = "display:none;";
  document.getElementById("btnSeven").style.cssText = "display:none;";
  document.getElementById("btnEight").style.cssText = "display:none;";

}

/* Looking for Jake*/

function sceneNineChange() {
  document.getElementById("imgFive").style.display = "none";
  document.getElementById("btnSix").style.cssText = "display:none;";
  document.getElementById("btnSeven").style.cssText = "display:none;";
  document.getElementById("btnEight").style.cssText = "display:none;";
  document.getElementById("imgEight").style.display = "block";
  setTimeout(function() { document.getElementById("imgNine").style.cssText = "display:block;transition:1.5s;" }, 1500);
  setTimeout(function() { document.getElementById("imgTen").style.cssText = "display:block;transition:1.5s;" }, 2500);
  setTimeout(function() { document.getElementById("btnNine").style.cssText = "display:block;transition:1.5s;" }, 4500);

  setTimeout(function() { document.getElementById("btnNine").style.cssText = "transition:1.5s;top:20%;" }, 6000);

  setTimeout(function() { document.getElementById("btnTen").style.cssText = "display:block;transition:1.7s;" }, 3000);

  setTimeout(function() { document.getElementById("btnEleven").style.cssText = "display:block;transition:1.7s;" }, 3000);

}


function sceneTenChange() {
  document.getElementById("imgTen").style.display = "none";
  document.getElementById("imgEleven").style.display = "block";
  document.getElementById("btnNine").style.cssText = "display:none;";
  document.getElementById("btnTen").style.cssText = "display:none;";
  document.getElementById("btnEleven").style.cssText = "display:none;";
  setTimeout(function() { document.getElementById("btnTwelve").style.cssText = "display:block;transition:1.5s;" }, 1500);


}

function sceneTenHalves() {
  document.getElementById("btnTwelve").style.cssText = "display:none;";
  document.getElementById("btnThirteen").style.cssText = "display:block;";

}

function sceneTenHalvesTwo() {
  document.getElementById("btnThirteen").style.cssText = "display:none;";
  document.getElementById("btnFourteen").style.cssText = "display:block;";

}

function sceneTenHalvesThree() {
  document.getElementById("btnFourteen").style.cssText = "display:none;";
  document.getElementById("btnFifthteen").style.cssText = "display:block;";

}

function sceneElevenChange() {
  document.getElementById("btnSixteen").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("btnSeventeen").style.cssText = "display:block;transition:1.5s;left:32%;";
  setTimeout(function() { document.getElementById("btnFifthteen").style.cssText = "transition:1.5s;top:20%;" }, 2500);
}

function sceneTwelveChoiceOne() {
  document.getElementById("btnSixteen").style.cssText = "display:none;";
  document.getElementById("btnSeventeen").style.cssText = "display:none;";
  document.getElementById("btnFifthteen").style.cssText = "display:none;";
  document.getElementById("imgTwelve").style.cssText = "display:block;";
  setTimeout(function() {
    document.getElementById("btnEighteen").style.cssText = "display:block;"
  }, 2500);
}

function sceneThirteenChange() {
  document.getElementById("btnEighteen").style.display = "none";
  document.getElementById("btnNineteen").style.display = "block";
  document.getElementById("imgTwelve").style.display="none";
  document.getElementById("eliImage").style.display="block";
}

function sceneFourteenChange() {
  document.getElementById("btnNineteen").style.display = "none";
  document.getElementById("btnTwenty").style.display = "block";
  document.getElementById("eliImage").style.display="none";
  document.getElementById("terranceImage").style.display="block";
}

function sceneFifthteenChange() {
  document.getElementById("btnTwenty").style.display = "none";
  document.getElementById("btnTwentyOne").style.display = "block";
  document.getElementById("terranceImage").style.display="none";
  document.getElementById("imgTwelve").style.display="block";
}

function sceneSixteenChange() {
  document.getElementById("btnTwentyOne").style.display = "none";
  document.getElementById("btnTwentyTwo").style.display = "block";
  document.getElementById("imgTwelve").style.display="none";
  document.getElementById("terranceImage").style.display="block";
}

function sceneSeventeenChange() {
  document.getElementById("btnTwentyTwo").style.display = "none";
  document.getElementById("btnTwentyThree").style.display = "block";
  document.getElementById("terranceImage").style.display="none";
  document.getElementById("eliImage").style.display="block";
}

function sceneEighteenChange() {
  document.getElementById("btnTwentyThree").style.display = "none";
  document.getElementById("btnTwentyFour").style.display = "block";
}


function sceneNineteenChange() {
  document.getElementById("btnTwentyFour").style.display = "none";
  document.getElementById("eliImage").style.display="none";
  document.getElementById("terranceImage").style.display="block";
  document.getElementById("btnTwentySix").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("btnTwentySeven").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("btnTwentyFive").style.display = "block";
  setTimeout(function() { document.getElementById("btnTwentyFive").style.cssText = "transition:1.5s;top:20%;" }, 2500);
}


function switchJewNi() {
  document.getElementById("imgTwelve").style.display = "none";
  document.getElementById("btnTwentyNine").style.display = "none";
  document.getElementById("eliAlone").style.display = "block";
  setTimeout(function() {document.getElementById("eliAloneTalking").style.cssText="display:block;"; }, 1500);
  setTimeout(function() { document.getElementById("bttnThirty").style.cssText = "display:block;"; }, 1500);
}


function switchJewSan() {
  document.getElementById("bttnThirty").style.display = "none";
  document.getElementById("btnThirtyOne").style.display = "block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchJewYon() {
  document.getElementById("btnThirtyOne").style.display = "none";
  document.getElementById("btnThirtyTwo").style.display = "block";
}

function switchJewGo() {
  document.getElementById("btnThirtyTwo").style.display = "none";
  document.getElementById("btnThirtyThree").style.display = "block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchJewRoku() {
  document.getElementById("btnThirtyThree").style.display = "none";
  document.getElementById("btnThirtyFour").style.display = "block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchJewNana() {
  document.getElementById("btnThirtyFour").style.display = "none";
  document.getElementById("btnThirtyFive").style.display = "block";
  setTimeout(function() { document.getElementById("imgPhone").style.cssText = "display:block;";}, 3000);
  setTimeout(function() { document.getElementById("btnThirtySix").style.cssText="display:block;" ;}, 4000);
  setTimeout(function() { document.getElementById("btnThirtyFive").style.cssText="display:none;";}, 2500);
  setTimeout(function() { document.getElementById("imgPhoneAnswer").style.cssText="display:block;";}, 6000);
  setTimeout(function() {document.getElementById("btnThirtySix").style.cssText="display:none;";}, 5500);
  setTimeout(function(){document.getElementById("btnThirtySeven").style.cssText="display:block;" ;}, 6500);
}


function switchJewKyu() {
  document.getElementById("btnThirtySeven").style.display="none";
  document.getElementById("btnThirtyEight").style.display="block";
}

function switchOne() {
  document.getElementById("btnThirtyEight").style.display="none";
  document.getElementById("btnThirtyNine").style.display="block";
}

function switchTwo() {
  document.getElementById("btnThirtyNine").style.display="none";
  document.getElementById("btnForty").style.display="block";
}


function switchThree() {
  document.getElementById("btnForty").style.display="none";
  document.getElementById("btnFortyOne").style.display="block";
  setTimeout(function(){ document.getElementById("btnFortyOne").style.cssText="display:none;";}, 1500);
  setTimeout(function(){document.getElementById("eliAlone").style.cssText="display:block;";}, 2000);
  setTimeout(function(){document.getElementById("imgPhoneAnswer").style.cssText="display:none;";}, 1500);
  setTimeout(function(){document.getElementById("btnFortyTwo").style.cssText="display.block;";}, 2500);
  setTimeout(function(){document.getElementById("imgPhone").style.cssText="display:none;";}, 1500);
  setTimeout(function() {document.getElementById("eliAloneTalking").style.cssText="display:block;";}, 2500);
}
function switchFour(){
  document.getElementById("btnFortyTwo").style.display="none";
  document.getElementById("btnFortyThree").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}
function switchFive(){
  document.getElementById("btnFortyThree").style.display="none";
  document.getElementById("btnFortyFour").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
  setTimeout(function(){document.getElementById("eliAlone").style.cssText="display:block;";}, 2500);
  setTimeout(function() { document.getElementById("btnFortyFour").style.cssText = "transition:1.5s;top:20%;" }, 2500);
  document.getElementById("btnFortyFive").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("btnFortySix").style.cssText = "display:block;transition:1.5s;left:32%;";
}

function switchFiveChoiceTwo(){
  document.getElementById("btnFortyFour").style.display="none";
  document.getElementById("btnFortySix").style.display="none";
  document.getElementById("btnFortyFive").style.display="none";
  document.getElementById("btnFortySeven").style.display="block";
}

function switchSix(){
  document.getElementById("btnFortySeven").style.display="none";
  document.getElementById("btnFortyEight").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchSeven(){
  document.getElementById("btnFortyEight").style.display="none";
  document.getElementById("btnFortyNine").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchEight(){
  document.getElementById("btnFortyNine").style.display="none";
  document.getElementById("btnFifty").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchNine(){
  document.getElementById("btnFifty").style.display="none";
  document.getElementById("btnFiftyOne").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchTen(){
  document.getElementById("btnFiftyOne").style.display="none";
  document.getElementById("btnFiftyTwo").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchEleven(){
  document.getElementById("btnFiftyTwo").style.display="none";
  document.getElementById("btnFiftyThree").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchTwelve(){
  document.getElementById("btnFiftyThree").style.display="none";
  document.getElementById("btnFiftyFour").style.display="block";
}

function switchThirteen(){
  document.getElementById("btnFiftyFour").style.display="none";
  document.getElementById("btnFiftyFive").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchFourteen(){
  document.getElementById("btnFiftyFive").style.display="none";
  document.getElementById("btnFiftySix").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchFifthteen(){
  document.getElementById("btnFiftySix").style.display="none";
  document.getElementById("btnFiftySeven").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("sweaterOff").style.display="block";
}

function switchSixteen(){
  document.getElementById("btnFiftySeven").style.display="none";
  document.getElementById("btnFiftyEight").style.display="block";
  setTimeout(function() { document.getElementById("btnFiftyEight").style.cssText = "transition:1.5s;top:20%;left:27%;" }, 3000);
  document.getElementById("btnFiftyNine").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("btnSixty").style.cssText = "display:block;transition:1.5s;left:32%;";
}

function switchSixteenChoiceOne(){
  document.getElementById("btnFiftyNine").style.display="none";
  document.getElementById("btnSixty").style.display="none";
  document.getElementById("btnFiftyEight").style.display="none";
  document.getElementById("btnSixtyOne").style.display="block";
}

function switchSeventeen(){
  document.getElementById("btnSixtyOne").style.display="none";
  document.getElementById("btnSixtyTwo").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchEighteen(){
  document.getElementById("btnSixtyTwo").style.display="none";
  document.getElementById("btnSixtyThree").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchNineteen(){
  document.getElementById("btnSixtyThree").style.display="none";
  document.getElementById("btnSixtyFour").style.display="block";
  document.getElementById("eliAlone").style.display="none";
  document.getElementById("eliAloneTalking").style.display="block";
}

function switchTwenty(){
  document.getElementById("btnSixtyFour").style.display="none";
  document.getElementById("btnSixtyFive").style.display="block";
  document.getElementById("eliAloneTalking").style.display="none";
  document.getElementById("eliAlone").style.display="block";
}

function switchTwentyOne(){
  document.getElementById("btnSixtyFive").style.display="none";
  document.getElementById("btnSixtySix").style.display="block";
}

function switchTwentyTwo(){
  document.getElementById("btnSixtySix").style.display="none";
  document.getElementById("btnSixtySeven").style.display="none";
  setTimeout(function() { document.getElementById("btnSixtySeven").style.cssText = "transition:1.5s;top:16%;left:20%;" }, 2500);
  document.getElementById("btnSixtyEight").style.cssText = "display:block;transition:1.5s;left:32%;top:23%;";
  document.getElementById("btnSixtyNine").style.cssText = "display:block;transition:1.5s;left:32%;top:23%;";
  document.getElementById("btnSeventy").style.cssText = "display:block;transition:1.5s;left:32%;top:23%;";
}

function switchTwentyOneChoiceOne(){
  document.getElementById("sweaterOff").style.display="none";
  document.getElementById("eliWithBlood").style.display="block";
  document.getElementById("btnSixtySeven").style.display="none";
  document.getElementById("btnSixtyEight").style.display="none";
  document.getElementById("btnSixtyNine").style.display="none";
  document.getElementById("btnSeventy").style.display="none";
  document.getElementById("btnSeventyOne").style.display="block";
}

function switchTwentyThree(){
  document.getElementById("btnSeventyOne").style.display="none";
  document.getElementById("btnSeventyTwo").style.display="block";
  document.getElementById("eliWithBlood").style.display="none";
  document.getElementById("eliWithBloodTalking").style.display="block";
}

function switchTwentyFour(){
  document.getElementById("btnSeventyTwo").style.display="none";
  document.getElementById("btnSeventyThree").style.display="block";
  setTimeout(function() { document.getElementById("btnSeventyThree").style.cssText = "transition:1.5s;top:20%;left:23%;"; }, 2500);
  document.getElementById("btnSeventyFour").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("btnSeventyFive").style.cssText = "display:block;transition:1.5s;left:32%;";
}

function switchTwentySix(){
  document.getElementById("btnSeventyThree").style.display="none";
  document.getElementById("btnSeventyFour").style.display="none";
  document.getElementById("btnSeventyFive").style.display="none";
  document.getElementById("btnSeventySix").style.display="block";
  document.getElementById("eliWithBloodTalking").style.display="none";
  document.getElementById("eliWithBlood").style.display="block";
}

function switchTwentySeven(){
  document.getElementById("btnSeventySix").style.display="none";
  document.getElementById("btnSeventySeven").style.display="block";
  document.getElementById("eliWithBlood").style.display="none";
  document.getElementById("eliWithBloodTalking").style.display="block";
}

function switchTwentyEight(){
  document.getElementById("btnSeventySeven").style.display="none";
  document.getElementById("btnSeventyEight").style.display="block";
}

function switchTwentyNine(){
  document.getElementById("btnSeventyEight").style.display="none";
  document.getElementById("btnSeventyNine").style.display="block";
  document.getElementById("eliWithBloodTalking").style.display="none";
  document.getElementById("imgFifthteen").style.display="block";
  setTimeout(function() { document.getElementById("imgSixteen").style.cssText="display:block;";}, 2500);
  setTimeout(function() { document.getElementById("btnSeventyNine").style.cssText="display:none;";}, 2500);
  setTimeout(function() { document.getElementById("animatedEliKill").style.cssText="display:block;";}, 3500);
  setTimeout(function() { document.getElementById("endTitle").style.cssText="display:block;";}, 4500);
  setTimeout(function() { document.getElementById("endButton").style.cssText="display:block;";}, 4500);
}

function sceneTenChangeChoiceOne() {
  document.getElementById("btnEleven").style.display="none";
  document.getElementById("btnNine").style.display="none";
  document.getElementById("btnTen").style.display="none";
  document.getElementById("elevenBtn").style.display="block";
  setTimeout(function() { document.getElementById("elevenBtn").style.cssText = "top:20%;" }, 3000);

  setTimeout(function() { document.getElementById("twelveBtn").style.cssText = "display:block;transition:1.5s;" }, 1500);

  setTimeout(function() { document.getElementById("thirteenBtn").style.cssText = "display:block;transition:1.5s;" }, 1500);
}

function plotSwitchTwo(){
  document.getElementById("elevenBtn").style.display="none";
  document.getElementById("twelveBtn").style.display="none";
  document.getElementById("thirteenBtn").style.display="none";
  document.getElementById("flickeringHallway").style.display="none";
  document.getElementById("jakesBedroom").style.display="block";
setTimeout(function(){document.getElementById("fourteenBtn").style.cssText="display:block;";}, 3500);
  setTimeout(function() { document.getElementById("fourteenBtn").style.cssText = "top:20%;" }, 5000);

  setTimeout(function() { document.getElementById("fifthteenBtn").style.cssText = "display:block;transition:1.5s;" }, 3000);

  setTimeout(function() { document.getElementById("sixteenBtn").style.cssText = "display:block;transition:1.5s;" }, 3000);
}


function plotSwitchFive(){
  document.getElementById("fourteenBtn").style.display="none";
  document.getElementById("fifthteenBtn").style.display="none";
  document.getElementById("sixteenBtn").style.display="none";
  setTimeout(function() { document.getElementById("seventeenBtn").style.cssText = "display:block;transition:0.5s;" }, 0);
  setTimeout(function() { document.getElementById("eighteenBtn").style.cssText = "display:block;transition:0.5s;" }, 0);
  setTimeout(function() { document.getElementById("nineteenBtn").style.cssText = "display:block;transition:0.5s;" }, 0);
  setTimeout(function() { document.getElementById("twentyBtn").style.cssText = "display:block;transition:0.5s;" }, 0);
}

function plotSwitchSeven(){
  document.getElementById("seventeenBtn").style.display="none";
  document.getElementById("eighteenBtn").style.display="none";
  document.getElementById("nineteenBtn").style.display="none";
  document.getElementById("twentyBtn").style.display="none";
  document.getElementById("openSuitcase").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";
  setTimeout(function(){document.getElementById("twentyOneBtn").style.cssText="display:block;";}, 2750);
  setTimeout(function() { document.getElementById("twentyOneBtn").style.cssText = "top:20%;" }, 6500);

  setTimeout(function() { document.getElementById("twentyTwoBtn").style.cssText = "display:block;transition:1.5s;" }, 5500);

  setTimeout(function() { document.getElementById("twentyThreeBtn").style.cssText = "display:block;transition:1.5s;" }, 5500);
   setTimeout(function(){ document.getElementById("openSuitcase").style.cssText="display:none;";}, 4400);
  setTimeout(function(){ document.getElementById("jakesJournal").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 3350);
}

function plotSwitchTwelve(){
  document.getElementById("jakesJournal").style.display="none";
  document.getElementById("twentyOneBtn").style.display="none";
  document.getElementById("twentyTwoBtn").style.display="none";
  document.getElementById("twentyThreeBtn").style.display="none";
  document.getElementById("jakesBedroom").style.display="block";
  setTimeout(function() { document.getElementById("seventeenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("eighteenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("nineteenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("twentyBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
}


function plotSwitchThirteen(){
  document.getElementById("jakesJournal").style.display="none";
  document.getElementById("twentyOneBtn").style.display="none";
  document.getElementById("twentyTwoBtn").style.display="none";
  document.getElementById("twentyThreeBtn").style.display="none";
  setTimeout(function(){document.getElementById("jakesOpenJournal").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 0);
  setTimeout(function(){document.getElementById("jakesOpenJournal").style.cssText="display:none;";}, 3510);  
  setTimeout(function(){document.getElementById("jakesJournalWords").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 2500);
  setTimeout(function(){document.getElementById("twentyFourBtn").style.cssText="display:block;"}, 5500);
}

function jakesBedroomOptions(){
  document.getElementById("jakesJournalWords").style.display="none";
  document.getElementById("twentyFourBtn").style.display="none";
  document.getElementById("jakesBedroom").style.display="block";
  setTimeout(function(){document.getElementById("twentyFourOver").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 200);
  setTimeout(function(){document.getElementById("twentyFourOver").style.cssText="display:none";}, 4500);
  setTimeout(function() { document.getElementById("seventeenBtn").style.cssText = "display:block;transition:0.5s;" }, 5000);
  setTimeout(function() { document.getElementById("eighteenBtn").style.cssText = "display:block;transition:0.5s;" }, 5000);
  setTimeout(function() { document.getElementById("nineteenBtn").style.cssText = "display:block;transition:0.5s;" }, 5000);
  setTimeout(function() { document.getElementById("twentyBtn").style.cssText = "display:block;transition:0.5s;" }, 5000);
}


function plotSwitchEight(){
  document.getElementById("seventeenBtn").style.display="none";
  document.getElementById("eighteenBtn").style.display="none";
  document.getElementById("nineteenBtn").style.display="none";
  document.getElementById("twentyBtn").style.display="none";
  document.getElementById("twentyFiveBtn").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";
  setTimeout(function(){document.getElementById("twentyFiveBtn").style.cssText="display:none";}, 3500);
  setTimeout(function(){document.getElementById("jakesDrawers").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 2800);
  setTimeout(function(){document.getElementById("twentySevenBtn").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 5500);
  setTimeout(function(){document.getElementById("twentySixBtn").style.cssText="display:block;"}, 6500);
}

function jakesDrawersBedroomOptions(){
  document.getElementById("twentySixBtn").style.display="none";
  document.getElementById("twentySevenBtn").style.display="none";
  document.getElementById("jakesDrawers").style.display="none";
  document.getElementById("jakesBedroom").style.display="block";
  setTimeout(function() { document.getElementById("seventeenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("eighteenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("nineteenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("twentyBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
}

function plotSwitchNine(){
  document.getElementById("seventeenBtn").style.display="none";
  document.getElementById("eighteenBtn").style.display="none";
  document.getElementById("nineteenBtn").style.display="none";
  document.getElementById("twentyBtn").style.display="none";
  setTimeout(function(){document.getElementById("twentyEightBtn").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 1800);
  setTimeout(function(){document.getElementById("jakesBedFar").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 1000);
}

function bedroomOne(){
  document.getElementById("twentyEightBtn").style.display="none";
  document.getElementById("twentyNineBtn").style.display="block";
}

function bedroomTwo(){
  document.getElementById("twentyNineBtn").style.display="none";
  setTimeout(function(){document.getElementById("thirtyBtn").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 1500);
  setTimeout(function(){document.getElementById("jakesBedCloser").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 100);
}

function bedroomThree(){
  document.getElementById("thirtyBtn").style.display="none";
  document.getElementById("thirtyOneBtn").style.display="block";
}

function bedroomFour(){
  document.getElementById("thirtyOneBtn").style.display="none";
  document.getElementById("thirtyTwoBtn").style.display="block";
  setTimeout(function(){document.getElementById("jakesBedFar").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 1000);
  setTimeout(function(){document.getElementById("thirtyThreeBtn").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 2000);
}

function jakesBedBedroomOptions(){
  document.getElementById("thirtyThreeBtn").style.display="none";
  document.getElementById("thirtyTwoBtn").style.display="none";
  document.getElementById("jakesBedFar").style.display="none";
  document.getElementById("jakesBedCloser").style.display="none";
  document.getElementById("jakesBedroom").style.display="block";
  setTimeout(function() { document.getElementById("seventeenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("eighteenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("nineteenBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  setTimeout(function() { document.getElementById("twentyBtn").style.cssText = "display:block;transition:0.5s;" }, 500);
  document.getElementById("flickeringHallway").style.display="none";
}

function plotSwitchTen(){
  document.getElementById("seventeenBtn").style.display="none";
  document.getElementById("eighteenBtn").style.display="none";
  document.getElementById("nineteenBtn").style.display="none";
  document.getElementById("twentyBtn").style.display="none";
  document.getElementById("jakesBedroom").style.display="none";
  document.getElementById("jakeBathroomFlicker").style.display="block";
  setTimeout(function(){ document.getElementById("thirtyFourBtn").style.cssText="display:block;";}, 4000);
  setTimeout(function(){ document.getElementById("jakeBathroomFlicker").style.cssText="display:none;";}, 4000);
  setTimeout(function(){ document.getElementById("jakeBathroomCloser").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 2900);
}

function plotSwitchFourteen(){
  document.getElementById("thirtyFourBtn").style.display="none";
  document.getElementById("thirtyFiveBtn").style.display="block";
}

function plotSwitchFifthteen(){
  document.getElementById("thirtyFiveBtn").style.display="none";
  document.getElementById("thirtySixBtn").style.display="block";
}

function plotSwitchSixteen(){
  document.getElementById("thirtySixBtn").style.display="none";
  document.getElementById("thirtySevenBtn").style.display="block";
}

function plotSwitchSeventeen(){
  document.getElementById("thirtySevenBtn").style.display="none";
  document.getElementById("thirtyEightBtn").style.display="block";
}

function plotSwitchEighteen(){
  document.getElementById("thirtyEightBtn").style.display="none";
  document.getElementById("thirtyNineBtn").style.display="block";
}

function plotSwitchNineteen(){
  document.getElementById("thirtyNineBtn").style.display="none";
  document.getElementById("fortyBtn").style.display="block";
}

function plotSwitchTwenty(){
  document.getElementById("fortyBtn").style.display="none";
  document.getElementById("fortyOneBtn").style.display="block";
}

function plotSwitchTwentyOne(){
  document.getElementById("fortyOneBtn").style.display="none";
  document.getElementById("fortyTwoBtn").style.display="block";
}

function plotSwitchTwentyTwo(){
  document.getElementById("fortyTwoBtn").style.display="none";
  document.getElementById("fortyThreeBtn").style.display="block";
}


function plotSwitchTwentyThree(){
  document.getElementById("fortyFourBtn").style.display="none";
  document.getElementById("fortyThreeBtn").style.display="none";
  document.getElementById("fortyTwoBtn").style.display="none";
  setTimeout(function(){ document.getElementById("eliKillBathroom").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 0);
  setTimeout(function(){document.getElementById("fortyFourBtn").style.cssText="display:block;";}, 2200);
  setTimeout(function() { document.getElementById("fortyFourBtn").style.cssText = "transition:1.5s;top:20%;left:31%;"; }, 3000);
  document.getElementById("fortyFiveBtn").style.cssText = "display:block;transition:1.5s;left:32%;";
  document.getElementById("fortySixBtn").style.cssText = "display:block;transition:1.5s;left:32%;";
}

function plotSwitchTwentyFive(){
  document.getElementById("terranceRunning").style.display="block";
  document.getElementById("eliKillBathroom").style.display="none";
  document.getElementById("fortyFourBtn").style.display="none";
  document.getElementById("fortyFiveBtn").style.display="none";
  document.getElementById("fortySixBtn").style.display="none";
  setTimeout(function(){document.getElementById("fortySevenBtn").style.cssText="display:block;";}, 2000),
  setTimeout(function() { document.getElementById("fortySevenBtn").style.cssText = "transition:1.5s;top:20%;left:31%;"; }, 3000);
  setTimeout(function(){ document.getElementById("fortyEightBtn").style.cssText = "display:block;transition:1.5s;left:32%;";}, 1500);
  setTimeout(function(){ document.getElementById("fortyNineBtn").style.cssText = "display:block;transition:1.5s;left:32%;";}, 1500);
}

function plotSwitchTwentySeven(){
  document.getElementById("fortySevenBtn").style.display="none";
  document.getElementById("fortyEightBtn").style.display="none";
  document.getElementById("fortyNineBtn").style.display="none";
  document.getElementById("jakeBathroomCloser").style.display="none";
  document.getElementById("jakeBathroomFlicker").style.display="none";
  document.getElementById("terranceRunning").style.display="none";
  document.getElementById("jakesBedroom").style.display="none";
  document.getElementById("terranceTripped").style.display="block";
  setTimeout(function(){ document.getElementById("fiftyOneBtn").style.cssText="display:block;";}, 1700);
  setTimeout(function(){ document.getElementById("terranceTripped").style.cssText="display:none;";}, 2800);
  setTimeout(function(){ document.getElementById("fiftyOneBtn").style.cssText="display:none;";}, 2700);
  setTimeout(function(){ document.getElementById("fiftyBtn").style.cssText="display:block;";}, 3000);
  setTimeout(function(){ document.getElementById("fiftyBtn").style.cssText="display:none;";}, 5000);
  setTimeout(function(){ document.getElementById("youTripped").style.cssText="display:block;";}, 2250);
  setTimeout(function(){ document.getElementById("youTripped").style.cssText="display:none;";}, 5550);
  setTimeout(function() {
  document.getElementById("animatedEliKill").style.cssText="display:block;";}, 5400);
  setTimeout(function() { document.getElementById("endTitle").style.cssText="display:block;";}, 7500);
  setTimeout(function() { document.getElementById("endButton").style.cssText="display:block;";}, 8500);
}

function plotSwitchTwentyEight(){
  document.getElementById("fortyFourBtn").style.display="none";
  document.getElementById("fortyThreeBtn").style.display="none";
  document.getElementById("fortyTwoBtn").style.display="none";
  document.getElementById("fortyEightBtn").style.display="none";
  document.getElementById("fortyNineBtn").style.display="none";
  document.getElementById("fortySevenBtn").style.display="none";
  document.getElementById("boatLifeBoat").style.display="block";
  document.getElementById("endTitleTwo").style.display="block";
  setTimeout(function() { document.getElementById("endButton").style.cssText="display:block;";}, 1500);
}

function plotSwitchSix(){
  document.getElementById("fourteenBtn").style.display="none";
  document.getElementById("fifthteenBtn").style.display="none";
  document.getElementById("sixteenBtn").style.display="none";
  document.getElementById("elevenBtn").style.display="none";
  document.getElementById("twelveBtn").style.display="none";
  document.getElementById("thirteenBtn").style.display="none";
  document.getElementById("flickeringHallway").style.display="none";
  document.getElementById("jakeBathroomFlicker").style.display="block";
  setTimeout(function(){ document.getElementById("thirtyFourBtn").style.cssText="display:block;";}, 4000);
  setTimeout(function(){ document.getElementById("jakeBathroomFlicker").style.cssText="display:none;";}, 4000);
  setTimeout(function(){ document.getElementById("jakeBathroomCloser").style.cssText="animation:fadeIn 1s forwards 1s;visibility:hidden;opacity:0;";}, 2900);
}

function goWithTerrance(){
  document.getElementById("btnTwentySeven").style.display="none";
  document.getElementById("btnTwentySix").style.display="none";
  document.getElementById("terranceImage").style.display="none";
  document.getElementById("flickeringHallway").style.display="block";
  document.getElementById("elevenBtn").style.display="block";
  setTimeout(function(){document.getElementById("elevenBtn").style.cssText="display:block;";}, 1500);
  setTimeout(function() { document.getElementById("elevenBtn").style.cssText = "top:20%;" }, 5000);

  setTimeout(function() { document.getElementById("twelveBtn").style.cssText = "display:block;transition:1.5s;" }, 2500);

  setTimeout(function() { document.getElementById("thirteenBtn").style.cssText = "display:block;transition:1.5s;" }, 2500);
}

function sceneTwelveChoiceTwo(){
  document.getElementById("btnFifthteen").style.display="none";
  document.getElementById("btnSixteen").style.display="none";
  document.getElementById("btnSeventeen").style.display="none";
  document.getElementById("imgEleven").style.display="none";
  document.getElementById("flickeringHallway").style.display="block";
  setTimeout(function(){document.getElementById("elevenBtn").style.cssText="display:block;";}, 1500);
  setTimeout(function() { document.getElementById("elevenBtn").style.cssText = "top:20%;" }, 4000);

  setTimeout(function() { document.getElementById("twelveBtn").style.cssText = "display:block;transition:1.5s;" }, 2500);

  setTimeout(function() { document.getElementById("thirteenBtn").style.cssText = "display:block;transition:1.5s;" }, 2500);
}





/*
  setTimeout(function() { document.getElementById("btnNine").style.cssText = "transition:1.5s;top:20%;" }, 6000);

  setTimeout(function() { document.getElementById("btnTen").style.cssText = "display:block;transition:1.7s;" }, 3000);

  setTimeout(function() { document.getElementById("btnEleven").style.cssText = "display:block;transition:1.7s;" }, 3000);
*/