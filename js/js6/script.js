const pontos = [];
document.addEventListener("mousemove", function(event){
    
    let dot = document.createElement("div");

    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
    pontos.push(dot);

    
    if (pontos.length > 8) {
        const pontoRemover = pontos.shift();
        pontoRemover.remove();
    }
});