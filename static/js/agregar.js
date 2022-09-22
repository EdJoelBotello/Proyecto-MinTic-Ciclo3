
let employes= [];

let html = '';

function registrarUsuario() {

    const $cedula = document.querySelector("#txtCedula").value;
    const $nombre = document.querySelector("#txtNombre").value;
    const $salario = document.querySelector("#txtSalario").value;

    let empleado = {};
    

    empleado.cedula = $cedula;
    empleado.nombre = $nombre;
    empleado.salario = $salario;

    
    employes.push(empleado); 

    // fetch('api/usuarios')
    // .then( data => employes = data)
    // .catch( error => console.log(error));
    alert(JSON.stringify(empleado));
    window.location.href = 'index.html';


}

function listarEmpleados(){

    
    let empleado = {
        cedula : 1201231,
        nombre : "joto",
        salario : 2500000,
    };
    

    employes.push(empleado);

    employes.forEach( (emp, index) => {
        html += `
        <th scope="row">${index+1}</th>
        <td>${emp.nombre}</td>
        <td>${emp.cedula}</td>
        <td>${emp.salario}</td>
        <td>
            <button type="button" class="btn btn-info">
                <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" class="btn btn-warning"><i class="fa-sharp   fa-solid fa-pencil"></i>
            </button>
            <button type="button" class="btn btn-danger"><i class="fa-sharp     fa-solid fa-trash"></i>
            </button>   
        </td>`
    });

    alert(JSON.stringify(employes));
    const table = document.querySelector('#empleados tbody').outerHTML = html;
    alert(table);
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })
