// Mapeamento dos valores de mm correspondentes aos números
const valoresEmMm = {
    1: 0.6, 2: 0.7, 3: 0.8, 4: 0.9, 5: 1.1, 6: 1.2, 7: 1.3,
    8: 1.4, 9: 1.5, 10: 1.6, 11: 1.7, 12: 1.8, 13: 2.0, 14: 2.2, 
    15: 2.4, 16: 2.7, 17: 3.0, 18: 3.4, 19: 3.9, 20: 4.4, 21: 4.9,
    22: 5.4, 23: 5.9, 24: 6.4, 25: 7.0, 26: 7.6, 27: 8.2, 28: 8.8, 
    29: 9.4, 30: 10.0
};

function calcular() {
    // Obtém o valor da primeira caixa de texto e verifica o mapeamento
    var valor1 = parseInt(document.getElementById("numero1").value);
    var resultado1 = valoresEmMm[valor1] || "Valor inválido";

    // Obtém o valor da segunda caixa de texto
    var valor2 = parseFloat(document.getElementById("numero2").value) || 0;

    // Multiplica o valor da segunda caixa por 2,30
    var resultado2 = valor2 * 2.30;

    // Exibe os resultados
    document.getElementById("resultado1").textContent = "Resultado Diâmetro JP: " + (typeof resultado1 === "number" ? resultado1 + " mm" : resultado1);
    document.getElementById("resultado2").textContent = "Resultado Comprimento LPP: " + resultado2.toFixed(2) + " mm";
}