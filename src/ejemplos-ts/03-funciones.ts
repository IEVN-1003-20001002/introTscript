

function sumar():void{
    console.log(3+7);
}

sumar()
function sumar2(a:number,b:number):number{
    return (a+b)
}

const resultado=sumar2(4,76)
console.log(resultado)

interface mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:mascotas,x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:mascotas={
    nombre: "Miau",
    edad:2,
    mostrarEdad(): void {
        console.log('la edad es;',this.edad);
    }
}
calcular(nuevaMascota,3);