import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Men foydalanuvchi uchun chiroyli va samarali veb tajribalarni yarataman
            </h2>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image className="rounded-full bg-gray-900" src={PlanetImg} width={400} height={400} alt="Planet" />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image className="absolute -right-64 -top-20 z-10 max-w-none" src={PlanetOverlayImg} width={789} height={755} alt="Planet decoration" />
                  <div>
                    <Image className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80" src={PlanetTagImg01} width={253} height={56} alt="React" />
                    <Image className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30" src={PlanetTagImg02} width={241} height={56} alt="Next.js" />
                    <Image className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25" src={PlanetTagImg03} width={243} height={56} alt="Tailwind CSS" />
                    <Image className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80" src={PlanetTagImg04} width={251} height={56} alt="TypeScript" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>🚀 Tezkor yuklanish</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Sahifalarim Next.js SSR va ISR funksiyalari bilan optimallashtirilgan. Bu esa yuqori tezlik va foydalanuvchi uchun silliq tajribani ta'minlaydi.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>🎨 Zamonaviy dizayn</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Tailwind CSS yordamida responsiv, toza va vizual jihatdan chiroyli interfeyslar ishlab chiqaman.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>⚙️ Dinamik komponentlar</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Reusable va maintainable komponentlar yordamida har qanday loyiha uchun modul tizimlar tuzaman.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>🌐 SEO & Performance</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Lighthouse, Core Web Vitals va Google Search Console bilan sahifalarni audit qilaman.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>🧠 TypeScript bilan xavfsizlik</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                TypeScript orqali xatoliklarni oldini olib, kodni ishonchli va oson kengaytiriladigan qilaman.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>📈 API bilan integratsiya</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                REST yoki GraphQL API'lar bilan ishlashni yaxshi bilaman. Axios yoki fetch orqali real-time ma'lumotlar bilan ishlayman.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
