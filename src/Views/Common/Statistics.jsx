
const Statistics = () => {
   const statitics = [
       
        {
            id:1,
            label:"In property sales",
            value:"99%"
        },
        {
            id:2,
            label:"Customer satisfaction",
            value:"25K+"
        },
        {
            id:3,
            label:"Property Transaction",
            value:"25K+"
        },
        {
            id:4,
            label:"Price Reduce",
            value:"2,918"
        },
    ]
    return ( 
        <div className=" w-full min-h-24 py-7">
            <ul className=" flex justify-between gap-3 flex-wrap">
                {
                   statitics.map((data)=>(
                     <li key={data.id} className=" flex flex-col items-center justify-center space-y-2"><span className=" sm:text-sm md:text-xl lg:text-2xl font-bold text-accent">{data.value}</span><span className=" text-center text-amber-700 sm:text-sm md:text-xl lg:text-xl">{data.label}</span></li>
                   ))  
                }
                
             
            </ul>

        </div>
     );
}
 
export default Statistics;