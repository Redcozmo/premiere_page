/*var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';
alert('Coucou !');

function multiplier(num1,num2) {
  var résultat = num1 * num2;
  return résultat;
}
let nb1=4;
let nb2=7;
let resultat;
resultat = multiplier(nb1,nb2);
alert(`************************************************\n
        Ma première fenêtre popu avec JavaScript !! \n
      ************************************************\n\n
       ${nb1} multiplié par ${nb2} est égal à ${resultat}`);


document.querySelector('html').onclick = function()
{
alert('Aïe, arrêtez de cliquer !!');
}
*/

var monImage = document.querySelector('img');

monImage.onclick = function() {
    var monSrc = monImage.getAttribute('src');
    if(monSrc === 'images/firefox1.png') {
      monImage.setAttribute ('src','images/firefox2.png');
    } else {
      monImage.setAttribute ('src','images/firefox1.png');
    }
}
