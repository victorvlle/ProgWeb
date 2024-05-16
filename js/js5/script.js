function geraGrafico(){
    let alt1 = document.getElementById("alt1").value;
    let alt2 = document.getElementById("alt2").value;
    let alt3 = document.getElementById("alt3").value;
    let alt4 = document.getElementById("alt4").value;
    let alt5 = document.getElementById("alt5").value;
    let larg = document.getElementById("larg").value;

    let barra1= document.getElementById("barra1");
    let barra2= document.getElementById("barra2");
    let barra3= document.getElementById("barra3");
    let barra4= document.getElementById("barra4");
    let barra5= document.getElementById("barra5");

    barra1.style.setProperty("width", `${larg}px`);
    barra2.style.setProperty("width", `${larg}px`);
    barra3.style.setProperty("width", `${larg}px`);
    barra4.style.setProperty("width", `${larg}px`);
    barra5.style.setProperty("width", `${larg}px`);

    barra1.style.setProperty("height", `${alt1}px`);
    barra2.style.setProperty("height", `${alt2}px`);
    barra3.style.setProperty("height", `${alt3}px`);
    barra4.style.setProperty("height", `${alt4}px`);
    barra5.style.setProperty("height", `${alt5}px`);
}