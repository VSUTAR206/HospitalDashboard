import { createContext, useState, useEffect, useContext } from "react";

export const pateinData = createContext();

export const PatientsProvider = ({ children }) => {
  const [pateints, setPateints] = useState([]);
  const [ldata, setldata] = useState({});

  const apiHandler = () => {
    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);

    // Authenticate (dummy API)
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        setPateints(data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  useEffect(() => {
    apiHandler();
  }, []);
  return <pateinData.Provider value={{pateints,setldata,ldata}}>{children}</pateinData.Provider>;
};
