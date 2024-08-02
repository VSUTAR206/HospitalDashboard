import { createContext, useState, useEffect, useContext } from "react";

export const pateinData = createContext();

export const PatientsProvider = ({ children }) => {
  const password = import.meta.env.VITE_PASSWORD;
  const username = import.meta.env.VITE_USERNAME;
  const url = import.meta.env.VITE_URL;
  // console.log(username);

  const [pateints, setPateints] = useState([]);
  const [ldata, setldata] = useState({});

  useEffect(()=>{
    console.log("api called...");
    const prefixData = pateints?.filter((item)=> item.name == "Jessica Taylor")
    // setldata({...prefixData})
    const data = prefixData[0]
    if(data){
      setldata(data);
    }
  },[pateints])

  const apiHandler = () => {
    let auth = btoa(`${username}:${password}`);
    fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        // console.log(response);

        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        // console.log(data);
        setPateints(data);
      })
      .catch(function (error) {
        console.warn(error.message);
      });
  };

  useEffect(() => {
    apiHandler();
  }, []);
  return (
    <pateinData.Provider value={{ pateints, setldata, ldata }}>
      {children}
    </pateinData.Provider>
  );
};
