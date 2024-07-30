
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
            <ul className=" flex justify-between">
                {
                   statitics.map((data)=>(
                     <li key={data.id} className=" flex flex-col items-center space-y-2"><span className=" text-2xl font-bold text-accent">{data.value}</span><span className=" text-amber-700">{data.label}</span></li>
                   ))  
                }
                
             
            </ul>

        </div>
     );
}
 
export default Statistics;