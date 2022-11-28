import $api from "../http";

const getUsers = async () => {
  return await $api.get("/users");
};

const getSystems = async () => {
  return await $api.get("/systems");
};

const usersService = {
  getUsers,
  getSystems,
};

export default usersService;
