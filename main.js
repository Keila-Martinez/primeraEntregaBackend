
class ProductManager {
    static ultId = 0;

    constructor(){
    this.products = []
    }

    addProduct( title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail ||!code || !stock){
            console.log("Todos los campos son obligatorios");
            return;
        }

        if(this.products.some (item => item.code ===code)){
            console.log ("El Code debe ser único");
            return;
        }


        const nuevoProducto ={
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(nuevoProducto);
    }

        getProducts() {
                       return this.products;
        };
        getProductById(id) {
            const producto = this.products.find(item => item.id === id);
    
            if (!producto) {
                console.error("Not Found");
            } else {
                console.log("El producto buscado:", producto);
            }
    }   

}
const manager = new ProductManager(); 

console.log(manager.getProducts());

manager.addProduct("Producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25);

manager.addProduct("Francia", "este es un nuevo producto test", 200, "Sin imagen", "abc124", 25);

console.log(manager.getProducts());

manager.getProductById(200);
