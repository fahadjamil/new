import React, { useState } from "react";
import * as XLSX from "xlsx";

const Excel = () => {
  const [items, setItems] = useState([]);
  const [startTime,setStartTime]=useState([]);
  const[endTime,setEndTime]=useState([]);


  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer", cellDates:true});

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
       
      setItems(d);
    });
  };
  console.log(items);
  var array = [];
  var Name={};
  var slots={};
  const divider=()=>{
  items?.map((user, index) => {
      let name=user.Title;
    let start=new Date(user.Start_time);
    let end=new Date(user.End_time);
   Name=user.Title;
    for (let i=0;end > start;i++) 
    {
        
        let st = start;
        start = new Date(start.getTime() + 30 *60*1000);
        let et = start;
        slots[i]={st,et}
        
      }
      array.push({Name,slots});
 })
 console.log(array)
}


  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      ></input>
 <tbody>
{items?.map((user, index) => (
                <tr>
                  <td>{new Date(user.Start_time).toString()}</td><hr/>
                  <td>{new Date(user.End_time).toString()}</td>
                  
                </tr>
              ))}</tbody>
              <button className="btn btn-primary" onClick={divider}>slot</button>
    </div>
  );
};
export default Excel;
