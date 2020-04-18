console.log("Hola Mundo");

/*Clase mascota{

    propiedades (variables )
                cabeza
                patas
                cola

    metodos  (funciones) acciones
              camina
              corre
              come

}


instanciacion de elemento dados

objeto gato uno{
        cabeza:grande
        patas:largas
        cola:pequeña

        camina:rapido
        corre:largas distancias
        come:comida especial
}

muestrame gato uno > cabeza

*/

//crear una clase
class miClaseUno{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tres = "Hola a todos";
    };

    miMetodoUno(){
        return this.tres
    };
    
    miMetodoDos(parametroUno,parametroDos){
        document.write(
            " El parametro uno es : " + parametroUno +
            " El parametro Dos es " + parametroDos
        );
    };
};


//Creando objeto instanciando objeto poniendolo en una variable

var objetoUno = new miClaseUno("Tomas",666);

//recuperar los datos

console.log(objetoUno.nombre);
document.write(objetoUno.apellido);
objetoUno.miMetodoDos(" Alex <br>",777);



//HERENCIA----------------------------------------------

class miClaseDos extends miClaseUno {

    constructor(nombre,apellido,cuarto){
        super(nombre,apellido)
        this.cuarto = cuarto;
    }
};

var miObjetoTres = new miClaseDos("Ava-Max", 777,"Test");

document.write(miObjetoTres.tres);


