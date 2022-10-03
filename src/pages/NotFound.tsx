import React from 'react';
import classes from './NotFound.module.css';
import notfound from './../images/notfound.png';

const NotFound = () => {
  return (
    <div className={classes.notfound}>
    <img src={notfound} alt='notfound'/>
    </div>
  )
}

export default NotFound;