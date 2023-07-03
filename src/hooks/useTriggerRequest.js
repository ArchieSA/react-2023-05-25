import { selectRequestStatus } from "@/redux/features/request/selectors";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useTriggerRequest = (createAction) => {
  const [requestId, setRequestId] = useState();
  const status = useSelector((state) => selectRequestStatus(state, requestId));

  const dispatch = useDispatch();

  const trigger = useCallback(
    (params) => {
      setRequestId(dispatch(createAction(params)).requestId);
    },
    [createAction]
  );

  return [trigger, status];
};
