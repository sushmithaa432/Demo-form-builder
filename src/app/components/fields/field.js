'use client'
import React from 'react';

const Field = ({ label, type, placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-2 text-brown-700">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-brown-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-600"
      />
    </div>
  );
};

export default Field;