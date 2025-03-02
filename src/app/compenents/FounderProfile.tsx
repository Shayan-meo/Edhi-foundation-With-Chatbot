import Image from "next/image";
import img from "../images/edhi.jpg"
export default function FounderProfile() {
    return (
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={img} // replace with correct path
            alt="Abdul Sattar Edhi"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right Text Section */}
        <div className="w-full md:w-1/2 p-12 relative ">
          {/* Arrow Shape */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 hidden md:block">
            <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-white"></div>
          </div>
  
          <h2 className="text-3xl font-bold text-gray-800">Abdul Sattar Edhi</h2>
          <h3 className="text-xl text-red-500 font-semibold mt-2">Founder Profile</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Abdul Sattar Edhi was born in 1928 in a small village of Bantva near Joona Garh, Gujrat (India). 
            The seeds of compassion for the suffering humanity were sown in his soul by his mother’s infirmity. 
            When Edhi was at the tender age of eleven, his mother became paralysed and later got mentally ill. 
            Young Abdul Sattar devoted himself for looking after all her needs; cleaning, bathing, changing clothes and feeding. 
            This proved to be a losing battle against the disease, and her helplessness increased over the years.
          </p>
        </div>
      </div>
    );
  }
  