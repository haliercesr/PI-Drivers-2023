export const filtrarDriversCreados = (data) => {
    const data1 = data.map(dri => {
        if (typeof dri.image === "string") {
            dri.image = { url: dri.image }
        }
        if (Array.isArray(dri.team)) {
            let temp = ""
            // Construir la propiedad 'team' como un arreglo de teams
            dri.team.forEach(dri => {
                let name1 = dri.name
                let name2 = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()  //trasformo la primera letra a mayusculas y las demas a minusculas

                temp = temp + name2 + ", "
            });
            temp = temp.slice(0, -2);  //elimino ultimo caracter de la cadena

            dri.team = temp

        }

        return dri
    })
    return data1
}

