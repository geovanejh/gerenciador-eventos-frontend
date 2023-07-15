import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../api";
import {
  QrcodeVerde,
  QrcodeVermelho,
} from "../components/Qrcode/Qrcode.styled";
import { Button } from "../components/Button/Button";
import Loading from "../components/Loading/Loading";

const QrcodePage = () => {
  const [scanResult, setScanResult] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    async function success(result) {
      scanner.clear();
      setScanResult(result);
      try {
        setLoading(true);
        const data = await api.post(result);
        setStatus(data.status);
      } catch (error) {
        setStatus(error);
      }
      setLoading(false);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      {scanResult ? (
        <div>
          {status === 200 ? (
            <QrcodeVerde>
              <h1>INGRESSO VÁLIDO!!!!</h1>
              <Button primary onClick={() => window.location.reload(false)}>
                LIMPAR
              </Button>
            </QrcodeVerde>
          ) : (
            <QrcodeVermelho>
              <h1>Ingresso inválido ou já utilizado.</h1>
              <Button primary onClick={() => window.location.reload(false)}>
                LIMPAR
              </Button>
            </QrcodeVermelho>
          )}
        </div>
      ) : (
        <div id="reader"> </div>
      )}
    </div>
  );
};

export default QrcodePage;
