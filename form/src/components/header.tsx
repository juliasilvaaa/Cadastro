import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'


export default function HeaderAdm() {
    return (
        <div className='w-full bg-white flex flex-col h-[60px] justify-between'>

            <div className='flex justify-end items-center gap-5 p-5'>
                <div className='flex text-black'>
                    <FontAwesomeIcon icon={faBell}
                        style={{ width: '20px', height: '20px' }}
                        className="h-full" />


                </div>
                <div className='flex items-center text-black gap-5'>
                    <FontAwesomeIcon icon={faUser}
                        style={{ width: '20px', height: '20px' }}
                        className="text-black  h-full" />
                    <h1>Júlia Silva</h1>
                </div>

            </div>

            <hr className='w-full border-1 border-gray-300' />


        </div>
    )
}