var lienzo=null, canvas=null;
var x=50,y=50;
function iniciar()
{
  canvas=document.getElementById('lienzo');
  lienzo=canvas.getContext('2d');
  run();
}
function run()
{
  setTimeout(run, 17); //Ejecuta run cada 17 ms.
  act();
  paint(lienzo);
}
function act()
{
  if(x>canvas.width)
    x=0;
  else
    x+=2;
}
function paint(lienzo)
{
  var gradiente=lienzo.createLinearGradient(0,0,0,canvas.height);
  gradiente.addColorStop(0.5, '#0000FF');
  gradiente.addColorStop(1, '#000000');
  lienzo.fillStyle=gradiente;
  lienzo.fillRect(0,0,canvas.width,canvas.height);
  lienzo.fillStyle='#0f0';
  lienzo.fillRect(x,y,10,10);
}
window.addEventListener("load", iniciar, false);
