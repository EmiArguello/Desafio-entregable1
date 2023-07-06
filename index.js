class ProductManager {
    constructor(){
    this.product=[] 
    }
    
    static id=0
    addproduct(title, price, descripction, code, stock){
        ProductManager.id++
        this.product({title, price, description, code, stock, id:ProductManager.id});
}
getProduct(){
    return this.product}
getProductById(id){
    if(!this.product.find((product) => product.id === id))
    return 'not found'}
    
    else{
        return this.products.find((product)=> product.id === id)
    }
    const product = new ProductManager()
console.log(product.getProduct())
product.addProduct('colchon', 130000, 'resortes', '1234', 5)
product.addProduct('almohada', 30000, 'con interior de plumas', '1122', 8)
product.addProduct('sabanas', 5000, 'tres mil hilos', '1357', 3)

console.log(product.getProduct(0));
console.log(product.getProductById(1));
console.log(product.getProductById(2));
console.log(product.getProductById(3));