import console from "console";
import fs from "fs";

class ProductManager {
  #products;
  #path;
  static idProducto = 0;

  constructor() {
    this.#path = "./src/data/productos.json";
    this.#products = this.#leerProductosInFile();
  }

  #asisgnarIdProducto() {
    let id = 1;
    if (this.#products.length != 0)
      id = this.#products[this.#products.length - 1].id + 1;
    return id;
  }

  #leerProductosInFile() {
    try {
      if (fs.existsSync(this.#path))
        return JSON.parse(fs.readFileSync(this.#path, "utf-8"));

      return [];
    } catch (error) {
      console.log(
        `ocurrio un error al momento de LEER el archivo de producto ${error}`
      );
    }
  }

  #guardarArchivo() {
    try {
      fs.writeFileSync(this.#path, JSON.stringify(this.#products));
    } catch (error) {
      console.log(
        `ocurrio un error al momento de GUARDAR el archivo de producto, ${error}`
      );
    }
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock)
      return "Todos los parametros son requeridos [title, description, price, thumbnail, code, stock]";

    const codeRepetido = this.#products.some((p) => p.code == code);
    if (codeRepetido)
      return `El codigo ${code} ya se encuentra registrado en otro producto`;

    ProductManager.idProducto = ProductManager.idProducto + 1;
    const id = this.#asisgnarIdProducto();

    const nuevoProducto = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.#products.push(nuevoProducto);
    this.#guardarArchivo();

    return "Producto agregaro exitosamente!";
  }

  getProducts(limit = 0) {
    limit = Number(limit);
    if (limit > 0);
      return this.#products.slice(0, limit);
    return this.#products;
  }

  getProductById(id) {
    const producto = this.#products.find((p) => p.id == id);
    if (producto) return producto;
    else return `Not Fount del producto con id ${id}`;
  }

  updateProduct(id, objetUpdate) {
    let msg = `El producto con id ${id} no existe`;

    const index = this.#products.findIndex((p) => p.id === id);

    if (index !== -1) {
      const { id, ...rest } = objetUpdate;
      this.#products[index] = { ...this.#products[index], ...rest };
      this.#guardarArchivo();
      msg = "Producto actualizado!";
    }

    return msg;
  }

  deleteProduct(id) {
    let msg = `El producto con id ${id} no existe`;

    const index = this.#products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.#products = this.#products.filter((p) => p.id !== id);
      this.#guardarArchivo();
      msg = "Producto Eliminado";
    }
    return msg;
  }
}

export default ProductManager;
