
import Marquee from "react-fast-marquee";


const Head = () => {
    return (
        <div className=" mt-16 ">
               

               <div className=" flex justify-center items-center">
               <div className=" flex items-center gap-3">
                  <img className=" h-[80px]" src="https://i.ibb.co/HqC83bT/logo.png" alt="" />
                  <h1 className=" text-6xl font-bold text-violet-600 text-center">Eid <span className=" text-orange-500">Mubarak</span></h1>

               </div>
               </div>


               <div className=" mt-5 mb-5">
                 <Marquee>

                 <p className=" text-4xl text-violet-600">“On this special day, I pray that Allah showers His blessings upon you and your family. Eid Mubarak!”</p>

                 </Marquee>
                





               </div>
             


            
        </div>
    );
};

export default Head;