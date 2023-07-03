import { selectRequestStatus } from "@/redux/features/request/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useRequest = (createAction, ...params) => {
  const [requestId, setRequestId] = useState();
  const status = useSelector((state) => selectRequestStatus(state, requestId));

  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(createAction(params)).requestId);
  }, [createAction, ...params]);

  return status;
};
