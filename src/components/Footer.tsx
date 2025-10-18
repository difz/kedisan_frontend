import React from 'react';
import SocialIcon from './ui/socialIcon';

// Lazy load footer logos
const logoKembara = new URL('../images/Warna Logo.png', import.meta.url).href;
const logoKKN = new URL('../images/logoKKN.png', import.meta.url).href;
const logoKedisan = new URL('../../public/KedisanLogo.png', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <section>
      <footer className="bg-gray-800 text-white rounded-t-3xl p-6 md:p-12">
        <div className="flex flex-col gap-8 items-center justify-between">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 md:gap-0">
            {/* Column 1: Address */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <p className="font-lexend text-sm md:text-base leading-relaxed">
                Desa Kedisan, Kecamatan Tegallalang,
                <br />
                Kabupaten Gianyar, Provinsi Bali, Indonesia.
              </p>
            </div>

            {/* Column 2: Logos */}
            <div className="w-full md:w-1/3 flex justify-center gap-4">
              <img
                src={logoKedisan}
                alt="Logo Kedisan"
                className="h-10 w-10 md:h-12 md:w-12"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/cccccc/FFFFFF?text=Err'; }}
              />
              <img
                src={logoKKN}
                alt="Logo KKN"
                className="h-10 w-10 md:h-12 md:w-12"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/cccccc/FFFFFF?text=Err'; }}
              />
              <img
                src={logoKembara}
                alt="Logo Outline"
                className="h-10 w-10 md:h-12 md:w-12"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/cccccc/FFFFFF?text=Err'; }}
              />
            </div>

            {/* Column 3: Social Icons */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
              <SocialIcon type="instagram" link="https://www.instagram.com/kembarategallalang/" />
              <SocialIcon type="tiktok" link="https://www.tiktok.com/@kembarategallalang" />
              <SocialIcon type="whatsapp" link="https://wa.me/.." />
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="text-center">
            <p className="font-lexend text-xs md:text-sm text-gray-400">
              © Copyright KKN-PPM UGM Kembara Tegallalang
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
