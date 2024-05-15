let coeficiente = 1;

for(let j = coeficiente; j<11; j++){
    document.write("<table border = '1'>");
    for(let i = 1;i<11; i++){
        if(i==1){
            document.write(`<th colspan= "2">Produto de ${j}</th>`);
        }
        document.write(`<tr><td>${j}x${i}</td><td>${j * i}</td></tr>`);
    }
    document.write("</table>");
}
