"use server";

import Sneaker from "@/model/sneaker.model";
import { databaseConnect } from "../db";

export const getSneakers = async () => {
  try {
    await databaseConnect();
    const data = await Sneaker.find({});
    return data.map((sneaker) => sneaker.toObject());
  } catch (error) {
    console.log(`FAILED TO GET SNEAKERS :: ${error}`);
  }
};
export const getSneaker = async (id: string) => {
  try {
    if (id.length) {
      const sneaker = await Sneaker.findOne({ id });
      return sneaker;
    } else {
      return {};
    }
  } catch (error) {
    console.log(`FAILED TO GET PREFFERED SNEAKER :: ${error}`);
  }
};
export const deleteSneaker = async (id: string) => {
  try {
    const sneaker = await Sneaker.findOne({ id });
    if (sneaker != null) {
      const deleteSneaker = await Sneaker.deleteOne({ id });
      if (deleteSneaker.deletedCount > 0) {
        return { msg: `Sucessfully deleted Sneaker: ${sneaker.name}` };
      }
    }
  } catch (error) {
    console.log(`FAILED TO DELETE SNEAKER :: ${error}`);
  }
};
