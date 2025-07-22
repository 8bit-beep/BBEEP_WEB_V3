const Footer = () => {
  return (
    <div className="w-full h-28 flex justify-center px-16 items-center bg-dark">
      <div className="max-w-[160rem] w-full h-full flex items-center justify-between">
        <img className="w-50" src="/assets/Footerlogo.svg" alt="폰사진" />
        <div className="text-right p-1">
          <p className="font-normal text-xl text-white block">연락처: 010-4890-1466 (8bit 부장)</p>
          <p className="font-normal text-xl text-white block">Copyright 2023. Team 8bit All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
