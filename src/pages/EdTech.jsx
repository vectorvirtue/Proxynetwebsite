import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Send,
  GraduationCap,
  Monitor,
  Users,
  BookOpen,
  Wifi,
  Cpu,
  Code,
  Layout,
  PenTool,
  Brain,
  BarChart2,
  BarChart,
} from "lucide-react";
import SEO from "../components/SEO";
import Captcha from "../components/Captcha";
import { useLang } from "../context/LanguageContext";
import edtech1 from "../assets/edtech.jpg";
import edtech2 from "../assets/edtech2.jpg";
import edtech3 from "../assets/edtech3.jpg";
import edtech4 from "../assets/edtech4.jpg";
import edtech5 from "../assets/edtech5.jpg";
import edtech5b from "../assets/Screenshot 2026-07-01 145658.png";
import aislLogo from "../assets/aisl.png";
import laradayLogo from "../assets/laraday-logo.png";
import lagoonLogo from "../assets/logo-lagoon.png";
import properChildLogo from "../assets/properchild.jpg";
import pampersLogo from "../assets/Pampers-Private-School.jpg";
import tunwaseLogo from "../assets/tunwase.jpg";
import bloomingGreensLogo from "../assets/bloominggreen.jpg";
import doyenLogo from "../assets/doyen.jpg";
import divineConfidenceLogo from "../assets/divineconfidence.jpg";
import bananaislandLogo from "../assets/bis.jpg";
import avicennaLogo from "../assets/avicenna.jpg";
import brightsparkLogo from "../assets/brightspark.png";
import styles from "./EdTech.module.css";
import SectionBlobs from "../components/SectionBlobs";
import SolutionPartnerStrip from "../components/SolutionPartnerStrip";
const institutions = [
  { name: "Lara Day School", logo: laradayLogo },
  { name: "Banana Island School", logo: bananaislandLogo },
  { name: "Blooming Greens School", logo: bloomingGreensLogo },
  { name: "Lagoon School", logo: lagoonLogo },
  { name: "Tunwase High School", logo: tunwaseLogo },
  { name: "Proper Child School", logo: properChildLogo },
  { name: "Doyens School", logo: doyenLogo },
  { name: "Divine Confidence School", logo: divineConfidenceLogo },
  { name: "Bright Spark Academy", logo: brightsparkLogo },
  { name: "Avi-Cenna International School", logo: avicennaLogo },
  { name: "American International School of Lagos", logo: aislLogo },
  { name: "Pampers Private School", logo: pampersLogo },
];

export default function EdTech() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [form, setForm] = useState({
    name: "",
    institution: "",
    role: "",
    email: "",
    phone: "",
    interest: "",
    notes: "",
  });

  const programmes = [
    { icon: "code",   name: t.progWebDevName,        duration: t.progWebDevDuration,        audience: t.progWebDevAudience,        format: t.progWebDevFormat,        desc: t.progWebDevDesc },
    { icon: "layout", name: t.progWebDesignName,      duration: t.progWebDesignDuration,     audience: t.progWebDesignAudience,     format: t.progWebDesignFormat,     desc: t.progWebDesignDesc },
    { icon: "book",   name: t.progDigLitName,         duration: t.progDigLitDuration,        audience: t.progDigLitAudience,        format: t.progDigLitFormat,        desc: t.progDigLitDesc },
    { icon: "pen",    name: t.progGraphicsName,        duration: t.progGraphicsDuration,      audience: t.progGraphicsAudience,      format: t.progGraphicsFormat,      desc: t.progGraphicsDesc },
    { icon: "cpu",    name: t.progRoboticsName,        duration: t.progRoboticsDuration,      audience: t.progRoboticsAudience,      format: t.progRoboticsFormat,      desc: t.progRoboticsDesc },
    { icon: "brain",  name: t.progAIName,              duration: t.progAIDuration,            audience: t.progAIAudience,            format: t.progAIFormat,            desc: t.progAIDesc },
    { icon: "wifi",   name: t.progIoTName,             duration: t.progIoTDuration,           audience: t.progIoTAudience,           format: t.progIoTFormat,           desc: t.progIoTDesc },
    { icon: "chart",  name: t.progDataSciName,         duration: t.progDataSciDuration,       audience: t.progDataSciAudience,       format: t.progDataSciFormat,       desc: t.progDataSciDesc },
    { icon: "bar",    name: t.progDataAnalyticsName,   duration: t.progDataAnalyticsDuration, audience: t.progDataAnalyticsAudience, format: t.progDataAnalyticsFormat, desc: t.progDataAnalyticsDesc },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="EdTech & Smart Schools — Technology for Education"
        description="Proxynet EdTech delivers smart classroom solutions, school network infrastructure, digital literacy training, and ICT programmes across West Africa."
        canonical="/solutions/edtech"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "EdTech & Smart School Solutions",
          description:
            "Smart classroom solutions, school network infrastructure, digital literacy training, and ICT programmes across West Africa.",
          provider: {
            "@type": "Organization",
            name: "Proxynet Group",
            url: "https://www.proxynetgroup.com",
          },
          areaServed: { "@type": "Place", name: "West Africa" },
          serviceType: "Education Technology",
          url: "https://www.proxynetgroup.com/solutions/edtech",
        }}
      />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" opacityScale={1.9} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/" className={styles.crumb}>
                {t.home}
              </Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/solutions" className={styles.crumb}>
                {t.solutions}
              </Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.edtech}</span>
            </motion.nav>
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {t.edtechDivision}
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.edtechHeroTitle}
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.edtechHeroSub}
            </motion.p>
            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#partner" className={styles.primary}>
                {t.partnerWithUs}
              </a>
              <a href="#programmes" className={styles.secondary}>
                {t.viewProgrammes}
              </a>
            </motion.div>
          </div>
        </section>

        <SolutionPartnerStrip partners={['MakeBlock', 'Acebott']} label="Robotics & IoT Kit Partners" />

        <section className={styles.section}>
          <div className={styles.inner}>
            <SectionBlobs />
            <motion.div
              className={styles.overviewGrid}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.overviewLeft}>
                <p className={styles.eyebrowBlue}>{t.edtechOverviewEyebrow}</p>
                <h2 className={styles.heading}>{t.edtechOverviewHeading}</h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.body}>{t.edtechOverviewBody1}</p>
                <p className={styles.body}>{t.edtechOverviewBody2}</p>
                <a
                  href="https://edtech.proxynetgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.extLink}
                >
                  {t.visitEdTechWebsite} <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="programmes" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <SectionBlobs />
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.edtechProgrammesEyebrow}</p>
              <h2 className={styles.heading}>{t.edtechProgrammesHeading}</h2>
            </motion.div>
            <div className={styles.progGrid}>
              {programmes.map((p, i) => (
                <motion.div
                  key={p.name}
                  className={styles.progCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.progIcon}>
                    {p.icon === "code" && <Code size={24} />}
                    {p.icon === "layout" && <Layout size={24} />}
                    {p.icon === "book" && <BookOpen size={24} />}
                    {p.icon === "pen" && <PenTool size={24} />}
                    {p.icon === "cpu" && <Cpu size={24} />}
                    {p.icon === "brain" && <Brain size={24} />}
                    {p.icon === "wifi" && <Wifi size={24} />}
                    {p.icon === "chart" && <BarChart2 size={24} />}
                    {p.icon === "bar" && <BarChart size={24} />}
                  </div>
                  <h3 className={styles.progName}>{p.name}</h3>
                  <p className={styles.progDesc}>{p.desc}</p>
                  <div className={styles.progMeta}>
                    <span className={styles.metaTag}>{p.duration}</span>
                    <span className={styles.metaTag}>{p.format}</span>
                  </div>
                  <p className={styles.progAudience}>{p.audience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <SectionBlobs variant="dark" />
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowLight}>{t.edtechInstitutionsEyebrow}</p>
              <h2 className={styles.headingLight}>{t.edtechInstitutionsHeading}</h2>
            </motion.div>
            <div className={styles.instGrid}>
              {institutions.map((inst, i) => (
                <motion.div
                  key={inst.name}
                  className={styles.instCard}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  {inst.logo ? (
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className={styles.instLogo}
                    />
                  ) : (
                    <GraduationCap size={20} className={styles.instIcon} />
                  )}
                  <span>{inst.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <SectionBlobs />
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.edtechGalleryEyebrow}</p>
              <h2 className={styles.heading}>{t.edtechGalleryHeading}</h2>
            </motion.div>
            <div className={styles.galleryGrid}>
              {/* Row 1 — three equal images */}
              {[edtech1, edtech2, edtech3].map((src, i) => (
                <motion.div
                  key={i}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <img
                    src={src}
                    alt={`Proxynet EdTech — photo ${i + 1}`}
                    className={styles.galleryImg}
                    loading="lazy"
                  />
                </motion.div>
              ))}
              {/* Row 2 — side image, tall centrepiece, side image */}
              <motion.div
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.21 }}
              >
                <img
                  src={edtech4}
                  alt="Proxynet EdTech — photo 4"
                  className={styles.galleryImg}
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className={styles.galleryItemFeatured}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.28 }}
              >
                <img
                  src={edtech5b}
                  alt="Proxynet EdTech — featured photo"
                  className={styles.galleryImgFull}
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <img
                  src={edtech5}
                  alt="Proxynet EdTech — photo 5"
                  className={styles.galleryImg}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="success-stories" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <SectionBlobs />
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.edtechStoriesEyebrow}</p>
              <h2 className={styles.heading}>{t.edtechStoriesHeading}</h2>
              <p className={styles.subText}>{t.edtechStoriesSub}</p>
            </motion.div>
            <motion.div
              className={styles.storiesPlaceholder}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {[0, 1, 2].map((i) => (
                <div key={i} className={styles.videoPlaceholder}>
                  <div className={styles.videoThumb}>
                    <div className={styles.playBtn} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.5 4.5l9 5.5-9 5.5V4.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.videoMeta}>
                    <div className={styles.videoMetaLine} />
                    <div className={styles.videoMetaLineShort} />
                  </div>
                </div>
              ))}
              <p className={styles.storiesNote}>
                <span className={styles.storiesBadge}>{t.edtechStoriesComingSoon}</span>
                {t.edtechStoriesComingSoonBody}
              </p>
            </motion.div>
          </div>
        </section>

        <section id="partner" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <SectionBlobs />
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.edtechPartnerEyebrow}</p>
              <h2 className={styles.heading}>{t.edtechPartnerHeading}</h2>
              <p className={styles.subText}>{t.edtechPartnerSub}</p>
            </motion.div>
            {submitted ? (
              <div className={styles.success}>
                <Send size={32} />
                <h3>{t.edtechSuccessTitle}</h3>
                <p>{t.edtechSuccessMsg}</p>
              </div>
            ) : (
              <motion.form
                className={styles.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.edtechFieldName}</label>
                    <input
                      required
                      className={styles.input}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.edtechFieldInstitution}</label>
                    <input
                      required
                      className={styles.input}
                      value={form.institution}
                      onChange={(e) =>
                        setForm({ ...form, institution: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.edtechFieldRole}</label>
                    <input
                      required
                      className={styles.input}
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.edtechFieldEmail}</label>
                    <input
                      type="email"
                      required
                      className={styles.input}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.edtechFieldPhone}</label>
                    <input
                      type="tel"
                      required
                      className={styles.input}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.edtechFieldInterest}</label>
                    <select
                      required
                      className={styles.input}
                      value={form.interest}
                      onChange={(e) =>
                        setForm({ ...form, interest: e.target.value })
                      }
                    >
                      <option value="">{t.edtechFieldInterestDefault}</option>
                      <option>{t.edtechInterest1}</option>
                      <option>{t.edtechInterest2}</option>
                      <option>{t.edtechInterest3}</option>
                      <option>{t.edtechInterest4}</option>
                      <option>{t.edtechInterest5}</option>
                      <option>{t.edtechInterest6}</option>
                      <option>{t.edtechInterest7}</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{t.edtechFieldNotes}</label>
                  <textarea
                    rows="4"
                    className={styles.textarea}
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                  />
                </div>
                <Captcha onChange={setCaptchaToken} />
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!captchaToken}
                  style={{
                    opacity: captchaToken ? 1 : 0.5,
                    cursor: captchaToken ? "pointer" : "not-allowed",
                  }}
                >
                  {t.submitEnquiry} <Send size={16} />
                </button>
              </motion.form>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
