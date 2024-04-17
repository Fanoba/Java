function Numero(){
    let a=prompt("El primero")
    let b=prompt("El segundo")
    if(a==b){
      alert("Son iguales")
    }
    else{
          if(a>b){
      alert("Es mayor"+ a)
    }
    else{
      alert("Es menor"+ b)
      }  
    }
  }
  function validarEdad(edad){
    if(edad>=18){
      alert("Mayor de edad")
    }
    else{
      alert("Menor de edad")
    }
  }
  validarEdad(18)
  let a=false
  let b=true
  console.log(a && b)
  console.log(b || a)
  console.log(!a)
  console.log(!b)
  
  let a = 5; //numero
  let b = true; //bool
  let c = "Hola"; //Str
  let d = null; //nulo
  let f; //no definido
  let g = BigInt(123);
  
  console.log(typeof(a));
  console.log(typeof(b));
  console.log(typeof(c));
  console.log(typeof(d));
  console.log(typeof(f));
  console.log(typeof(g));
  
  function verificarTipoDato(valor) {
    if (typeof valor === "number") {
      console.log("Es un número");
    } else if (typeof valor === "boolean") {
      console.log("Es un booleano");
    } else if (typeof valor === "string") {
      console.log("Es una cadena de texto");
    } 
  }
  
  verificarTipoDato(a);
  verificarTipoDato(b);
  verificarTipoDato(c);

  function suma(valor1,valor2,valor3){
    console.log(valor1 + valor2 + valor3)
  }
  function multiplica(valor1,valor2,valor3){
    console.log(valor1 * valor2 * valor3)
  }
  function EsString(valor1,valor2,valor3){
    console.log(typeof(valor1)==="string" && typeof(valor2)==="string" && typeof(valor3)==="string")
  }
  
  function VerificarVocales(valor1){
    const a=/^[aeiou]$/i.test(valor1)
    if(a){
      console.log("Es vocal")
    }
    else{
      console.log("No es")
    }
  }
  

  suma(3,2,4)
  multiplica(3,2,5)
  EsString(3,"h","a")
  VerificarVocales("a")

let nombres=["Gil","Rock","Emilio","Bryan"]
nombres.push["Luis"]
console.log(nombres)
nombres.pop()
console.log(nombres)
let index=nombres.indexOf("Gil")

if(index!==-1){
  console.log("El nombre esta en el arreglo")
}
else{
  console.log("No esta")
}
const numeros=[4,3,4,2,1]
const raiz = numeros.map(Math.sqrt)
console.log(raiz)
var n=11
for(var i=1; i<n; i++){
  console.log([i])
}

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.displayInfo = function() {
    console.log("Make: ${this.make}, Model: ${this.model}");
  };
}
const myCar = new Car('Toyota', 'Corolla‘');
myCar.displayInfo();
