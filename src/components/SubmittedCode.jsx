import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const entries = [
//   {
//     username: "test",
//     codeLanguage: "python",
//     stdin: "test",
//     timestamp: 1234567890,
//     sourceCode:
//       "print('hello dolor sit amet, consectetur adipiscing elit.Nulla nec purus feugiat, vestibulum mi id, fermentum nunc.Integer sit amet ante vel arcu fermentum aliquam.') lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, fermentum nunc. Integer sit amet ante vel arcu fermentum aliquam." ,
//   },
//   {
//     username: "test2",
//     codeLanguage: "python",
//     stdin: "test2",
//     timestamp: 1234567890,
//     sourceCode: "print('hello world')",
//   },
//   {
//     username: "test3",
//     codeLanguage: "python",
//     stdin: "test3",
//     timestamp: 1234567890,
//     sourceCode: "print('hello world')",
//   },
// ];

const SubmittedCode = () => {
  const [entries, setEntries] = React.useState([]);
  useEffect(() => {
     async function fetchData() {
      const data = await axios.get("http://localhost:3000/api/users");
       setEntries(data.data);
       console.log(data.data)
    }
    fetchData();
  }, []);
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/");
  };
  return (
    <>
      <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr className="bg-gray-300">
            <th className="px-6 py-3">Username</th>
            <th className="px-6 py-3">Code Language</th>
            <th className="px-6 py-3">Stdin</th>
            <th className="px-6 py-3">StdOut</th>
            <th className="px-6 py-3">Timestamp</th>
            <th className="px-6 py-3">Source Code</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200  ">
          {entries &&
            entries.map((entry, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 text-gray-900 text-base "
              >
                <td className="px-6 py-4">{entry.user_name}</td>
                <td className="px-6 py-4">{entry.code_language}</td>
                <td className="px-6 py-4">{entry.stdin}</td>
                <td className="px-6 py-4">{entry.stdout}</td>
                <td className="px-6 py-4">
                  {new Date(entry.createdAt).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {entry.source_code?.slice(0, 100)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className=" mx-5 mt-10  p-2 bg-slate-400 text-white rounded-md"
        onClick={changePage}
      >
        Coding page
      </button>
    </>
  );
};

export default SubmittedCode;
