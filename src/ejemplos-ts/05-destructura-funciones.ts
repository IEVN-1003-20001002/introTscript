export interface Producto{
    desc:string,
    precio:number;
}

const telefono:Producto={
    desc:'Iphone',
    precio:19000
}

const tablet:Producto={
    desc:'ipad air',
    precio:7800
}

function calcualarIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const iva1=calcualarIVA(articulos1);
console.log(`IVA:${iva1}`);

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=> {
        total+=precio;
    })
    return [total,total*0.16]
}

const articulos2=[telefono,tablet];
const [total,iva]=calcularIVA2(articulos2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);