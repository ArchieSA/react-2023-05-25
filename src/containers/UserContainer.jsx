import { User } from "@/components/User/User";
import { selectUser } from "@/redux/features/user/selectors";
import { fetchUsers } from "@/redux/features/user/thunks/fetchUsers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUser(state, userId));

  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
