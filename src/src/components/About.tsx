import React from "react";
import sawah from "../images/sawah.png"; // Ensure this path is correct

const About: React.FC = () => {
    return (
        <div className="flex w-full min-h-screen"> {/* Use min-h-screen for flexibility */}
            {/* Left Column with Image */}
            <div className="w-1/3 bg-[#9CAF88] flex items-center justify-center p-8 md:p-12 lg:p-16">
                {/* Image Container (optional, can help with max-width if image is very large) */}
                <div className="w-full max-w-md"> {/* Adjust max-w-md as needed, or remove if image should fill more */}
                    <img
                        src={sawah}
                        alt="Sawah"
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                        // If you want a fixed aspect ratio for the image container, you might need different classes.
                        // For example, to make it squarer: className="aspect-square w-full object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Right Column with Text Content */}
            <div className="w-2/3 bg-white flex flex-col justify-center p-8 md:px-16 lg:px-24">
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
                    {/* Add more text or break it into more paragraphs */}
                </p>
                {/* You can add more content here */}
            </div>
        </div>
    );
};

export default About;