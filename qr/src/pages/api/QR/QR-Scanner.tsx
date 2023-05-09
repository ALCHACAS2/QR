import { QrScanner } from '@yudiel/react-qr-scanner';

export default function QRScanner() {
    return (
        <div className='flex items-center w-11/12'>.
            <QrScanner
                onDecode={(result) => console.log(result)}
                onError={(error) => console.log(error?.message)} />
        .</div>
    );
}
