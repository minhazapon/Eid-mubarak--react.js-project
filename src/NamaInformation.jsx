import { Link } from "react-router-dom";


const NamaInformation = ({eid}) => {

     const {image, country, description} = eid


    return (
        <div className=" mt-10">

               <div className="card card-compact w-96 bg-base-100 shadow-xl">
                 <figure><img className=" h-[300px] w-[350px]" src={image} alt="Shoes" /></figure>
                 <div className="card-body">
                   <h2 className="card-title"> Country: {country}   </h2>
                   <p className=" text-xl text-slate-500"  >  {description} </p>
                   <div className="card-actions justify-end">

                      <Link to="/festivals"  >

                     <button className="btn btn-primary">GO festivals
                     
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                     
                     </button>

                     </Link>




                   </div>
                 </div>
               </div>

            
        </div>
    );
};

export default NamaInformation;