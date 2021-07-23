const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul'}
    ];


window.onload = function(){
 //1.COLOCÁ ACÁ EL CÓDIGO PARA SETEAR TODOS LOS AUTOS EN PROMOCIÓN
  mostrarAutos();
}
let cardAutos=document.querySelector("#cards");
const mostrarAutos=()=>{
  
  for (const auto of autos) {
    cardAutos.innerHTML+=`
  <div class="col-sm-4 mt-3">  
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${auto.marca}</h5>
          <p class="card-text">${auto.modelo} ${auto.color}</p>
          <p class="h6">${auto.precio}</p>
          <a href="#" class="btn btn-warning">Mas info +</a>
        </div>
    </div>
  </div>
    `}
}

//2.CREA UNA FUNCIÓN ACÁ PARA FILTRAR LOS AUTOS POR MARCA


let btnSearch=document.querySelector("#btn-search");
btnSearch.addEventListener('click',(e)=>{
  e.preventDefault();
  filterMarca();
})

function filterMarca(){
  cardAutos.innerHTML=""
  let inputSearch=document.querySelector("#search");
  let filtrado=autos.filter((auto)=>auto.marca===inputSearch.value);
  for(const filtracion of filtrado){
  cardAutos.innerHTML+=`
  <div class="col-sm-4 mt-3">  
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${filtracion.marca}</h5>
          <p class="card-text">${filtracion.modelo} ${filtracion.color}</p>
          <p class="h6">${filtracion.precio}</p>
          <a class="btn btn-warning">Mas info +</a>
        </div>
    </div>
  </div>
    `
  }
  inputSearch.value=""
  console.log(inputSearch)
  console.log(filtrado)
}

