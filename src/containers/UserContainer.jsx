import { User } from "@/components/User/User";
import { STATUSES } from "@/constants/statuses";
import { selectUser, selectUserStatus } from "@/redux/features/user/selectors";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUser(state, userId));
  const status = useSelector((state) => selectUserStatus(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersIfNotExist());
  }, []);


  if(status === STATUSES.pending)
  {
    return <div>User pending</div>
  }

  if (!user) {
    return null;
  }


  return <User {...props} user={user} />;
};
