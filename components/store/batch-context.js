import React, { useState } from "react";

const BatchContext = React.createContext({
  setBatchDetail: (data) => {},
  batchDetailList: [],
});

export const BatchContextProvider = (props) => {
  const [bacthDetailList, setBacthDetailList] = useState();

  const setBatchDetailHandler = (batchData) => {
    setBacthDetailList(batchData);
  };

  const ContextValue = {
    setBatchDetail: setBatchDetailHandler,
    bacthDetailList,
  };

  return (
    <BatchContext.Provider value={ContextValue}>
      {props.children}
    </BatchContext.Provider>
  );
};
export default BatchContext;
