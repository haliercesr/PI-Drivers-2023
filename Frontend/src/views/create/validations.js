export default function validations(user) {
    let errors = {}
    let regexNombreSinNumero = /^[^\d]*$/; //regex para que la string no tenga numeros

    //VALIDACIONES NOMBRE
    if (!user.forename) {
        errors.forename = "⚠️Por favor ingresar un nombre";
    } else if (!regexNombreSinNumero.test(user.forename)) {
        errors.forename = "⚠️No debe contener numeros"
    } else { errors.forename = "" }

    //VALIDACIONES APELLIDO
    if (!user.surname) {
        errors.surname = "⚠️Por favor ingresar un apellido";
    } else if (!regexNombreSinNumero.test(user.surname)) {
        errors.surname = "⚠️No debe contener numeros"
    } else { errors.surname = "" }

    //VALIDACIONES NACIONALIDAD
    if (!user.nationality) {
        errors.nationality = "⚠️Por favor ingresar una nacionalidad";
    } else if (!regexNombreSinNumero.test(user.name)) {
        errors.nationality = "⚠️No debe contener numeros"
    } else { errors.nationality = "" }

      //VALIDACIONES FECHA DE NACIMIENTO
      if (!user.dob) {
        errors.dob = "⚠️Por favor ingresar una fecha de nacimiento";
    } else { errors.nationality = "" };


    //VALIDACIONES TEAMS
    if (!user.selectedTeams || user.selectedTeams.length === 0) {
        errors.selectedTeams = "⚠️Debe tener al menos una escuderia";
    } else if (user.selectedTeams.length > 5) {
        errors.selectedTeams = "⚠️No puede tener más de 5 escuderias";
    } else {
        errors.selectedTeams = "";
    }

    //VALIDACION IMAGEN
    if (!user.image) {
        errors.image = "⚠️No dejar en blanco";
    } else { errors.image = '' }

      //VALIDACION DESCRIPCION
      if (!user.description) {
        errors.description = "⚠️Por favor ingresar una descripcion";
    } else if (user.description.length>100) {
        errors.description = "⚠️Menos de 100 caracteres"
    } else { errors.description = "" }

    return errors


}
