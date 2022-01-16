import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './styles.css'

export default function Site(props: any) {

  return (
    <div className="site-container">
      <Navbar/>
        <main className="content">
          {props.children}
        </main>
      <Footer/>
    </div>
   
  );
};