import express from "express";
import ProductManager from "./productManager.js"; // siempre agregar el tipo de archivo al final

const app = express(); // intanciar
const PORT = 8080; //puerto

app.get('/products', (req, res) => {
  const { limit } = req.query; // es una variable para recivir un limite de productos, ? limit 1 // query siempre envia un valor string (alfabetico)
  const p = new ProductManager(); 
  return res.json({ productos: p.getProducts(limit) }); // es la respuesta al usuario.. // la const pasa a formar parte de return para ahorrar lineas de codigo..
}); // get es para optener.. // devuelve una catidad o todos los productos


app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  const p = new ProductManager(); // intanciar la clase
  const producto = p.getProductById(Number(pid)); // combierte el string en un number
  return res.json({producto}); // aca tambien podria haber ahorrado codigo como en el return anterior. ({producto: p.getProductById(Number(pid))})
});

app.listen(PORT, () => {
  console.log(`Corriendo App en el puerto ${PORT}`);
}); // escucha el puerto
