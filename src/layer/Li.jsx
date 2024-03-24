import React from 'react'
import { Link } from 'react-router-dom';

const Li = ({ href, liText, className, child, LiClassName }) => {
  return (
    <li className={LiClassName}>
      <Link className={className} to={href}>
        {liText}
      </Link>
      {child}
    </li>
  );
};

export default Li