import { User } from "@/components/User/User";
import { useGetUsersQuery } from "@/redux/services/api";
import React from "react";

export const UserContainer = ({ userId, ...props }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === userId),
      };
    },
  });

  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
