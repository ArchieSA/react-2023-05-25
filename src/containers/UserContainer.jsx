import { User } from "@/components/User/User";
import { useGetUsersQuery } from "@/redux/services/api";
import React from "react";

export const UserContainer = ({ userId, ...props }) => {
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const user = users.find(element => element.id === userId);


  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
