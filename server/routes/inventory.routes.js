import express from "express";
import { inventoryController } from "../controllers/inventory.controllers.js";

const inventoryRouter = express.Router();
const {
  getInventory,
  getInventoryItem,
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} = inventoryController; //descruct

inventoryRouter.get("/inventory", async (req, res) => {
    const inventory = await getInventory();    
    return inventory != null
    ? res
    .status(200)
    .send({ msg: "Successfully queried for inventory!", data: inventory })
    : res.status(404).send({ msg: "error!", data: {} });
});

inventoryRouter.get("/inventory/:id", async (req, res) => {
  const id = req.params.id;
  const inventoryItem = await getInventoryItem(id);
  return inventoryItem != null
    ? res.status(200).send({
        msg: "Successfully queried for inventory!",
        data: inventoryItem,
      })
    : res.status(404).send({ msg: "error!", data: {} });
});

inventoryRouter.post("/inventory/add/:id", async (req, res) => {
  const id = req.params.id;
  const sneakerDetail = req.body;
  const newSneaker = await addInventoryItem(id, sneakerDetail);
  return newSneaker != null && newSneaker?.name?.length > 0
    ? res.status(200).send({
        msg: `Successfully added ${newSneaker.name}!`,
        data: { sneaker: { ...newSneaker } },
      })
    : res.status(404).send({
        msg: `Could not add sneaker`,
        data: {},
      });
});

inventoryRouter.put("/inventory/update/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  // "updates" should look like this => { price, stock, showInCatalog }
  const updateSneaker = await updateInventoryItem(id, updates);
  return updateSneaker != null
    ? res.status(200).send({
        msg: `Successfully updated ${updateSneaker.name}!`,
        data: { sneaker: { ...updateSneaker } },
      })
    : res.status(404).send({
        msg: `Could not update sneaker`,
        data: {},
      });
});

inventoryRouter.delete("/inventory/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleteSneakerStatus = await deleteInventoryItem(id);
  console.log(deleteSneakerStatus)
  return res.status(deleteSneakerStatus.data.deleted === true ? 200 : 404).send({
    ...deleteSneakerStatus,
  });
});
export { inventoryRouter };