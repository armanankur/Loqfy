

const FrequentlyUsed = () => {
  return (
    <div className="shadow-md h-auto p-4 w-full rounded-lg mt-2 flex flex-col justify-center items-start bg-white ">

      <p className="text-xl font-semibold ml-4 p-2 ">Frequently Used</p>

    <div className="flex justify-center items-center gap-2 ">
        <Card title={"Contract Execution Upload"}/>
        <Card title={"E-Stamp Services"}/>
        <Card title={"E-Sign Services"}/>
    </div>
    </div>
  )
}

export default FrequentlyUsed

const Card = ({title}) => {
    return (
      <div className="w-1/3 rounded-lg shadow-md p-4 flex-wrap ">

        <div className="flex flex-col space-y-2 flex-wrap">

          <div className="text-md font-semibold flex justify-between items-center">
            
           {title}
          </div>

          <div className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis autem, natus 
          </div>

         <small className="text-violet-900 font-semibold">Get Started</small>
        </div>
      </div>
    );
  };