const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://lectureuser:lecturepassword@cluster0.zxbhndn.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let dbInstance = null;

async function connectToDatabase() {
  // Ensuring we do not originate multiple connections (Singleton Pattern)
  if (dbInstance) return dbInstance;

  try {
    // Establishing the connection to the Atlas Cluster
    await client.connect();

    // Confirming the connection by pinging the deployment
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully deployed and connected to MongoDB Atlas");

    dbInstance = client.db("sr_case_study_1_db");
    return dbInstance;
  } catch (error) {
    console.error("Failed to establish connection to Atlas:", error);
    throw error;
  }
}

module.exports = connectToDatabase;