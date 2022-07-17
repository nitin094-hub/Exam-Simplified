import React, { useState, useRef } from "react";
import LayOut from "../components/LayOut";
import { QrReader } from "react-qr-reader";
import styles from "../styles/InvigilatorScan.module.scss";
import { BsChevronRight } from 'react-icons/bs';

function InvigilatorScan() {
  const [displayScan, setDisplayScan] = useState(false);
  return (
    <LayOut>
      <div className={styles.invigilatorScanContainer}>
        <h1 style={{ padding: "1.6rem 0", textAlign: "center" }}>
          Invigilator Scan
        </h1>
        <div className={styles.invigilatorScannners}>
          <div>
            <div className={styles.invigilatorScanner}>
              {displayScan && (
                <QrReader
                  constraints={{
                    facingMode: "environment",
                  }}
                  onResult={(result, error) => {
                    if (!!result) {
                      console.log(result);
                      setDisplayScan(false);
                    }
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <button className={styles.scanBtn}>
              <h3>Scan Supply QrCode</h3>
            </button>
          </div>
          <div>
            <div className={styles.invigilatorScanner}>
              {displayScan && (
                <QrReader
                  constraints={{
                    facingMode: "environment",
                  }}
                  onResult={(result, error) => {
                    if (!!result) {
                      console.log(result);
                      setDisplayScan(false);
                    }
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <button className={styles.scanBtn}>
              <h3>Scan Student QrCode</h3>
            </button>
          </div>
        </div>
            <button className={styles.scanNxtBtn}>
              <h3>Scan for Next Student</h3>
              <BsChevronRight size={23} color="white"/>
            </button>
      </div>
    </LayOut>
  );
}

export default InvigilatorScan;
