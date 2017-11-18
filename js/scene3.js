function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage');
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')



  // Setup Cast

  // Character 1
  danerysContainer = document.createElement("div");
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width = '10%';
  danerysContainer.style.height = '45%'
  danerysContainer.style.top = '45%';
  danerysContainer.style.left = '10%';

  danerys = document.querySelector('#danerys');
  danerys.style.width = '80%';
  danerys.style.position = 'relative';
  danerys.style.top = '3%';
  blueDress = document.querySelector("#blue-dress");

  danerysContainer.append(danerys);
  danerysContainer.append(blueDress);


  // Character 2
  drogoContainer = document.createElement("div");
  drogoContainer.style.position = 'absolute';
  drogoContainer.style.width = '10%';
  drogoContainer.style.height = '45%';
  drogoContainer.style.top = '45%';
  drogoContainer.style.right = '10%';

  drogo = document.querySelector('#drogo');
  drogo.style.width = '80%';
  drogo.style.position = 'relative';
  drogo.style.top = '3%';
  drogo.style.left = '10%';

  drogoSuit = document.querySelector("#bulky-man");

  drogoContainer.append(drogo);
  drogoContainer.append(drogoSuit);


  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg');
  egg.style.position = 'absolute'
  egg.style.width = '5%'
  egg.style.top = '60%';
  egg.style.left = '17%'


  // Prop 2

  // Action!

  // Stage direction 1

  frame(function(){
    stageImg.setAttribute('src', mySrc)
    stage.append(danerysContainer);
    stage.append(drogoContainer);
    stage.append(egg);
  })

  frame(function() {
    egg.style.top = '60%';
    egg.style.left = '17%'
    egg.style.transform = 'rotateZ(40deg)'
    })
  frame(function() {
    egg.style.top = '58%';
    egg.style.left = '25%'
    egg.style.transform = 'rotateZ(80deg)'
  })
  frame(function() {
    egg.style.top = '50%';
    egg.style.left = '35%'
    egg.style.transform = 'rotateZ(120deg)'
  })
  frame(function() {
    egg.style.top = '45%';
    egg.style.left = '45%'
    egg.style.transform = 'rotateZ(160deg)'
  })
  frame(function() {
    egg.style.top = '50%';
    egg.style.left = '55%'
    egg.style.transform = 'rotateZ(220deg)'
  })

  frame(function() {
    egg.style.top = '55%';
    egg.style.left = '65%'
    egg.style.transform = 'rotateZ(260deg)'
  })

  frame(function() {
    egg.style.top = '58%';
    egg.style.left = '70%'
    egg.style.transform = 'rotateZ(300deg)'
  })

  frame(function() {
    egg.style.top = '60%';
    egg.style.left = '78%'
    egg.style.transform = 'rotateZ(340deg)'
  })

  frame(function() {
    egg.style.top = '60%';
    egg.style.left = '78%'
    egg.style.transform = 'rotateZ(360deg)'
  })

  frame(function() {
    egg.style.top = '50%';
    egg.style.left = '60%'
    egg.style.transform = 'rotateZ(320deg)'
  })


  frame(function() {
    egg.style.top = '40%';
    egg.style.left = '50%'
    egg.style.transform = 'rotateZ(280deg)'
  })

  frame(function() {
    egg.style.top = '35%';
    egg.style.left = '40%'
    egg.style.transform = 'rotateZ(220deg)'
  })

  frame(function() {
    egg.style.top = '40%';
    egg.style.left = '30%'
    egg.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    egg.style.top = '50%';
    egg.style.left = '22%'
    egg.style.transform = 'rotateZ(120deg)'
  })

  frame(function() {
    egg.style.top = '60%';
    egg.style.left = '17%'
    egg.style.transform = 'rotateZ(50deg)'
  })




  // Stage direction 2

  frame(function() {
    stage.removeChild(danerysContainer);
    stage.removeChild(drogoContainer);
    stage.removeChild(egg);
  })

}
