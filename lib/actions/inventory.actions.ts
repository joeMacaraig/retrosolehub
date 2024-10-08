"use server";

import Sneaker from "@/model/sneaker.model";
import { databaseConnect } from "../db";
import Inventory from "@/model/inventory.model"; // grab from inventory

// Sneakers for Inventory of Store (Admin)
// ----- /inventory -----
export const getInventory = async () => {
  try {
  } catch (error) {
    console.log({ error: error });
  }
};
// ----- /inventory/id -----
export const getInventoryItem = async (id: string) => {
  try {
  } catch (error) {}
};
export const updateInventoryItem = async (id: string) => {
  try {
  } catch (error) {}
};
export const deleteInventoryItem = async (id: string) => {
  try {
  } catch (error) {}
};

// Products (Customers / Users)
// ----- /products -----
export const getProductsForCustomers = async () => {
  try {
    await databaseConnect();
    const products = await Inventory.find({ showInCatalog: true });
    return products ? products : [];
  } catch (err) {
    console.log({ error: err });
  }
};

export const getProductDetail = async (id: string) => {
  try {
    await databaseConnect();
    const productDetail = await Inventory.findOne({ id });
    return productDetail ? productDetail : [];
  } catch (err) {
    console.log({ error: err });
  }
};

// ----- /featured -----
export const getFeaturedSneakers = async () => {
  try {
    await databaseConnect();
    const sneakers = await Inventory.find({ featured: true });
    return sneakers.map((feature) => feature.toObject());
  } catch (err) {
    console.log({ error: err });
  }
};
// ------ /products/id
export const updateInventoryItemVisibility = async (
  id: string,
  visible: boolean
) => {
  try {
    await databaseConnect();
    const sneaker = await Inventory.findOne({ id }); // Find the sneaker by id

    if (!sneaker) {
      return { success: false, message: "Sneaker not found..." };
    }

    // Check if the sneaker is already in the desired visible state
    if (sneaker.showInCatalog === visible) {
      return {
        success: false,
        message: visible
          ? "This item is already available for customers..."
          : "This item is already hidden...",
      };
    }

    // Update the showInCatalog field
    const updateProduct = await Inventory.updateOne(
      { id },
      { $set: { showInCatalog: visible } }
    );

    const updatedItem = await Inventory.findOne({ id }); // Get updated item
    return updateProduct.modifiedCount > 0
      ? {
          success: true,
          message: visible
            ? "Successfully added inventory item!"
            : "Successfully hid inventory item!",
          updatedItem,
        }
      : {
          success: false,
          message: "Something went wrong updating inventory item visibility",
        };
  } catch (error) {
    return { success: false, message: `Error: ${error}` };
  }
};
