 const opacity = x => ((confetti.Opacity) ? Math.random() + 0.5 :1); 
  const rotate = x => ((confetti.Rotation) ? Math.floor(Math.random() * 70):0);
  const size = x =>((confetti.Size) ? 1 + (Math.random() - 1.3) : 1);
  const defaultopts = {
    rows: 10,
    columns: 10,
    Opacity: false,
    Size: false,
    Rotation: true,
    Icons: [
      './confetti/Ellipse.svg',
      './confetti/Vector.svg',
      './confetti/Line.svg',
      './confetti/Polygon.svg',
      './confetti/Text.svg',
      './confetti/Star.svg'
    ],
    Color : ['#4DA1DA', '#A4D77C']
  };
  const generateConfetti = (element,opts) => {
      opts=Object.assign({},defaultopts, opts);
  	var style=document.createElement('style');
  	style.innerHTML=""+element+"-parent{overflow:hidden;position:relative;left:0;z-index:-1;width:100%;height:50vh}"+element+"{width:100%;height:50vh;padding:0;position:absolute}.confetti-cell{position:absolute;top:0;left:0;width:20%;height:20%;opacity:0;animation:350ms fadeIn cubic-bezier(0.22,0.61,0.36,1);animation-fill-mode:forwards}.confetti-cell .icon{position:absolute;top:0;left:0;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;width:50px;height:50px;display:block;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat}@keyframes fadeIn{100%{opacity:1;transform:scale(1) translate3d(0,0,0)}}.confetti-cell{width:' + (100 / confetti.columns) + '%;height:' + (100 / confetti.rows) + '%;}";
    document.body.appendChild(style);
    var parent = document.createElement('div');
    parent.setAttribute('class',element.split('.')[1]+'-parent');
    Array.prototype.forEach.call(document.querySelectorAll(element), function(element) {
    		element.parentNode.insertBefore(parent, element);
    		parent.appendChild(element);
    		parent=parent.cloneNode(true);
        	
      });
    for(var i = 0;i < opts.rows; i++) {
      for(var j = 0;j < opts.columns; j++) {
        let icon = Math.floor(Math.random() * opts.Icons.length);
        let cell = document.createElement('div');
        cell.setAttribute("style",'top:' + (100 / opts.rows) * i + '%;left:' + (100 / opts.columns) * j +'%;animation-delay:' + (j * 100) + 'ms;');
        cell.setAttribute("class","confetti-cell");
        cell.innerHTML='<i class="icon i'+ icon +'" style="background-color:'+opts.Color[Math.floor(Math.random() * 4)]+';top:'+Math.floor(Math.random() * 100)+'%;left:'+Math.floor(Math.random() * 100)+'%;opacity:' + opacity()+ ';transform:rotate(' + rotate() + 'deg) scale(' + size() + ');-webkit-mask-image: url('+opts.Icons[icon]+');"></i>';
        Array.prototype.forEach.call(document.querySelectorAll(element), function(element) {
        	element.appendChild(cell);
        	cell = cell.cloneNode(true);

      });
    }
  }
}
