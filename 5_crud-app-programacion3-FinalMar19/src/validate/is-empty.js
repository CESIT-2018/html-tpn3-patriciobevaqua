const isEmpty=(value)=>{
    return(
        value===undefined ||
        value===null ||
        (typeof value==='object' && Object.keys(value).length===0)||
        (typeof value==='string' && value.trim().length===0)
    );
}

module.exports=isEmpty;

//Esta función verificará si el valor pasado no está definido o es nulo o si la longitud de la cadena es 0.