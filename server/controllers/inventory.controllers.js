import dotenv from "dotenv";
import { Inventory } from "../models/inventory.models.js";
import { Sneaker } from "../models/sneaker.models.js";
dotenv.config();

//CRUD
export const inventoryController = {
  getInventory: async () => {
    const inventoryCollection = Inventory;
    try {
      const inventory = await inventoryCollection.find({});
      return inventory != null ? inventory : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getInventoryItem: async (id) => {
    const inventoryCollection = Inventory;
    try {
      const inventoryItem = await inventoryCollection.findOne({ id });
      return inventoryItem != null ? inventoryItem.toObject() : {};
    } catch (err) {
      console.log(err);
    }
  },
  getInventoryForCustomers: async () => {
    const inventoryCollection = Inventory;
    try {
      const products = await inventoryCollection.find({ showInCatalog: true });
      return products != null ? products : {};
    } catch (err) {
      console.log(err);
    }
  },
  getFeaturedInventory: async () => {
    const inventoryCollection = Inventory;
    try {
      const products = await inventoryCollection.find({ featured: true });
      return products != null ? products : {};
    } catch (err) {
      console.log(err);
    }
  },
  addInventoryItem: async (id) => {
    const inventoryCollection = Inventory;
    const sneakerCollection = Sneaker;
    try {
      const sneaker = await sneakerCollection.findOne({
        id,
      });
      if (sneaker != null) {
        const existingSneaker = await inventoryCollection.findOne({
          id,
        });
        if (existingSneaker != null) {
          return {};
        } else {
          const updateStatus = await inventoryCollection.updateOne(
            { id },
            {
              name: sneaker.name,
              images: { ...sneaker.images },
              colorway: sneaker.colorway,
              brand: sneaker.brand,
              shoeType: sneaker.shoeType,
              category: sneaker.category,
              description: sneaker.description,
              marketPrice: sneaker.price,
              releaseDate: sneaker.releaseDate,
              price: sneaker.price,
              showInCatalog: true,
              sourceID: sneaker.id,
              visible: true,
              featured: fasle,
            },
            { upsert: true }
          );
          const updateSneakerStatus = await sneakerCollection.updateOne(
            { id },
            {
              visible: false,
            }
          );
          if (updateStatus && updateStatus.upsertedCount > 0) {
            return (
              (
                await inventoryCollection.findOne({
                  id,
                })
              ).toObject() ?? {}
            );
          }
        }
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  },
  updateInventoryItem: async (id, updates) => {
    const inventoryCollection = Inventory;
    try {
      const sneaker = await inventoryCollection.findOne({
        id,
      });
      if (sneaker != null) {
        const updateSneaker = await inventoryCollection.updateOne(
          { id },
          {
            price: updates.prices ?? sneaker.price,
            featured: updates.featured ?? sneaker.featured,
          }
        );
        if (updateSneaker?.modifiedCount > 0) {
          const updatedSneaker = await inventoryCollection.findOne({
            id,
          });
          return updatedSneaker.toObject() ?? {};
        } else {
          return {};
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  deleteInventoryItem: async (id) => {
    const inventoryCollection = Inventory;
    try {
      const sneaker = await inventoryCollection.findOne({
        id,
      });
      const sneakerName = sneaker?.name ?? "'NOT IN INVENTORY'";
      if (sneaker != null) {
        const deleteSneaker = await inventoryCollection.deleteOne({ id });
        if (deleteSneaker.deletedCount > 0) {
          return {
            msg: `Successfully deleted ${sneakerName}!`,
            data: { deleted: true },
          };
        }
      }
      return {
        msg: `Failed to delete ${sneakerName}`,
        data: { deleted: false },
      };
    } catch (err) {
      console.log(err);
    }
  },
};
