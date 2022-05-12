import { createContext, useContext, useState } from "react";
const QueryDataContext = createContext();
const QueryDataContextProvider = ({ children }) => {
  const [queryData, setQueryData] = useState([]);
  return (
    <QueryDataContext.Provider value={{ queryData, setQueryData }}>
      {children}
    </QueryDataContext.Provider>
  );
};
const useQueryData = () => useContext(QueryDataContext);
export { QueryDataContextProvider, useQueryData };
