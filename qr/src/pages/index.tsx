import { useState } from 'react';
import QRCodeComponent from './api/QR/QR-Generator';
import { QrScanner } from '@yudiel/react-qr-scanner';

export default function Home() {
  const [qrValue, setQRValue] = useState('');
  const [scannedValue, setScannedValue] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQRValue(event.target.value);
  }

  function handleScanResult(result: string | null) {
    if (result) {
      setScannedValue(result);
    }
  }

  return (
    <div className="flex justify-center items-center h-full bg-gray-800">
      <div className="w-4/6 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <QRCodeComponent value={qrValue} />
        </div>
        <div className="w-full flex justify-center items-center">
          <input type="text" value={qrValue} onChange={handleInputChange} className="w-full bg-green-500 text-black py-2 px-4 rounded-md placeholder-black m-5" placeholder="Introduce tu texto aquí" />
        </div>
        <div className="w-screen flex justify-center items-center">
          <QrScanner
            onDecode={handleScanResult}
            onError={(error) => console.log(error?.message)}
          />
        </div>
        {scannedValue && (
          <div className="mt-4 bg-green-600">
            <span className="text-black font-bold text-4xl">Valor escaneado: {scannedValue}</span> 
          </div>
        )}
      </div>
    </div>
  );
}
