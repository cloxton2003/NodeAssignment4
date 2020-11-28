
  
  const CANVAS = document.querySelector('canvas');
  const CTX = CANVAS.getContext('2d');
  var isDrawing, lastPoint;
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  CANVAS.onmousedown = function(e) {
    isDrawing = true;
    lastPoint = { x: e.clientX, y: e.clientY };
  };
  
  CANVAS.onmousemove = function (e) {
  	if (!isDrawing) return;
  		CTX.lineWidth = 1;
  		CTX.lineJoin = CTX.lineCap = 'round';
  		CTX.fillStyle = 'rgba(191, 191, 191, 0.5)';	
  		CTX.strokeStyle = 'rgba(191, 191, 191, 0.5)';
  		CTX.lineCap = 'round';
  		CTX.shadowBlur = 7;
  		CTX.shadowColor = 'rgba(191, 191, 191, 0.5)';
    	CTX.beginPath();
    	
    	CTX.moveTo(lastPoint.x - getRandomInt(0, 2), lastPoint.y - getRandomInt(0, 2));
    	CTX.lineTo(e.clientX - getRandomInt(0, 2), e.clientY - getRandomInt(0, 2));
    	CTX.stroke();
    	
    	CTX.moveTo(lastPoint.x, lastPoint.y);
    	CTX.lineTo(e.clientX, e.clientY);
    	CTX.stroke();
    	
    	CTX.moveTo(lastPoint.x + getRandomInt(0, 2), lastPoint.y + getRandomInt(0, 2));
    	CTX.lineTo(e.clientX + getRandomInt(0, 2), e.clientY + getRandomInt(0, 2));
    	CTX.stroke(); 
    	lastPoint = { x: e.clientX, y: e.clientY };
  };
  
  CANVAS.onmouseup = function() {
    	isDrawing = false;
  };
  
  function resizeCanvas(){
      CTX.canvas.width  = window.innerWidth;
      CTX.canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  
  // --------random greeting------


  let GREETING_CONTAINER = document.querySelector('.index-greeting');
  const greeting = require('greetingsmodule');
  
  window.onload = () => {
    GREETING_CONTAINER.innerHTML = greeting.greet();
  };