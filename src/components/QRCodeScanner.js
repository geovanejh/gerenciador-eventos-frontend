import React, { useState } from "react";
import Webcam from "react-webcam";

const QRCodeScanner = ({ onScan }) => {
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleScan = async () => {
    if (webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();
      const qrCodeData = await readQRCode(imageSrc);
      onScan(qrCodeData);
      setCameraOpen(false);
    }
  };

  const openCamera = () => {
    setCameraOpen(true);
  };

  const readQRCode = async (imageSrc) => {
    const response = await fetch("https://api.qrcode-api.com/scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageSrc }),
    });
    const data = await response.json();
    return data?.code || "";
  };

  const webcamRef = React.useRef(null);

  return (
    <div>
      {!cameraOpen ? (
        <button onClick={openCamera}>Abrir Câmera</button>
      ) : (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ display: "none" }}
          />
          <button onClick={handleScan}>Capturar</button>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
