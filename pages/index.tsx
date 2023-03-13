import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react";
import ReactDOM from "react-dom";
import { Allotment } from "allotment";
import ReSizeableWindow from '../components/ReSizeableWindow';
import "allotment/dist/style.css";

export default function Home() {
  // const [sizes, setSizes] = useState([100, '30%', 'auto'])

  return (
    <div className={styles.container}>
      <ReSizeableWindow id={styles.test1} width={3000}></ReSizeableWindow>
      <ReSizeableWindow width={3000}></ReSizeableWindow>
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
