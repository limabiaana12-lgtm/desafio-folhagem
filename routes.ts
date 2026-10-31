import express from "express";
import * as UserController from "@controllers/UserController";
import * as plantaController from "@controllers/PlantaController";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).json({ message: "API do treinamento de CRUD do CITi 🚀" });
});

// CRUD de usuários
routes.post("/users", UserController.createUser);
routes.get("/users", UserController.readAllUsers);
routes.get("/users/:id", UserController.readUserById);
routes.patch("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

// Rotas de Planta
routes.post("/plantas", plantaController.createPlanta);
routes.get("/plantas", plantaController.findAllPlantas);
routes.get("/plantas/estoque/valor-total", plantaController.getValorTotalEstoque);
routes.get("/plantas/:id", plantaController.findPlantaById);
routes.patch("/plantas/:id", plantaController.updatePlanta);
routes.delete("/plantas/:id", plantaController.deletePlanta);
routes.post("/plantas/:id/venda", plantaController.venderPlanta);

export default routes;