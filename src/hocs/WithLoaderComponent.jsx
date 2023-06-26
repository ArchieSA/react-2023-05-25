import { Empty } from "@/components/Empty/Empty";
import { Loader } from "@/components/Loader/Loader";
import React from "react";

// eslint-disable-next-line react/display-name
export const WithLoaderComponent = (WrappedComponent) => (props) => {
  if(props.isPending) {
    return <Loader />
  }

  if(!props) {
    return <Empty />;
  }

  return <WrappedComponent {...props} />
}