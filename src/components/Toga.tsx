// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { sanityClient } from "../lib/sanityClient";
// import view from "../images/view.png";
// import { Button } from "./ui/button";

// interface TogaItem {
//   _id: string;
//   title: string;
//   description: string;
//   image: { asset: { url: string } };
//   benefits?: string[];
// }

// interface TogaListProps {
//   mode?: "full" | "simple";
// }

// const TogaList: React.FC<TogaListProps> = ({ mode = "full" }) => {
//   const [togaItems, setTogaItems] = useState<TogaItem[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const query = `*[_type == "toga"]{
//         _id,
//         title,
//         description,
//         image { asset -> { url } },
//         benefits
//       }`;
//       const data = await sanityClient.fetch(query);
//       setTogaItems(data);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full bg-[#F7F7F7] px-4 md:px-20 py-16">


//       <div className="grid gap-8">
//         {togaItems.map((item) => (
//           <Card key={item._id} className="bg-white rounded-3xl shadow-md px-6 py-6">
//             <CardHeader>
//               <CardTitle className="font-girona text-2xl sm:text-3xl mb-2">
//                 {item.title}
//               </CardTitle>
//             </CardHeader>
//               <>
//                 <CardContent className="flex flex-col-reverse md:flex-row gap-6">
//                   <div className="w-full md:w-2/3">
//                    <p className="font-lexend text-base md:text-[18px] text-gray-700 mb-4">
//                       {item.description}
//                     </p>
//                    {item.benefits && item.benefits.length > 0 && (
//                    <ul className="list-disc pl-5 text-sm text-gray-600">
//                     {item.benefits.map((benefit, i) => (
//                     <li key={i}>{benefit}</li>
//                     ))}
//                    </ul>
//              )}
//                    </div>
//                <div className="w-full md:w-1/3 flex items-center justify-center">
//                <div className="overflow-hidden rounded-2xl w-full h-[200px] cursor-pointer group">
//                 <img
//                 src={item.image?.asset?.url || view}
//                 alt={item.title}
//                 className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-2xl"
//                     />
//                  </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button className="bg-black text-white font-lexend text-base px-6 py-3 rounded-full hover:bg-gray-800">
//                     Learn More
//                   </Button>
//                 </CardFooter>
//               </>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TogaList;
