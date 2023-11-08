import Image from "next/image";
import Marquee from "react-fast-marquee";
import { dataLogoClouds } from "../data";

const LogoCloudsSection = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-center text-xl font-bold text-foreground md:w-1/2">
          90rb++ menggunakan SmartSeller untuk kemudahan mengelola bisnis online
          mereka
        </h2>

        <Marquee direction="left">
          {dataLogoClouds?.slice(0, 6)?.map((item) => (
            <figure key={item.id} className="px-6 py-4 md:px-12">
              <Image
                src={`https://img.logoipsum.com/2${item.id}.svg`}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-10"
              />
            </figure>
          ))}
        </Marquee>

        <Marquee direction="right">
          {dataLogoClouds?.slice(6, 12)?.map((item) => (
            <figure key={item.id} className="px-6 py-4 md:px-12">
              <Image
                src={`https://img.logoipsum.com/2${item.id}.svg`}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-10"
              />
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoCloudsSection;
