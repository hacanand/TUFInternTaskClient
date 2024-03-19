import * as React from "react";

function CodeInput() {
  return (
    <div className=" w-full h-full flex flex-col p-5">
      <form action="">
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
            <option value="C++">C++</option>
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
          <button className="mt-5  p-2 bg-slate-500 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default CodeInput;
