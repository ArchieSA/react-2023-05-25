import React from "react";

export const User = ({ user }) => {
  if (!user) {
    return null;
  }
  return <span>{user.name}</span>;
};
