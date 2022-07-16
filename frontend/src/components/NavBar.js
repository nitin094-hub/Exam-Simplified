import React from "react";
import styles from "../styles/Navbar.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.NavbarContainer}>
      <h2 className={styles.NavbarContainerHeading}> Exam's Simplified </h2>
      <div className={styles.NavbarContents}>
        <Link to={"/"} className={styles.NavbarContent}>
            <AiOutlineHome size={25} color="#b40000"/>
            <p style={{color:"#b40000"}}>DASHBOARD</p>
        </Link>
        <Link to={"/"} className={styles.NavbarContent}>
            <AiOutlineHome size={25} color="aliceblue"/>
            <p>DASHBOARD</p>
        </Link>
        <Link to={"/"} className={styles.NavbarContent}>
            <AiOutlineHome size={25} color="aliceblue"/>
            <p>DASHBOARD</p>
        </Link>
        <Link to={"/"} className={styles.NavbarContent}>
            <AiOutlineHome size={25} color="aliceblue"/>
            <p>DASHBOARD</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
