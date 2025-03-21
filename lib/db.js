import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.DB_URI) {
  throw new Error("DB_URI is required");
}

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getDB(dbName) {
  try {
    await client.connect();
    console.log(">>>>> Connected to the database");
    return client.db(dbName);
  } catch (error) {
    console.error(">>>>> Error connecting to the database", error);
  }
}

export async function getCollection(collectionName) {
  const db = await getDB("todos");
  if (db) return db.collection(collectionName);

  return null
}
