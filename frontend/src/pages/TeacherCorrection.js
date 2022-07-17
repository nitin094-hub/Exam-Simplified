import React, { useState } from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/TeacherCorrection.module.scss";
import { QrReader } from "react-qr-reader";
import { BsChevronRight } from "react-icons/bs";

function TeacherCorrection() {
  const [displayScan, setDisplayScan] = useState(false);

  return (
    <LayOut>
      <div className={styles.teacherCorrectionContainer}>
        <h1 style={{ padding: "1.6rem 0", textAlign: "center" }}>
          Teacher Correction
        </h1>
        <div className={styles.teacherCorrectionScannerContainer}>
          <div>
            <div className={styles.teacherCorrectionScanner}>
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
            <input type="number" placeholder="Marks Obtain" required />
          </div>
        </div>
        <button className={styles.scanNxtBtn}>
          <h3>Scan Supply QrCode</h3>
          <BsChevronRight size={23} color="white" />
        </button>
      </div>
    </LayOut>
  );
}

export default TeacherCorrection;
