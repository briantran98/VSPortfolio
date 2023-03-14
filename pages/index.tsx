import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState, useRef} from "react";
import ReactDOM from "react-dom";
import { Allotment } from "allotment";
import ReSizeableWindow from '../components/ReSizeableWindow';
import "allotment/dist/style.css";

export default function Home() {
  // const [width, setWidth] = useState(0)
  // let windowSizeWidth = useRef(window.innerWidth);
  let width1 = 50
  let width2 = 370
  let width3 = 0;
  if (typeof window !== "undefined") {
    console.log(window.innerWidth)
    width3 = window.innerWidth - width1 - width2
  }
  return (
    <div className={styles.container}>
      <ReSizeableWindow id={styles.test1} width={width1}></ReSizeableWindow>
      <ReSizeableWindow width={width2}></ReSizeableWindow>
      <ReSizeableWindow id={styles.test2} width={width3}></ReSizeableWindow>
      {/* <Allotment className={styles.sidebar}>
        <Allotment.Pane snap>
          <div>Pane 1</div>
        </Allotment.Pane>
        <Allotment.Pane snap>
          <div>Pane 2</div>
        </Allotment.Pane>
      </Allotment> */}
    </div>
  )
}
