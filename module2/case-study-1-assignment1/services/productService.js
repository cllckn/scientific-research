class ProductService {
  constructor(productRepository) {
    this.repo = productRepository;
  }

  getAll() {
    return this.repo.getAll();
  }

  getById(id) {
    return this.repo.getById(id);
  }

  create(product) {
    if (!product.name || !product.price)
      throw new Error("Invalid input");

    return this.repo.create(product);
  }

  update(id, product) {
    return this.repo.update(id, product);
  }

  patch(id, product) {
    return this.repo.patch(id, product);
  }

  delete(id) {
    return this.repo.delete(id);
  }
}

module.exports = ProductService;
