import React from "react";
const entries = [
  {
    username: "test",
    codeLanguage: "python",
    stdin: "test",
    timestamp: 1234567890,
    sourceCode:
      "print('hello dolor sit amet, consectetur adipiscing elit.Nulla nec purus feugiat, vestibulum mi id, fermentum nunc.Integer sit amet ante vel arcu fermentum aliquam.') lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, fermentum nunc. Integer sit amet ante vel arcu fermentum aliquam." ,
  },
  {
    username: "test2",
    codeLanguage: "python",
    stdin: "test2",
    timestamp: 1234567890,
    sourceCode: "print('hello world')",
  },
];

const SubmittedCode = () => {
  return (
    <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
        <tr className="bg-gray-300">
          <th className="px-6 py-3">Username</th>
          <th className="px-6 py-3">Code Language</th>
          <th className="px-6 py-3">Stdin</th>
          <th className="px-6 py-3">Timestamp</th>
          <th className="px-6 py-3">Source Code</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200  ">
        {entries.map((entry, index) => (
          <tr key={index} className="hover:bg-gray-100 ">
            <td className="px-6 py-4">{entry.username}</td>
            <td className="px-6 py-4">{entry.codeLanguage}</td>
            <td className="px-6 py-4">{entry.stdin}</td>
            <td className="px-6 py-4">{new Date(entry.timestamp).toLocaleString()}</td>
            <td className="px-6 py-4">{entry.sourceCode.slice(0, 100)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubmittedCode;
