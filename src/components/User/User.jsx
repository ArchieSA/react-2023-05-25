import React from "react"

export const User = ({ user }) => {
  const { name } = user;
  
  return <div>{name}</div>;
}