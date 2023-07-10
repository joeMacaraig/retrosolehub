import dotenv from "dotenv";
import { Sneaker } from "../models/sneaker.models.js";
dotenv.config();

export const sneakerController = {
  getSneakers: async () => {
    try {
      const sneakerCollection = Sneaker;
      const data = await sneakerCollection.find({});
      return data.map((sneaker) => sneaker.toObject());
    } catch (err) {
      console.log(`FAILED TO GET SNEAKERS :: ${err}`);
    }
  },

  getSneaker: async (id) => {
    const sneakerCollection = Sneaker;
    try {
      if (id.length) {
        const sneaker = await sneakerCollection.findOne({ id });
        return sneaker;
      }
      return {};
    } catch (err) {
      console.log(`FAILED TO GET SNEAKER :: ${err}`);
    }
  },
  deleteSneakers: async (id) => {
    const sneakerCollection = Sneaker;
    try {
      const sneaker = await sneakerCollection.findOne({
        id,
      });
      const sneakerName = sneaker?.name ?? "'NOT IN DATABASE'";
      if (sneaker != null) {
        const deleteSneaker = await sneakerCollection.deleteOne({ id });
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