document.getElementById("inputForm").addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Formulario enviado");
    const i = parseFloat(document.getElementById("i").value.replace(',','.'))/100;
    const n = parseFloat(document.getElementById("n").value.replace(',','.'));
    const g = (parseFloat(document.getElementById("g").value.replace(',','.')) || 0)/100;
    console.log("Valor de i: ", i);
    console.log("Valor de n: ", n);
    console.log("Valor de g: ", g);

    const equivalencia1 = (1 + i) ** n; // (F/P,i,n)
    const equivalencia2 = 1 / ((1 + i) ** n); // (P/F,i,n)
    const equivalencia3 = (1 - (1 / ((1 + i) ** n))) / i; // (P/A,i,n)
    const equivalencia4 = i / (1 - (1 / ((1 + i) ** n))); // (A/P,i,n)
    const equivalencia5 = ((1 + i) ** n - 1) / i; // (F/A,i,n)
    const equivalencia6 = i / ((1 + i) ** n - 1); // (A/F,i,n)
    const equivalencia7 = ((1+i)**n - (i*n) - 1)/((i**2) * (1+i)**n); // (P/G,i,n)
    const equivalencia8 = (1/i) - (n/(((1+i)**n) - 1)); // (A/G,i,n)
    const equivalencia9 = ((1+i)**n-i*n-1)/(i**2); // (F/G,i,n)
    
    let equivalencia10;
    if (g === 0) {
        equivalencia10 = "No aplicable";
    }else{
        if(g === i){
            equivalencia10 = (n/(1+i)).toFixed(8);
            console.log("Estoy usando la formula reducida");
            
        }else{
            equivalencia10 = (((1-((1+g)/(1+i))**n))/(i-g)).toFixed(8);
            console.log("Estoy usando la formula completa");
        }
    }

    document.getElementById('equivalencia1').value = equivalencia1.toFixed(8);
    document.getElementById('equivalencia2').value = equivalencia2.toFixed(8);
    document.getElementById('equivalencia3').value = equivalencia3.toFixed(8);
    document.getElementById('equivalencia4').value = equivalencia4.toFixed(8);
    document.getElementById('equivalencia5').value = equivalencia5.toFixed(8);
    document.getElementById('equivalencia6').value = equivalencia6.toFixed(8);
    document.getElementById('equivalencia7').value = equivalencia7.toFixed(8);
    document.getElementById('equivalencia8').value = equivalencia8.toFixed(8);
    document.getElementById('equivalencia9').value = equivalencia9.toFixed(8);
    document.getElementById('equivalencia10').value = equivalencia10;
});