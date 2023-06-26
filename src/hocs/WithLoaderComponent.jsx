/* eslint-disable react/display-name */
import { Empty } from "@/components/Empty/Empty";
import { Loader } from "@/components/Loader/Loader";
import React from "react";


export const withLoaderComponent = (WrappedComponent) => (props) => {
  const { isEmpty, isPending, ...rest } = props;
  
  if(isPending) {
    return <Loader />
  }

  if(isEmpty) {
    return <Empty />;
  }

  return <WrappedComponent {...rest} />
}