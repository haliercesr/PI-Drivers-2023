export const comparar = (a, b, campo) => {
    //ORDENAR EN ORDEN ALFABETICO CON EL NOMBRE
    const name1 = a.name.forename
    const name2 = b.name.forename

    if (campo === 'AZ' || campo === 'ZA') {

        if (name1 < name2) return campo === 'AZ'?-1:1;
        if (name1 > name2) return campo === 'AZ'?1:-1;

        return a.id - b.id; // si los dos nombres son iguales, se determina por el id
    }
    //-----------------------------------------


    //ORDENAR DE MENOR A MAYOR CON LA FECHA DE NACIMIENTO
    const fechaA = Number(a.dob.replace(/-/g, ""))  // "/ /"" busca todas las ocurrencias de "-" en la cadena, y la bandera "g" significa "global", lo que asegura que se reemplacen todas las ocurrencias, no solo la primera.
    const fechaB = Number(b.dob.replace(/-/g, ""))

    if (campo === 'ASCENDENTE' || campo === 'DESCENDENTE') {
        if (fechaA < fechaB) return campo === 'ASCENDENTE'?-1:1;
        if (fechaA > fechaB) return campo === 'ASCENDENTE'?1:-1;

        return a.id - b.id;
    }
    //---------------------------------------------------
}