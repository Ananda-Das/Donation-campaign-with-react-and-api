// import backgroundImage from "../../assets/backgroundImage.png";
// import { useRef } from "react";

const Banner = () => {
  return (
    // <div
    //   className=""
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: 'no-repeat',
    //   }}
    // >
    //   <div className="flex flex-col justify-center items-center h-screen w-full">
    //     <h1 className="text-5xl text-center ">I Grow By Helping People In Need</h1>
    //     <div className="flex justify-center my-12">
    //       <input type="text" placeholder="Search here...." className=" p-2 rounded-r-none lg:w-full max-w-xs border" />
    //       <button className="btn bg-[#FF444A] text-white  rounded-l-none">Search</button>
    //     </div>
    //   </div>
    // </div>

    // const inputRef = useRef();

    <div className="bg-bannerBG_With_Overlay bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center
         py-40">{/* absolute left-0 right-0 top-0 -z-10 overflow-hidden */}
            <h2 className="font-bold text-center 
            text-3xl lg:text-5xl mb-5">I Grow By Helping People In Need</h2>
            <div  className="px-4 md:px-0 w-full md:w-[40%] mt-4 flex flex-col gap-4 items-center justify-center md:relative">
                <input  className="w-full  p-4 bg-white rounded-lg border border-[#DEDEDE]"
                    type="text" placeholder="Search here....." />
                <button  className="bg-[#FF444A] text-white rounded-md md:rounded-tr-lg 
                md:rounded-br-lg font-semibold text-[16px] py-4 px-8
                md:absolute md:top-0 md:right-0 md:bottom-0 text-center">Search</button>
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
