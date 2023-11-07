import { SiteLogoFooter } from "../site-logo";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-sm">
      {/* MainFooter */}
      <div className="px-4 py-24">
        <div className="container grid w-full gap-10 sm:grid-cols-2 md:grid-cols-5">
          {/* Col */}
          <div className="">
            <SiteLogoFooter />
            <p className="mt-4">
              SmartSeller adalah aplikasi pengelola orderan toko online dengan
              berbagai kemudahan
            </p>
          </div>

          {/* Col */}
          <div className="">
            <h4 className="font-display text-lg font-bold">Produk & layanan</h4>
          </div>

          {/* Col */}
          <div className="">
            <h4 className="font-display text-lg font-bold">Kontak Kami</h4>
          </div>

          {/* Col */}
          <div className="">
            <h4 className="font-display text-lg font-bold">Perusahaan</h4>
          </div>

          {/* Col */}
          <div className="">
            <h4 className="font-display text-lg font-bold">Soaial Media</h4>
            <h4 className="mt-8 font-display text-lg font-bold">
              Layanan Pengaduan Konsumen
            </h4>
          </div>
        </div>
      </div>

      {/* FooterFooter */}
      <div className="border-t px-4 py-6">
        <div className="container text-center">
          <span>© 2016 - 2023, PT Ayo Techno Idea</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
