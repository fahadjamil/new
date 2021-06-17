import React, { useState } from "react";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

const Employee = () => {
  const [data, setdata] = useState({
    starttime: "",
    endtime: "",
  });

  const divider = () => {
    var start = new Date(data.starttime);
    var end = new Date(data.endtime);

    var array = [];

    while (end > start) {
      console.log(end, " ",start )
      let st = start;
      start = new Date(start.getTime() + 30 * 60 * 1000);
      let et = start;
      array.push({
        e: et,
        s: st,
      });
    }
    console.log(array);
  };
  const setter = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    if (e.target.id == "starttime") {
      setdata({ ...data, starttime: e.target.value });
    }
    if (e.target.id == "endtime") {
      setdata({ ...data, endtime: e.target.value });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    divider();

    console.log(data);
  };

  return (
    <>
      <div className="container m-5 p-5 bg-info">
        <div className="row">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Start Time
                </span>
              </div>
              <input
                type="datetime-local"
                className="form-control"
                value={data.starttime}
                onChange={setter}
                id="starttime"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  End Time
                </span>
              </div>
              <input
                type="datetime-local"
                className="form-control"
                value={data.endtime}
                onChange={setter}
                id="endtime"
              />
            </div>
          </div>
          <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />

          <button className="btn btn-success" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Employee;
