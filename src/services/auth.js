import { isNull } from 'lodash';

import { User } from 'models';
import sendWelcomeEmailQueue from 'queues';
import { AuthenticationError } from 'utils/errors';

const signup = async (userDTO) => {
  const user = await User.create(userDTO);

  sendWelcomeEmailQueue.add('Send Welcome Email', { receiver: user.email });

  return user;
};

const loginWithEmail = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (isNull(user) || !(await user.checkPassword(password))) {
    throw new AuthenticationError();
  }

  const accessToken = await user.generateAccessToken();
  return accessToken;
};

const authServices = {
  signup,
  loginWithEmail,
};

export default authServices;
