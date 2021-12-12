import React, { useState, useEffect } from 'react'
import style from "./css/style.css";

import logo from './css/logo.png'

function Logo() {
    return (
        <img className="logo" src={logo} alt={"logo"}/>
    );
}

export default Logo;