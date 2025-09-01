"use client";

import React from "react";

interface InputProps {
    label:string;
    value:string;
    onChange:(val:string) => void;
    error?:string;
    placeholder?:string;   
}

const Input: React.FC<InputProps> = ({label, value, onChange, error, placeholder}) => {
    return (
      <div className="mb-4">
        <label className="block mb-1 font-medium">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          autoFocus
        aria-label={label}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
}

export default Input;