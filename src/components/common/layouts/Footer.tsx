const Footer = () => {
    return (
        <div className="w-full flex justify-center px-12 h-20 items-center bg-dark">
            <div className="max-w-[160rem] w-full h-full flex items-center justify-between">
                <img
                    className="w-35"
                    src="/assets/Footerlogo.svg"
                    alt="폰사진"
                />
                <div className="text-right p-1">
                    <p className="font-normal text-sm text-white block">
                        연락처: 2210 김태우
                    </p>
                    <p className="font-normal text-sm text-white block">
                        Copyright 2023. Team 8bit All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
