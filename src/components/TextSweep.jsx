import React, { useEffect, useState } from 'react';
import './TextSweep.css';

const TextSweep = ({ text, children, className = '' }) => {
  return (
    <span className={`text-sweep ${className}`}>
      {text || children}
    </span>
  );
};

export default TextSweep;
