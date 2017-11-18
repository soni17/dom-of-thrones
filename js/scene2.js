function scene2() {

  // Setup Stage
  stage = document.querySelector('#stage');
  stageImg = stage.querySelector('#stage-img');
  castle = document.querySelector('#castle');
  castleImgSrc = castle.getAttribute('src');

  // Setup Cast

  // Character 1
  nedContainer = document.createElement("div");
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';

  ned = document.querySelector('#ned');
  ned.style.width = '70%';
  ned.style.position = 'absolute';
  ned.style.top = 0;

  leather = document.querySelector('#leather-armour');
  leather.style.position = 'absolute';
  leather.style.bottom = 0;

  nedContainer.append(ned);
  nedContainer.append(leather);

  // Character 2
  joffContainer = document.createElement("div");
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joffrey = document.querySelector("#joffrey");
  joffrey.style.width = '75%'
  joffrey.style.position = 'absolute'
  joffrey.style.left = '33%'

  kingArmour = document.querySelector("#king")
  kingArmour.style.position = 'absolute'
  kingArmour.style.bottom = 0

  joffContainer.append(joffrey);
  joffContainer.append(kingArmour);



  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword');
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'

  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  frame (function(){
    stageImg.setAttribute('src', castleImgSrc);
    stage.append(nedContainer);
    stage.append(joffContainer);
    stage.append(sword);
  })

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  // Stage direction 2

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

  frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '33%'
    joffrey.style.transform = 'rotateZ(220deg)'
  })

  frame(function() {
    joffrey.style.top = '17%'
    joffrey.style.left = '90%'
    joffrey.style.transform = 'rotateZ(40deg)'
  })
 
  frame(function() {
    joffrey.style.top = '35%'
    joffrey.style.left = '160%'
    joffrey.style.transform = 'rotateZ(260deg)'
  })

  frame(function() {
    joffrey.style.top = '55%'
    joffrey.style.left = '230%'
    joffrey.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    joffrey.style.top = '75%'
    joffrey.style.left = '300%'
    joffrey.style.transform = 'rotateZ(100deg)'
  })

  frame (function(){
    stage.removeChild(joffContainer)
    stage.removeChild(nedContainer)
    stage.removeChild(sword)
  })


}
