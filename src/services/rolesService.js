import $api from "../http";

const getRoles = async (userData) => {
  return await $api.get("/roles");
};

const rolesService = {
  getRoles,
};

export default rolesService;
