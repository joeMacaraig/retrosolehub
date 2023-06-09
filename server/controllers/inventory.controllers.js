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
  addInventoryItem: async (id, sneakerDetail) => {
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
              shoeSize: [4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
              colorway: sneaker.colorway ?? "",
              brand: sneaker.brand ?? "",
              marketPrice: sneaker.price,
              price: sneakerDetail.price ?? 0,
              showInCatalog: sneakerDetail.showInCatalog ?? false,
              stock: sneakerDetail.stock ?? 0,
              inventoryID: uuidv4(),
              sourceID: sneaker.id,
            },
            { upsert: true }
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
            price: updates.price ?? sneaker.price,
            showInCatalog: updates.showInCatalog ?? sneaker.showInCatalog,
            stock: updates.stock ?? sneaker.stock,
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
