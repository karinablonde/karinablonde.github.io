

function total(categoria, cantidad) {
    categoria = document.getElementById("categoria").value;  
    cantidad = document.getElementById("cantidad").value;   

    if (categoria === "Estudiante") {
        document.getElementById('totalaPagar').innerHTML = `${cantidad*200*0.2}`;
    }  
    else {
        if (categoria === "Trainee") {
            document.getElementById('totalaPagar').innerHTML = `${cantidad*200*0.5}`;
        }    
        else {
            document.getElementById('totalaPagar').innerHTML = `${cantidad*200*0.85}`;
        }       
    }    
}

function funcionResumen() {
    document.getElementById('Resumen').innerHTML = total();  
    let total = parseInt(frmData.get('cantidad')) * 200 * (100 - parseInt(frmData.get('categoria'))) / 100;
    spnST.innerText = totalaPagar;
}

function funcionBorrar() {
    document.getElementById('totalaPagar').innerHTML = ' ';
}
 /*const btnClear = document.getElementById('reset');
    btnClear.addEventListener('click', ()=>{
        result.innerText = '';}
    )
    
}*/

