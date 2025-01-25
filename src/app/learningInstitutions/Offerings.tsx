import workSans from "@/fonts/fonts";
import Offers from "./components/Offers";

export default function OffersAndBenefits() {
  return (
    <div className={` py-10 ${workSans.className} bg-gray-100`}>
      <h1 className="text-center text-black text-xl md:text-2xl font-bold">
        Key Offerings & Benefits:
      </h1>
      <Offers/>
    </div>
  );
}
