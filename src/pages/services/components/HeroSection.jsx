import HeroBg from "../../../assets/herobg.svg";

const HeroSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-[80%] mx-auto">
        <div
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
          className="rounded-[10px] py-[2rem] w-full"
        >
          <div className="grid grid-cols-[80%_20%] justify-items-center items-center content-between w-[80%] mx-auto">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <h2 className="text-[#F8FAFC] text-[30px] leading-[80px]">
                <span className="text-[50px]">Unleash </span>Your <span className="text-[50px]">Creativity </span> with 
                <span className="text-[50px]"> Our</span> Comprehensive <span className="text-[50px]">UGC</span> Services
              </h2>
             
              <p className="text-[#F8FAFC]">
                  From content creation and promotion to audience engagement and monetization,  
                  our comprehensive UGC services are tailored to meet the needs of creators at every stage of their journey
              </p>
            </div>

            {/* <img src={HeroImg} alt="img" className="w-[250px] h-[300px]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
