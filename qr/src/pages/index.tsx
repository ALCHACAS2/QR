import { useState } from 'react';
import QRCodeComponent from './api/QR/QR-Generator';
import QRScanner from './api/QR/QR-Scanner';

export default function Home() {
  const [qrValue, setQRValue] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQRValue(event.target.value);
  }

  return (
    <div className="flex justify-center items-center h-full bg-gray-800 pb-10">
      <div className="w-4/6 flex flex-col justify-center items-center mt-3.5">
        <div className="flex justify-center items-center">
          <QRCodeComponent value={qrValue} />
        </div>
        <div className="w-full flex justify-center items-center m-5">
          <input type="text" value={qrValue} onChange={handleInputChange} placeholder='Digite el texto a generar' className="w-full bg-green-500 text-black placeholder-black py-2 px-4 rounded-md" />
        </div>
        <div className="w-full flex justify-center items-center">
          <QRScanner />
        </div>
      </div>
    </div>
  );
}
