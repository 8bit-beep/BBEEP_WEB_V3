const Footer = () => {
  return (
    <div className="w-full flex justify-center px-16 h-20 items-center bg-dark">
      <div className="max-w-[160rem] w-full h-full flex items-center justify-between">
        <img className="w-35" src="/assets/Footerlogo.svg" alt="폰사진" />
        <div className="text-right p-1">
          <p className="font-normal text-sm text-white block">연락처: 010-4890-1466 (8bit 부장)</p>
          <p className="font-normal text-sm text-white block">Copyright 2023. Team 8bit All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
