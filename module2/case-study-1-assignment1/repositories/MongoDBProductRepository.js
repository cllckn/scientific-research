const { ObjectId } = require("mongodb");
const ProductRepository = require("./ProductRepository");
const connectToDatabase = require("../config/mongodb-connection");


class MongoProductRepository extends ProductRepository {
  // We no longer establish the collection in the constructor
  constructor() {
    super();
  }

  // Internal helper to ensure we have the collection before any operation
  async #getCollection() {
    const db = await connectToDatabase();
    return db.collection("products");
  }

  async getAll() {
    const collection = await this.#getCollection();
    return await collection.find({}).sort({ _id: 1 }).toArray();
  }

  async getById(id) {
    const collection = await this.#getCollection();
    return await collection.findOne({ _id: new ObjectId(id) });
  }

  async create(data) {
    const collection = await this.#getCollection();
    const result = await collection.insertOne(data);
    return { _id: result.insertedId, ...data };
  }

  // ... (apply the same pattern to update, patch, and delete)
}

module.exports = MongoProductRepository;
