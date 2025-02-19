var  p = document.getElementById('id_p');
console.log(p);

//captura o evento load da pagina
window.onload = function (){

    //Localiza o elemento com id "ip_p"
    var p = document.getElementById('id_p')
    console.log(p);

    //configura a propriedade background do elemento
    p.style.backgroundColor = '#0000FF';

    // captura o evento load da pagina
    window.onload = function(){
        //lcaliza elemento com id "id_p"
        var links = p.gerElementsByTagName('a');

        // alerta o atributo href do primeiro link
        alert(links[0].href)
    }
}