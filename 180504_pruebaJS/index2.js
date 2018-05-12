//SABER!: function es un tipo de dato
let sumar = function(a, b) {
  return a + b;
};

console.info(sumar(10, 5)); // 15

console.info(typeof sumar); // muestra el tipo de dato, en este caso function

function conCallback(a, b, callback) {
  //en general se utiliza callback, es una variable, pero sería una convensión que se piensa como función
  return callback(a, b);
}

console.info(conCallback(10, 5, sumar)); //15

let v1 = 10;
let v2 = 5;
console.info(conCallback(v1, v2, sumar)); //15

let restar = function(a, b) {
  return a - b;
};

console.info(conCallback(v1, v2, restar)); //5

//console.info(v1, v2,(a,b)=>{a*b});
console.info(
  conCallback(v1, v2, function(a, b) {
    //directamente se arma la función dentro de la llamada de la función conCallback
    return a * b;
  })
);
console.info(conCallback(v1, v2, (a, b) => a * b)); //la función arrow en una sola línea no necesita poner el return, pero solo en una sola línea
// idem función anterior: directamente se arma la función dentro de la llamada de la función conCallback
let a = 10;
setTimeout(() => {
  console.info("Hola " + a);
}, 2000); //espera 2 segundos y pone hola. La función setTimeout tiene dos parametros:primer parametro una función y segundo parámetro la cantidad de segundos de espera

app.post('/people',(req,resp){  //ejemplo de dónde se utilizan estas funciones  
});
app.get('/people',(req,resp){  //ejemplo de dónde se utilizan estas funciones  
Response.write("Hola");
});
