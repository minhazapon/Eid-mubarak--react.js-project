import { useEffect, useState } from "react";
import NamaInformation from "./NamaInformation";




const Namaz = () => {


    const [eid, setEid] = useState([])


    useEffect( () => {

      fetch('eid.json')
      .then(res => res.json())
      .then(data => setEid(data))

    }  , [])





    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">
                <div className=" text-center" >
                    <h1 className=" text-6xl  text-violet-600 font-bold">muslim namaz-   </h1>
                    <p  className=" mt-4 text-xl  text-slate-500 " >Eid al-Fitr is one of two major holidays celebrated by Muslims and<br></br> commemorates the end of the holy month of Ramadan</p>
 

                </div>
                
                <div  className=" flex justify-center"  >

                <div className=" grid  md:grid-cols-3 gap-5">

                     {

                        eid.map( eid => <NamaInformation key={eid.id} eid={eid}  ></NamaInformation> )
 

                     }




                </div>

                </div>


            
        </div>
    );
};

export default Namaz;