
saludar(4, "Pablo", "García Ramos")
saludar(18, "Juan", "José Fernandez")

function saludar(edad, nombre, apellidos)
{
    const MIN_AGE = 3
    const MAX_AGE = 16

    const TEXTO_BIENVENIDA = "Bienvenido " + nombre + ", " + apellidos + "<br>" + "Al tener " + edad + " años, se le permite acceso al sistema <br><br>"
    const TEXTO_ACCESO_DENEGADO = "No puede acceder <br><br>"

    if (edad > MIN_AGE && edad < MAX_AGE)
        document.write(TEXTO_BIENVENIDA)
    else
        document.write(TEXTO_ACCESO_DENEGADO)
}
