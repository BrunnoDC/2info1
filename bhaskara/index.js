function delta (a, b, c) {
    return(b*b) - (4*(a*c))
}
function bhaskara (a, b,c){
    const valordelta = delta(a, b, c)
    if (valordelta < 0)
    return ({x1: "inexistente", x2: "inexistente"})
    else{
        const valor_x1 = (-b + Math.sqrt(valordelta)) / (2*a)
        const valor_x2 = (-b - Math.sqrt(valordelta)) / (2*a)
        return ({x1: valor_x1 , x2: valor_x2})
    }
}
function handlebtncalcular(){
    const va = document.getElementById("valorA").value
    const vb = document.getElementById("valorB").value
    const vc = document.getElementById("valorC").value
    const raizes = bhaskara(va,vb,vc)
    document.getElementById("resultado1").inderHTML = raizes.x1
    document.getElementById("resultado2").inderHTML = raizes.x2
    document.getElementById("inputX1").value = raizes.x1
    document.getElementById("inputX2").value = raizes.x2
}
document.getElementById("btncalcular").addEventListener("click", handlebtncalcular)