


const Festivals = () => {
    return (
        <div className=" mt-10 mb-10 mr-10 ml-10">
                <div>
                     <h1 className=" text-2xl "  >Muslims observe two Eids: -</h1>

                     <ul className=" mt-5 text-xl font-bold">
                        <li>1-  Eid Ul fitr</li>
                        <li>2- Eid ul Azha</li>
                     </ul>

                </div>


                <div className=" flex justify-center items-center gap-10  flex-col md:flex-row">


                <div className="card w-96 bg-base-100 shadow-xl  border-[1px] border-yellow-500 ">
                <figure className="px-10 pt-10">
                  <img src="https://i.ibb.co/pbxsDLy/Eid-Al-Fitr-2024-1.webp" alt="Shoes" className=" h-[170px] w-[300px]   rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-3xl">Eid ul Fitr</h2>
                  <p  className=" text-xl  text-slate-600" >Eid al-Fitr is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-sunset fasting of Ramadan.</p>
                  
                </div>
              </div>




              
              <div className="card w-96 bg-base-100 shadow-xl  border-[1px] border-yellow-500  ">
                <figure className="px-10 pt-10">
                  <img src="https://i.ibb.co/n8m61DC/Fz-ET4-DPXg-AEO22-K-1687752723907-1687752746839.jpg" alt="Shoes" className=" h-[170px] w-[300px]   rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-3xl">Eid ul azha</h2>
                  <p  className=" text-xl  text-slate-600" > It honours the willingness of Ibrahim to sacrifice his son Ismail as an act of obedience to God's command.    </p>
                  
                </div>
              </div>













                </div>




            
        </div>
    );
};

export default Festivals;