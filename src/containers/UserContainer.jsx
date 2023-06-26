import { User } from "@/components/User/User";
import { selectUser, selectUsersAreLoading } from "@/redux/features/user/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUser(state, userId));

  const status = useSelector((state) => selectUsersAreLoading(state));

  if (status) {
    return <div>User is loading, wait please...</div>
  }

  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
