const ProductRepository = require("./ProductRepository");

class MemoryProductRepository extends ProductRepository {
  constructor() {
    super();
    this.products =[
      { id: 1, name: "SSD", price: 999.99 },
      { id: 2, name: "RAM", price: 499.99 },
    ];
    this.nextId = 1;
  }

  async getAll() {
    return this.products;
  }

  async getById(id) {
    return this.products.find(p => p.id === Number(id)) || null;
  }

  async create({ name, price }) {
    const product = {
      id: this.nextId++,
      name,
      price
    };
    this.products.push(product);
    return product;
  }

  async update(id, { name, price }) {
    const index = this.products.findIndex(p => p.id === Number(id));
    if (index === -1) return null;

    this.products[index] = { id: Number(id), name, price };
    return this.products[index];
  }

  async patch(id, { name, price }) {
    const product = await this.getById(id);
    if (!product) return null;

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;

    return product;
  }

  async delete(id) {
    const index = this.products.findIndex(p => p.id === Number(id));
    if (index === -1) return null;

    return this.products.splice(index, 1)[0];
  }
}

module.exports = MemoryProductRepository;
