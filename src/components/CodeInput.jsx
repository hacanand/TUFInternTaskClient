import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CodeInput() {
  const navigate=useNavigate();
  const changePage = () => {
     navigate("/submitted");
  }
  const preventReload = (e) => {
    e.preventDefault();
  };
  const sendData = async() => {
    try {
      const data = await axios.post("http://localhost:3000/api/users", {
        user_name: "test1",
        code_language: "CPP",
        stdin: "stdin test",
        source_code: " source code test",
      });
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className=" w-full h-full flex flex-col p-5">
      <form onSubmit={preventReload}>
        <div className=" flex gap-4 ">
          <h1 className="text-md">Username:</h1>
          <input
            type="text"
            className="rounded-md p-1 border-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        <div className="mt-4 gap-4 flex rounded">
          <h2>Preferred code language:</h2>
          <select className="flex rounded border-2">
            <option value="C++">CPP</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div>
          <div className="mt-4 flex gap-5 w-full">
            <div className="flex flex-col w-9/12 ">
              <div className="">
                <h3>Source code:</h3>
              </div>
              <textarea className="self-start mt-3 mb-2.5 w-full min-h-[300px] p-2 border-2 focus:ring-2 rounded focus:ring-slate-500 focus:outline-none" />
            </div>
            <div className="flex flex-col w-3/12 ">
              <div>
                <h3>Standard input:</h3>
              </div>
              <div className="flex flex-col" />
              <textarea className="self-start mt-3 mb-2.5 w-full min-h-[300px] border-2 p-2 rounded  focus:ring-2 focus:ring-slate-500 focus:outline-none" />
            </div>
          </div>
          <button
            className="mt-5  p-2 bg-slate-500 text-white rounded-md"
            onClick={sendData}
          >
            Submit
          </button>
          <button className=" mx-10 mt-5  p-2 bg-slate-400 text-white rounded-md" onClick={changePage}>
            Submission Page
          </button>
        </div>
      </form>
    </div>
  );
}
export default CodeInput;
