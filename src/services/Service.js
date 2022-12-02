import $api from "../http";

const getUsers = async () => {
  return await $api.get("/users");
};

const createUsers = async (data) => {
  return await $api.post("/users", data);
};

const updateUsers = async (data) => {
  return await $api.patch(`/users/${data.id}`, data);
};

const deleteUsers = async (id) => {
  return await $api.delete(`/users/${id}`);
};

const getSystems = async () => {
  return await $api.get("/systems");
};

const getRoles = async () => {
  return await $api.get("/roles");
};

const getLevels = async () => {
  return await $api.get("/levels");
};

const Service = {
  getUsers,
  getSystems,
  getRoles,
  getLevels,
  createUsers,
  deleteUsers,
  updateUsers,
};

export default Service;
