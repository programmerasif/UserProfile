import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const AllUsers = () => {
    const {users} = useSelector((state) => state.user);
 
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[90%] gap-5 xl:gap-10 mx-auto px-3 mb-10">
            {
                users.map(item => <div key={item._id}>
                    <div className="flex gap-3 items-center  bg-white drop-shadow-2xl rounded-xl">
                <img src={item.image} alt="" className='w-36  xl:w-52 rounded-xl'/>
                <div className='text-start pe-5 flex flex-col gap-2 xl:gap-4'>
                    <h5 className='md:text-2xl xl:text-3xl font-semibold'>{item.name}</h5>
                    <span className='text-gray-500 text-sm'>Member science 2020</span>
                    <div className='text-gray-500 text-sm'>Title: <span className='font-bold text-[#1d1c1c]'>{item.jobTitle}</span></div>
                    <div className='text-gray-500 text-sm'>Email: <span className='font-bold text-[#1d1c1c]'>{item.email}</span></div>
                   <Link to='/Profile'><button className='bg-blue-500 text-white font-semibold xl:font-bold px-2 py-1  xl:py-2 xl:px-3 rounded-md'>View Profile</button></Link>
                    
                   
                </div>
            </div>
                </div>)
            }
        </div>
        <div className='flex justify-center items-center mt-16 mb-10 bg-blue-500 w-36 px-5 py-3 text-white font-bold rounded-md mx-auto'>
        <Link to='/'> <button >View Less</button> </Link>
        </div>
       
        </div>
    );
};

export default AllUsers;