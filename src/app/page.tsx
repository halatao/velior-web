import { MotionDiv, MotionH1, MotionP, MotionA } from "../components/Animated";
import Image from 'next/image';
import { getText } from '../lib/getText';

export default function Home() {
  const t = getText();
  return (
    <div className="bg-gray-50 text-gray-900">
      <header className="bg-white border-b">
        <MotionDiv
          className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="font-bold text-xl tracking-wide">VELIOR</div>
          <a href="#konzultace" className="text-indigo-600 font-semibold hover:underline">
            Konzultace zdarma
          </a>
        </MotionDiv>
      </header>

      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <MotionH1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              {t.hero.title1}
              <br className="hidden md:block" />
              {t.hero.title2}
            </MotionH1>

            <MotionP
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t.hero.paragraph}
            </MotionP>

            <MotionA
              href="#konzultace"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              {t.hero.cta}
            </MotionA>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-14">{t.why.title}</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <MotionDiv
                className="bg-white p-8 rounded-xl shadow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <h3 className="font-semibold text-xl mb-3">{t.why.items[0].title}</h3>
                <p>{t.why.items[0].text}</p>
              </MotionDiv>

              <MotionDiv
                className="bg-white p-8 rounded-xl shadow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.16 }}
              >
                <h3 className="font-semibold text-xl mb-3">{t.why.items[1].title}</h3>
                <p>{t.why.items[1].text}</p>
              </MotionDiv>

              <MotionDiv
                className="bg-white p-8 rounded-xl shadow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-semibold text-xl mb-3">{t.why.items[2].title}</h3>
                <p>{t.why.items[2].text}</p>
              </MotionDiv>

              <MotionDiv
                className="bg-white p-8 rounded-xl shadow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.24 }}
              >
                <h3 className="font-semibold text-xl mb-3">{t.why.items[3].title}</h3>
                <p>{t.why.items[3].text}</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">{t.when.title}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t.when.paragraph}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-14">Jak vám VELIOR může pomoci</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <MotionDiv
                className="bg-white p-8 rounded-xl shadow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <h3 className="text-xl font-bold mb-2">{t.services.tiers[0].title}</h3>
                <p className="text-gray-600 mb-4">{t.services.tiers[0].subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {t.services.tiers[0].bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <p className="font-semibold">{t.services.tiers[0].price}</p>
              </MotionDiv>

              <MotionDiv
                className="bg-white p-8 rounded-xl shadow border-2 border-indigo-600"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.16 }}
              >
                <h3 className="text-xl font-bold mb-2">{t.services.tiers[1].title}</h3>
                <p className="text-gray-600 mb-4">{t.services.tiers[1].subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {t.services.tiers[1].bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <p className="font-semibold">{t.services.tiers[1].price}</p>
              </MotionDiv>

              <MotionDiv
                className="bg-white p-8 rounded-xl shadow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{t.services.tiers[2].title}</h3>
                <p className="text-gray-600 mb-4">{t.services.tiers[2].subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {t.services.tiers[2].bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <p className="font-semibold">{t.services.tiers[2].price}</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <MotionDiv
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">{t.projects.title}</h2>
              <p className="text-lg text-gray-600">{t.projects.intro}</p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Týmové projekty */}
              <MotionDiv className="bg-gray-50 p-8 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-3">{t.projects.team.title}</h3>
                <p className="text-gray-600 mb-10">{t.projects.team.text}</p>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png", alt: "ABB" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Astratex_logo.jpg", alt: "Astratex" },
                    { src: "https://i.ytimg.com/vi/d5DunF5l-AE/maxresdefault.jpg", alt: "Linksoft" },
                  ].map((logo) => (
                    <div
                      key={logo.alt}
                      className="h-14 flex items-center justify-center"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={56}
                        className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
                      />
                    </div>
                  ))}
                </div>
              </MotionDiv>

              {/* Přímá práce */}
              <MotionDiv className="bg-gray-50 p-8 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-3">{t.projects.direct.title}</h3>
                <p className="text-gray-600 mb-10">{t.projects.direct.text}</p>

                <div className="h-20 flex items-center justify-center">
                  <Image
                    src="https://storage.googleapis.com/kasanpelcovafileserver/files/553eacd9-8684-4abe-be76-b97db259688e"
                    alt="Kasan & Pelcová"
                    width={200}
                    height={80}
                    className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
                  />
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-lg text-gray-700">{t.about.text}</p>
          </div>
        </section>

        <section id="konzultace" className="bg-indigo-700 text-white py-24 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.ctaSection.title}</h2>
          <p className="text-lg mb-8">{t.ctaSection.paragraph}</p>
          <a href="mailto:info@halatao.cz" className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            {t.ctaSection.button}
          </a>
        </section>
      </main>
    </div>
  );
}
