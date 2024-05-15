function mostraResposta(){
    const raio = parseFloat(document.getElementById("raio").value);
    let area = document.getElementById("area");
    let circ = document.getElementById("circ");

    area.value = Math.round(Math.PI*(raio**2)*100)/100;
    circ.value = Math.round(2*Math.PI*raio*100)/100;
}
