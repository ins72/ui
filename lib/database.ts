// Database utilities for MEWAYZ platform
import { MongoClient, Db, Collection } from 'mongodb';

export class DatabaseService {
  private static client: MongoClient | null = null;
  private static db: Db | null = null;

  static async connect(): Promise<void> {
    if (this.client) return;

    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mewayz';
    this.client = new MongoClient(uri);
    await this.client.connect();
    this.db = this.client.db();
  }

  static async getDb(): Promise<Db> {
    if (!this.db) {
      await this.connect();
    }
    return this.db!;
  }

  static async getCollection(name: string): Promise<Collection> {
    const db = await this.getDb();
    return db.collection(name);
  }

  static async findOne(collection: string, query: any): Promise<any> {
    const col = await this.getCollection(collection);
    return col.findOne(query);
  }

  static async findMany(collection: string, query: any = {}, options: any = {}): Promise<any[]> {
    const col = await this.getCollection(collection);
    return col.find(query, options).toArray();
  }

  static async insertOne(collection: string, document: any): Promise<any> {
    const col = await this.getCollection(collection);
    return col.insertOne(document);
  }

  static async updateOne(collection: string, query: any, update: any): Promise<any> {
    const col = await this.getCollection(collection);
    return col.updateOne(query, { $set: update });
  }

  static async deleteOne(collection: string, query: any): Promise<any> {
    const col = await this.getCollection(collection);
    return col.deleteOne(query);
  }

  static async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
    }
  }
}

export default DatabaseService; 