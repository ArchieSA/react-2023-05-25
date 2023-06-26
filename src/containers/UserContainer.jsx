import { User } from '@/components/User/User';
import { selectUser } from '@/redux/features/user/selectors';
import { fetchUsersIfNotExist } from '@/redux/features/user/thunks/fetchUserIfNotExist';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector(state => selectUser(state, userId));
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(fetchUsersIfNotExist());
  }, []);

  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
