import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  appName: "AssistntCluster",
  tlsAllowInvalidCertificates: true,
  ssl: false,
};

let client: MongoClient;
client = new MongoClient(uri, options);
export default client;
