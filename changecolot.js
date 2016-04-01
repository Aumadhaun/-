	(function(){

  var m=document.getElementById('color'),

      i=0,

     n=m.appendChild(document.createTextNode('n'));

  m.onclick=function(e){

    var t=e?e.target:window.event.srcElement;

    if(t!=m) t.className=t.className?i--&&'':++i&&'selected';
 //n.data=i;
  }

}())


	

