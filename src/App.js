import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import {MainContent,FilterContent} from "./content";
import {data,categorys} from "./data";
import Menubar from "./buttons";

function App() {

  const [record,setRecord] = useState()

  const newfunction = (a) =>{
    setRecord(a);
  } 

  return (
    <div className="container">
      {/* header  */}
      <div className="row">
        <Header  />
      </div>

      {/* menubar  */}
      <div className="row mt-4">
        <Menubar categorys={categorys} data={data} newfunction={newfunction}  />
      </div>

      {/* main content  */}
      <div className="row mt-5">
        {record ? (<FilterContent record={record} />):(<MainContent data={data} />)}
      </div>

    </div>
  );
}

export default App;
