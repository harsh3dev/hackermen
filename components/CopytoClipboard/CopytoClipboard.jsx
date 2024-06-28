import React from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import { useState } from 'react';

const CopytoClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200); // Reset the copied state after 1.2 seconds
    });
  };

  return (
    <div className="flex items-center px-3 py-1 rounded-3xl shadow-md border border-green-700/60 transition-colors ease-linear "
        style={{backgroundColor: copied? "rgb(34 197 94 / 0.3 )" : ""}}
    >
      <span className="mx-2 text-sm truncate max-w-[150px] ">{text}</span>
      <button
        onClick={handleCopy}
        className="flex items-center p-2 text-white rounded-md"
        title='Copy Address'
      >
        <IoCopyOutline className=" transition-opacity ease-linear " style={{opacity: copied? '0' : '90'}} />
        <LuCopyCheck className=" transition-opacity ease-linear  -ml-4 " style={{opacity: copied? '90' : '0'}} />
      </button>
    </div>
  );
};

export default CopytoClipboard;
