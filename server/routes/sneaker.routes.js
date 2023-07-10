import express from "express";
import { sneakerController } from "../controllers/sneaker.controllers.js";
import { requireAuth } from "../middleware/auth.js";
const { getSneaker, getSneakers, deleteSneakers } = sneakerController;

const router = express.Router(requireAuth);

router.get("/sneakers", async (req, res) => {
  const sneakers = await getSneakers({});
  res
    .status(200)
    .send({ msg: "Successfully queried for sneakers!", data: { sneakers } });
});

router.get("/sneakers/:id", async (req, res) => {
  const id = req.params?.id;
  const sneaker = await getSneaker(id);
  if (sneaker?.name == null && id.length) {
    res.status(404).send({ msg: "Unsuccessfully queried a sneaker", data: {} });
  } else {
    res
      .status(200)
      .send({ msg: "Successfully queried a sneaker!", data: { sneaker } });
  }
});

router.delete("/sneakers/delete/:id"), async (req, res) => {
  const id = req.params.id;
  const deleteSneakerStatus = await deleteSneakers(id);
  console.log(deleteSneakerStatus)
  return res.status(deleteSneakerStatus.data.deleted === true ? 200 : 404).send({
    ...deleteSneakerStatus,
  });
};
export { router as sneakerRouter };