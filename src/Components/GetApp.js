import { useState } from "react";
import { AppDownloadArr } from "../utils/constants";
import GetAppCards from "./GetAppCards";
const GetApp = () => {
    const [indx,setIndx] = useState(0);
  return (
    <div id="get-app">
    {
        AppDownloadArr.map((naam,index)=>(
            <GetAppCards 
            key={naam} naam={naam} 
            isExpanded={index==indx?true:false}
            setIndexFunc = {()=>setIndx(index)}
            />
        )
        
        )
    }
    </div>
  );
};

export default GetApp;