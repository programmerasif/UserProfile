
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './Profile.css'
import cover from '../../assets/bgImg.jpg'
const Profile = () => {
 
    const { users } = useSelector((state) => state.user);
    const { id } = useParams();
    const user = users.find(user => user._id === id);
  
    return (
        <div>
           <div>
            <div className="bgImage flex justify-self-center items-center">
                <div className=" text-5xl  w-[80%] mx-auto">
                    <div className="font-bold">{user.name}</div>
                    <div className=" text-sm w-[60%]">{user.description}</div>
                    </div>
            </div>
          
            <div className="w-[80%] flex justify-center items-center gap-5 mt-5 mx-auto">
                <div className="bg-white px-10 py-16 drop-shadow-xl rounded-md">
                <h5 className="text-3xl font-semibold">General Information</h5>
               <div className="grid gric grid-cols-2 gap-8 mt-3">
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Position: </span> {user.jobTitle} Speciliest</h5>
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Company : </span>{user.company} </h5>
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Email: </span>{user.email} </h5>
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Location:  </span>{user.location} </h5>
               
               </div>
               <div className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md mt-8">
               <span className="text-[#61afcb] font-semibold">Skills : </span>
                {
                    user.skills.map((skill,i) => <span key={i} className="me-2">{skill},</span>)
                }
               </div>
                </div>
                <div className="relative flex justify-center items-center drop-shadow-lg rounded-md">
                    <div>
                    <img src={cover} alt="" className="w-96 rounded-md"/>
                    <h5 className="flex justify-center items-center"><img src={user.image} alt="" className="w-24  rounded-full absolute top-32"/></h5>
                    <div className="bg-white text-center font-bold">
                        <div className="p-10 ">
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Profile;