import { Link } from 'react-router-dom';
import ima from '../../assets/rsz_1close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.jpg'
const AllUsers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[90%] gap-5 xl:gap-10 mx-auto px-3">
            <div className="flex gap-3 items-center  bg-white drop-shadow-2xl rounded-xl">
                <img src={ima} alt="" className='w-36  xl:w-52 rounded-xl'/>
                <div className='text-start pe-5 flex flex-col gap-2 xl:gap-4'>
                    <h5 className='md:text-2xl xl:text-3xl font-semibold'>WordsWorth</h5>
                    <span className='text-gray-500 text-sm'>Member science 2020</span>
                    <div className='text-gray-500 text-sm'>Name: <span className='font-bold text-[#1d1c1c]'>WordsWorth</span></div>
                    <div className='text-gray-500 text-sm'>Email: <span className='font-bold text-[#1d1c1c]'>asifkhan.dev2@gmail.com</span></div>
                   <Link to='/Profile'><button className='bg-blue-500 text-white font-semibold xl:font-bold px-2 py-1  xl:py-2 xl:px-3 rounded-md'>View Profile</button></Link>
                    
                   
                </div>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-xl drop-shadow-2xl">
                <img src={ima} alt="" className='w-36  xl:w-52 rounded-xl'/>
                <div>
                    <h5 className='text-3xl'>WordsWorth</h5>
                    <span>Member science 2020</span>
                </div>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-xl drop-shadow-2xl">
                <img src={ima} alt="" className='w-36  xl:w-52 rounded-xl'/>
                <div>
                    <h5 className='text-3xl'>WordsWorth</h5>
                    <span>Member science 2020</span>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;