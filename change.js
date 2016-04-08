if(window.addEventListener) {
    window.addEventListener('load', function () {
    
    var canvas, context, tool;

    function init () {
        // Находим canvas элемент
        canvas = document.getElementById('tablet');
        
        if (!canvas) {
            alert('Ошибка! Canvas элемент не найден!');
            return;
        }

        if (!canvas.getContext) {
            alert('Ошибка: canvas.getContext не существует!');
            return;
        }

        // Получаем 2D canvas context.
        context = canvas.getContext('2d');
        if (!context) {
            alert('Ошибка: getContext! не существует');
            return;
        }
		

        tool = new tool_pencil();
        canvas.addEventListener('mousedown', ev_canvas, false);
        canvas.addEventListener('mousemove', ev_canvas, false);
        canvas.addEventListener('mouseup',   ev_canvas, false);
    }



    function tool_pencil () {
        var tool = this;
        this.started = false;
		
		
		var color
		
	changeColor = function(color){
		context.strokeStyle = color;	
	};
	changeThickness = function(thickness) {
		context.lineWidth = thickness;
	};
	
	rgb = function() {
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
context.strokeStyle = rgb;
};
	
	/*gradientColor = function(color){
		context.strokeStyle = ('rgba(255, 0, 0, 0.000)');
      context.strokeStyle =('rgba(255, 0, 0, 1.000)');
      context.strokeStyle =('rgba(255, 252, 0, 1.000)');
      context.strokeStyle =('rgba(1, 180, 57, 1.000)');
      context.strokeStyle =('rgba(0, 234, 255, 1.000)');
      context.strokeStyle =('rgba(0, 3, 144, 1.000)');
      context.strokeStyle =('rgba(255, 0, 198, 1.000)');
      context.strokeStyle =('rgba(255, 0, 198, 0.000)');
	};*/
	
	clearCanvas = function() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	}
	
		
    
		
        this.mousedown = function (ev) {
            context.beginPath();
            context.moveTo(ev._x, ev._y);
            tool.started = true;
        };

        // Эта функция вызывается каждый раз, когда вы перемещаете мышь.
        // Но рисование происходит только когда вы удерживаете кнопку мыши
        // нажатой.
        this.mousemove = function (ev) {
            if (tool.started) {
                context.lineTo(ev._x, ev._y);
                context.stroke();
            }
        };

        // Событие при отпускании мыши
        this.mouseup = function (ev) {
            if (tool.started) {
                tool.mousemove(ev);
                tool.started = false;
            }
        };
    }

    // Эта функция определяет позицию курсора относительно холста
    function ev_canvas (ev) {
        if (ev.layerX || ev.layerX == 0) { // Firefox
            ev._x = ev.layerX;
            ev._y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
            ev._x = ev.offsetX;
            ev._y = ev.offsetY;
        }

        // Вызываем обработчик события tool
        var func = tool[ev.type];
        if (func) {
            func(ev);
        }
    }

    init();
	

}, false);
 }

	

