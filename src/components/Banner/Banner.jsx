import backgroundImage from "../../assets/backgroundImage.png";

const Banner = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-5xl text-center ">I Grow By Helping People In Need</h1>
        <div className="flex justify-center my-12">
          <input type="text" placeholder="Search here...." className=" p-2 rounded-r-none lg:w-full max-w-xs border" />
          <button className="btn bg-[#FF444A] text-white  rounded-l-none">Search</button>
        </div>
      </div>
    </div>


    // <div>
    //   <div className="">
    //     <img src="https://i.ibb.co/xhYXFCc/background-Image.png" className="w-full h-screen bg-cover" alt="" />

    //     <div>
    //       <h1 className="text-5xl text-center ">I Grow By Helping People In Need</h1>
    //       <div>
    //         <input type="text" placeholder="Search here...." className=" p-2 rounded-r-none lg:w-full max-w-xs border" />
    //         <button className="btn bg-[#FF444A] text-white  rounded-l-none">Search</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
