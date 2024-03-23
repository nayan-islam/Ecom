import React from 'react'
import { Link } from 'react-router-dom';

const Li = ({ href, liText, className }) => {
  return (
    <>
      <li>
        <Link className={className} to={href}>{liText}</Link>
      </li>
    </>
  );
};

export default Li