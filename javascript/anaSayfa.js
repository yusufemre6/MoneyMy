var $container = $('#threejs');
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,10000);
var scene = new THREE.Scene();
var mouseX = 0, mouseY = 0;

// Added that code Implementation from a forked one 
// https://codepen.io/teddarcuri/pen/jbEbyZ
// Many Thanks to @teddarcuri
// Uncomment code below for tunnel steering!
// You will fly through the walls like in Mario Kart, haha.
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

scene.add(camera);
renderer.setSize(window.innerWidth, window.innerHeight);
$container.append(renderer.domElement);

// 
//window.addEventListener( 'resize', onWindowResize, false );
/////////////////////////////////////////

 //Console
 var Controls = function() {
   this.speed = 2;
   this.rotation = 0;
 };

 var text = new Controls();

/////////////////////////////////////////



// Normalmaterial
var normalMaterial = new THREE.MeshNormalMaterial({});


// Torus
function Torus(f){
  this.b = new THREE.Mesh(new THREE.TorusGeometry( 160, 75, 2, 13),normalMaterial);
  this.b.position.x = 57*Math.cos(f);
  this.b.position.y = 57*Math.sin(f);
  this.b.position.z = f*1.25;
  this.b.rotation.z = f*0.03;
}
		
var numTorus = 80;
var tabTorus = [];
for(var i=0; i<numTorus; i++){
  tabTorus.push(new Torus(-i*13));
  scene.add(tabTorus[i].b);
}	


// Update
function update(){
  for(var i=0; i<numTorus; i++){
    tabTorus[i].b.position.z+=text.speed;
    tabTorus[i].b.rotation.z+=i*text.rotation/10000;
    if(tabTorus[i].b.position.z>0)
    {
      tabTorus[i].b.position.z=-1000;
    }
  }
}

function onWindowResize() {

    const containerWidth = $container.width();
    const containerHeight = $container.width();

    windowHalfX = containerWidth / 2;
    windowHalfY = containerHeight / 2;

    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(containerWidth, containerHeight);
}

$(window).on('load resize', onWindowResize);


function onDocumentMouseMove(event) {
    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );
}

// Render
function render() {
  requestAnimationFrame( render);

  camera.position.x += ( mouseX - camera.position.x ) * .05;
  camera.position.y += ( - mouseY - camera.position.y ) * .05;

  renderer.render(scene, camera);
  update();
}

render();

const slider = document.querySelector('.slider');
const cardContainer = document.querySelector('.card-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = ['Kart 1', 'Kart 2', 'Kart 3', 'Kart 4', 'Kart 5', 'Kart 6', 'Kart 7', 'Kart 8', 'Kart 9', 'Kart 10'];
let currentIndex = 0;
let slideCount = 4;

function showCards(index) {
  for (let i = index; i < index + slideCount; i++) {
    if (i >= cards.length) break;
    const card = document.createElement('div');
    card.className = 'card';
    cardContainer.appendChild(card);
  }
}

function updateSlider() {
  if (window.innerWidth <= 350) {
    slideCount = 1;
  } else {
    slideCount = 4;
  }
  showCards(currentIndex);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex + slideCount > cards.length) {
    currentIndex = cards.length - slideCount;
  }
  showCards(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  showCards(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
window.addEventListener('resize', updateSlider);

updateSlider();
