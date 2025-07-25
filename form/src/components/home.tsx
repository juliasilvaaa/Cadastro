import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCakeCandles, faEnvelope, faIdCard, faLocationArrow, faLocationDot, faPhone, faThumbTack, faUser, faUserTie, faVenusMars, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Home() {
    return (
        <div className="h-screen items-center justify-center bg-gray-300">

            <div className="flex w-full justify-between p-5">
                <h1 className="text-2xl font-bold mb-4">Welcome, Julia</h1>

            <p>Conteúdo do painel administrativo.</p>
            </div>

        </div>
    );
}
