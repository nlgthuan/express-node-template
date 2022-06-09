import { User } from 'src/models';

const createUser = async (userDTO) => {
  const user = await User.create(userDTO);

  return user;
};

const userServices = {
  createUser,
};

export default userServices;
