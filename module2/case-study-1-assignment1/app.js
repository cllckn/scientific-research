const express = require("express");
const ProductService = require("./services/productService");

// Choose ONE repository
const ProductRepository = require("./repositories/PgProductRepository");
//const ProductRepository = require("./repositories/MemoryProductRepository");
//const ProductRepository = require("./repositories/MongoDBProductRepository");


const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

const productRoutes = require("./routes/productRoutes")(productService);

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
