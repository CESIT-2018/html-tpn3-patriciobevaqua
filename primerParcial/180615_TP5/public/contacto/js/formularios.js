// JavaScript Document
function cambiarCaptchaFormu(ruta,id_formulario){
	codigos=new Array("28ivw","4D7YS","e5hb","6ne3","q98p","smwm","k4ez","xmqki","XDHYN","HRAI","FH2DE","1264","ZGWCD","KN2XWT7B","HC263S");
	
	var codigo_actual="codigo_actual_"+id_formulario;
	var imagen_captcha="imagen_captcha_"+id_formulario;
	var escogido="escogido_"+id_formulario;
	
	var codigo=parseInt(document.getElementById(codigo_actual).value)+1;
	if(codigo>=15)codigo=0;
	
	var imagen=codigo+1;
	
	document.getElementById(imagen_captcha).src=ruta+"/formularios/img/captcha"+imagen+".jpg";
    document.getElementById(codigo_actual).value=codigo;
    document.getElementById(escogido).value=codigos[codigo];
}