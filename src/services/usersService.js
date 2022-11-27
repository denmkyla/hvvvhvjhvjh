import $api from "../http";

const getUsers = async (userData) => {
  return await $api.get("/users");
};

const usersService = {
  getUsers,
};

export default usersService;
