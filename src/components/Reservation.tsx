import React from "react";
import view from "../images/view.png";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Car } from "lucide-react";
import { Button } from "./ui/button";

const Reservation: React.FC = () => {
    return (
         <div className="w-full bg-[#F7F7F7] px-4 md:px-20 py-16">  
                <h1 className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
                    Reservation
                </h1>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-girona text-[50px]">Package 1</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row">
                        <div className="w-2/3">
                             <p className="font-lexend text-[18px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                            </p>
                        </div>  
                        <div className="w-1/3 translate-x-[100px]"> 
                            <img src={view} alt="View" className="w-100 h-auto object-contain object-cover rounded-3xl" />
                        </div> 

                    </CardContent>
                    <CardFooter>
                        <Button className="font-lexend text-base px-6 py-3 rounded-4xl">Book Now</Button>
                    </CardFooter>
                </Card>
         </div>
    );
};

export default Reservation;