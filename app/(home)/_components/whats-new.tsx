import Image from "next/image";

const WhatsNewSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 from-50% to-background to-50% px-4 py-6">
      <div className="container">
        <div className="z-0 mx-auto flex flex-col md:max-w-md">
          {/* Decor */}
          <figure aria-hidden className="z-[1] -mb-5">
            <Image
              src="/whats-new-icon.svg"
              alt="Whats New Icon"
              width={100}
              height={100}
              className="h-12 w-auto md:h-16"
            />
          </figure>

          {/* Content */}
          <div className="flex items-center overflow-hidden rounded-2xl bg-background shadow-lg">
            {/* Col */}
            <div className="w-1/3 md:w-2/5">
              <figure className="aspect-h-1 aspect-w-1 grid place-content-center overflow-hidden bg-slate-100 md:aspect-h-3 md:aspect-w-4">
                <Image
                  src="/whats-new-2.webp"
                  alt="Whats New Icon"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            {/* Col */}
            <div className="w-2/3 md:w-3/5">
              <div className="flex flex-col items-start gap-2 p-4">
                <h4 className="text-sm font-semibold text-card-foreground max-md:line-clamp-3">
                  Terbaru! Indikator daya beli RichBuyer sekarang tersedia di
                  Shopee Chat. Install sekarang!
                </h4>
                <span className="text-xs">27 Juli 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;
