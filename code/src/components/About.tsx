import React from "react";
import sawah from "../images/sawah.png"; 
import view from "../images/view.png";

const About: React.FC = () => {
    return (
        <div id="about" className="flex w-full min-h-screen"> 
            <div className="w-1/3 bg-[#9CAF88] flex items-center justify-center p-8 md:p-12 lg:p-16 rounded-xl translate-x-[-20px] ">
                
                <div className="scale-140 w-full max-w-md translate-x-[50px]"> 
                    <img
                        src={sawah}
                        alt="Sawah"
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>

          
            <div className="w-2/3 bg-white flex flex-col top-center p-8 md:px-16 lg:px-24">
                <h1 className="font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
                    About
                </h1>
                <p className="font-lexend text-gray-700 text-base md:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu.
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu.
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu.
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu.
                   
                </p>
                <img src={view} alt="View" className=" w-full h-auto object-contain object-bottom rounded-3xl"/>
            </div>
        </div>
    );
};

export default About;