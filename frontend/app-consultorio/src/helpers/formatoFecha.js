const formatoFecha=(fecha, tipo)=>{
    let fechaFinal='';
    const arregloFecha=fecha.split('-');
    let anno='';
    let mes='';
    let dia='';
    switch(tipo){
        case 1:
            anno=arregloFecha[0];
            mes=arregloFecha[1];
            dia=arregloFecha[2];
            fechaFinal=`${dia}-${mes}-${anno}`;
            break;

        case 2:
            anno=arregloFecha[0];
            mes=arregloFecha[1];
            dia=arregloFecha[2];
            fechaFinal=`${dia}/${mes}/${anno}`;
            break;

        default:
            break;
            
    }
    return fechaFinal;
}
export default formatoFecha;