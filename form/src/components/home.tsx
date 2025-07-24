import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCakeCandles, faEnvelope, faIdCard, faLocationArrow, faLocationDot, faPhone, faThumbTack, faUser, faUserTie, faVenusMars, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Home() {
    return (
        <div className="h-screen items-center justify-center bg-gray-300">

            <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold mb-4">Hi, Adminstrator</h1>


                <div className='flex gap-5'>
                    <div>
                        {/* Perfil Adminstrador */}
                    <Link href="/login-adm" className='bg-gray-200 h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                        <FontAwesomeIcon icon={faUserTie}
                            style={{ width: '20px', height: '20px' }}
                            className="text-black  h-full" />
                    </Link>  
                    </div>

                    <div>
                            {/* Perfil Adminstrador */}
                    <Link href="/login-adm" className='bg-gray-200 h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                        <FontAwesomeIcon icon={faUserTie}
                            style={{ width: '20px', height: '20px' }}
                            className="text-black  h-full" />
                    </Link>  
                    </div>


                  
                </div>

            </div>

            <p>Conteúdo do painel administrativo.</p>
        </div>
    );
}
