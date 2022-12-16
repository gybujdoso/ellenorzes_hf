function Ellenorzes(){

    event.preventDefault(); /* ne kerüljön továbbításra a kitöltött adat a szerverfelé */
    var tnev = document.getElementById("tnev");
    var email = document.getElementById("email");
    var unev = document.getElementById("unev");
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");

    if(tnev.value=="") {
        window.alert("Szíveskedj megadni a teljes neved");
        tnev.focus(); /* rubrikára visszaadjuk a beírás lehetőségét "focus" */
        return;
    }
    if(unev.value=="") {
        window.alert("Szíveskedj megadni a felhasználói neved");
        tnev.focus(); 
        return;
    }

    if(email.value=="") {
        window.alert("Szíveskedj megadni a teljes email címed, hogy napi szinten értesülhess a legújabb ajánlatainkról");
        email.focus();
        return;
    }

    if(pwd1.value==pwd2.value) window.alert("Megfelelő a jelszó"); else window.alert("A jelszó a két rubrikában nem ugyanaz");

    var rkif_email = new RegExp("^(\\w+\\.)*\\w+@[a-z]+(\\w+\\.)*\.[a-z]{2,6}$");
    if(rkif_email.test(email.value)) window.alert("Email cím kitöltése helyes"); else window.alert("Email cím helytelen, ne add fel, próbáld újra");

    var rkif_tnev = new RegExp("^[a-záéíóöőúüûA-ZÁÉÍÓÖŐÚÜŰ]{2,}+\\s[a-záéíóöőúüûA-ZÁÉÍÓÖŐÚÜŰ]{3,}+$");
    if(rkif_tnev.test(tnev.value)) window.alert("Helyes formátumban adtad meg a neved"); else window.alert("A névmegadás sikertelen, a teljes neved a személyigazolványod első oldalán található");
    
    var rkif_unev = new RegExp("^[a-z][0-9]*$");
    if(rkif_unev.test(unev.value)) window.alert("Sikeresen adtad meg a felhasználói neved"); else window.alert("A felhasználói névmegadás sikertelen");

};

