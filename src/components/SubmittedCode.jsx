import React from "react";
const entries = [
  {
    username: "test",
    codeLanguage: "python",
    stdin: "test",
    timestamp: 1234567890,
    sourceCode:
      "print('hello world') rgjrj goeri jgoo rj lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <div className="flex flex-col w-full h-full">
      <table className="p-2">
        <thead className=" ">
          <tr className="bg-gray-300">
            <th>Username</th>
            <th>Code Language</th>
            <th>Stdin</th>
            <th>Timestamp</th>
            <th>Source Code</th>
          </tr>
        </thead>
         
          <tbody className="divide-y divide-gray-200 p-4">
            {entries.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td>{entry.username}</td>
                <td>{entry.codeLanguage}</td>
                <td>{entry.stdin}</td>
                <td>{new Date(entry.timestamp).toLocaleString()}</td>
                <td>{entry.sourceCode.slice(0, 100)}</td>
              </tr>
            ))}
          </tbody>
  
      </table>
    </div>
  );
};

export default SubmittedCode;
