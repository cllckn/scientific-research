const express = require("express");
const router = express.Router();

module.exports = (productService) => {

  router.get("/", async (req, res) => {
    res.json(await productService.getAll());
  });

  router.get("/:id", async (req, res) => {
    const product = await productService.getById(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  });

  router.post("/", async (req, res) => {
    try {
      const product = await productService.create(req.body);
      res.status(201).json(product);
    } catch {
      res.status(400).json({ error: "Invalid input" });
    }
  });

  router.put("/:id", async (req, res) => {
    const product = await productService.update(req.params.id, req.body);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  });

  router.patch("/:id", async (req, res) => {
    const product = await productService.patch(req.params.id, req.body);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  });

  router.delete("/:id", async (req, res) => {
    const product = await productService.delete(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Product deleted" });
  });

  return router;
};
