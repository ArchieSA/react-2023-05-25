"use client";

import React, { useContext } from "react";
import { useGetUsersQuery } from "@/redux/services/api";

const DEFAULT_VALUE = [];

const context = React.createContext(DEFAULT_VALUE);

export const useUsers = () => {
  return useContext(context);
};

export const useUser = (id) => {
  const users = useContext(context)
  return users?.length ? users.find((user) => user.id === id) : undefined
};

export const UsersProvider = ({ children }) => {
  const { data, isFetching, error, isError } = useGetUsersQuery();

  return (
    <context.Provider value={data}>
      {isFetching && <div>Loading users...</div>}
      {isError && <div>{new String(error)}</div>}
      {!isFetching && !isError && children}
    </context.Provider>
  );
};
