function primerElemento(array[],n){
if(!n && array && array.length>0){

return array[0];


}else if(n && array && array.length>0 && array.length<=n){

return array.splice(0,n);

}else{return null;}


}