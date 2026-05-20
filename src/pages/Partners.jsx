import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import { useLang } from "../context/LanguageContext";
import samsungLogo from "../assets/samsung.png";
import logitechLogo from "../assets/Logitech.jpg";
import canonLogo from "../assets/canon.png";
import yealinkLogo from "../assets/yealink.png";
import microsoftLogo from "../assets/microsoft.png";
import dahuaLogo from "../assets/dahua.png";
import vtLogo from "../assets/vt.webp";
import sennheiserLogo from "../assets/Sennheiser-logo.png";
import maxhubLogo from "../assets/maxhub.jpg";
import ibmLogo from "../assets/ibm.png";
import zoomLogo from "../assets/zoom-logo1.jpg";
import peerlessLogo from "../assets/peerlessav.jpg";
import fireeyeLogo from "../assets/fireeye.jpg";
import huaweiLogo from "../assets/huawei_logo.png";
import hikvisionLogo from "../assets/2560px-Hikvision_logo.svg.png";
import absenLogo from "../assets/absen.jpg";
import biampLogo from "../assets/Biamp.png";
import boschLogo from "../assets/bosch.jpg";
import crestronLogo from "../assets/Crestron-Logo-1.jpg";
import dLinkLogo from "../assets/D-Link_wordmark.svg.png";
import extronLogo from "../assets/extron.png";
import hanwhaLogo from "../assets/hanwha.png";
import panasonicLogo from "../assets/og_base_logo-of-panasonic.png";
import polycomLogo from "../assets/polycom.jpg";
import sharpLogo from "../assets/Sharp-Be-Original-small.png";
import sonosLogo from "../assets/Sonos_2015-Logo.png";
import uniluminLogo from "../assets/unilumin.png";
import belkinLogo from "../assets/belkin.jpg";
import beyondLogo from "../assets/BeyondTrust.jpg";
import nordenLogo from "../assets/348886.png";
import krammerLogo from "../assets/Krammer.png";
import inetcoLogo from "../assets/INETCO_Systems_Limited_Logo.jpg";
import acebottLogo from "../assets/logo-1000x500-1 1.png";
import makeblockLogo from "../assets/makeblock.png";
import lumensLogo from "../assets/lumens-logo-2.png";
import zktecLogo from "../assets/zkteco.png";
import styles from "./Partners.module.css";
import SectionBlobs from "../components/SectionBlobs";

const partners = [
  {
    logo: samsungLogo,
    name: "Samsung",
    type: "Authorised B2B Partner",
    desc: "Large format displays, videowalls, smart signage, and commercial AV solutions.",
  },
  {
    logo: logitechLogo,
    name: "Logitech",
    type: "Authorised Distributor",
    desc: "Video collaboration, peripherals, and enterprise workspace solutions.",
  },
  {
    logo: microsoftLogo,
    name: "Microsoft",
    type: "Authorised Partner",
    desc: "Enterprise software, cloud services, and Microsoft 365 licensing.",
  },
  {
    logo: canonLogo,
    name: "Canon",
    type: "Authorised Distributor",
    desc: "Printers, scanners, cameras, and document management solutions.",
  },
  {
    logo: yealinkLogo,
    name: "Yealink",
    type: "Authorised Distributor & Integrator",
    desc: "IP phones, video conferencing, and unified communications.",
  },
  {
    logo: dahuaLogo,
    name: "Dahua",
    type: "Authorised Distributor",
    desc: "CCTV, IP cameras, NVR systems, and security surveillance.",
  },
  {
    logo: vtLogo,
    name: "VT",
    type: "Authorised Distributor",
    desc: "Professional headsets and communication devices across West Africa.",
  },
  {
    logo: sennheiserLogo,
    name: "Sennheiser",
    type: "Authorised Partner",
    desc: "Premium audio solutions, professional headsets, and communication devices.",
  },
  {
    logo: maxhubLogo,
    name: "Maxhub",
    type: "Authorised Partner",
    desc: "Interactive display solutions and collaborative workspace technology.",
  },
  {
    logo: makeblockLogo,
    name: "MakeBlock",
    type: "Authorised Partner",
    desc: "Robotics, IoT platforms, and educational automation solutions.",
  },
  {
    logo: beyondLogo,
    name: "BeyondTrust",
    type: "Authorised Partner",
    desc: "Privileged access management and advanced cybersecurity solutions.",
  },
  {
    logo: inetcoLogo,
    name: "Inetco",
    type: "Authorised Partner",
    desc: "Financial IT infrastructure and payment systems expertise.",
  },
  {
    logo: krammerLogo,
    name: "Kramer",
    type: "Authorised Partner",
    desc: "Professional AV integration, switching, and signal management solutions.",
  },
  {
    logo: huaweiLogo,
    name: "Huawei",
    type: "Authorised Partner",
    desc: "Telecommunications infrastructure and enterprise networking solutions.",
  },
  {
    logo: acebottLogo,
    name: "Acebott",
    type: "Authorised Partner",
    desc: "Industrial automation, robotics, and AI-powered solutions.",
  },
  {
    logo: ibmLogo,
    name: "IBM",
    type: "Authorised Partner",
    desc: "Enterprise IT infrastructure, cloud computing, and AI technologies.",
  },
  {
    logo: zoomLogo,
    name: "Zoom",
    type: "Authorised Partner",
    desc: "Video conferencing, webinars, and unified communication platforms.",
  },
  {
    logo: peerlessLogo,
    name: "Peerless-AV",
    type: "Authorised Partner",
    desc: "Professional AV mounting systems and installation solutions.",
  },
  {
    logo: fireeyeLogo,
    name: "FireEye",
    type: "Authorised Partner",
    desc: "Advanced cybersecurity, threat detection, and incident response.",
  },
  {
    logo: nordenLogo,
    name: "Norden",
    type: "Authorised Partner",
    desc: "IT solutions and managed services for enterprise environments.",
  },
  {
    logo: hikvisionLogo,
    name: "Hikvision",
    type: "Authorised Partner",
    desc: "Video surveillance, IP cameras, and advanced security systems.",
  },
  {
    logo: boschLogo,
    name: "Bosch",
    type: "Authorised Partner",
    desc: "Building security, communication systems, and integrated solutions.",
  },
  {
    logo: panasonicLogo,
    name: "Panasonic",
    type: "Authorised Partner",
    desc: "Professional imaging, display solutions, and AV equipment.",
  },
  {
    logo: crestronLogo,
    name: "Crestron",
    type: "Authorised Partner",
    desc: "Integrated AV control systems and building automation technology.",
  },
  {
    logo: belkinLogo,
    name: "Belkin",
    type: "Authorised Partner",
    desc: "Networking, charging solutions, and IT connectivity products.",
  },
  {
    logo: extronLogo,
    name: "Extron",
    type: "Authorised Partner",
    desc: "Professional AV systems integration and control solutions.",
  },
  {
    logo: biampLogo,
    name: "Biamp",
    type: "Authorised Partner",
    desc: "Professional audio systems, conferencing, and sound reinforcement.",
  },
  {
    logo: polycomLogo,
    name: "Polycom",
    type: "Authorised Partner",
    desc: "Video conferencing, voice, and unified communication systems.",
  },
  {
    logo: sharpLogo,
    name: "Sharp",
    type: "Authorised Partner",
    desc: "Multifunctional imaging, printing, and display solutions.",
  },
  {
    logo: absenLogo,
    name: "Absen",
    type: "Authorised Partner",
    desc: "LED display systems and visualization technology.",
  },
  {
    logo: uniluminLogo,
    name: "Unilumin",
    type: "Authorised Partner",
    desc: "LED screens, digital signage, and visualization solutions.",
  },
  {
    logo: sonosLogo,
    name: "Sonos",
    type: "Authorised Partner",
    desc: "Premium audio systems and smart speaker technology.",
  },
  {
    logo: dLinkLogo,
    name: "D-Link",
    type: "Authorised Partner",
    desc: "Networking infrastructure and IT connectivity solutions.",
  },
  {
    logo: hanwhaLogo,
    name: "Hanwha",
    type: "Authorised Partner",
    desc: "Surveillance systems, cameras, and security infrastructure.",
  },
  {
    logo: lumensLogo,
    name: "Lumens",
    type: "Authorised Partner",
    desc: "Professional projectors, imaging, and display solutions.",
  },
  {
    logo: zktecLogo,
    name: "ZKTeco",
    type: "Authorised Partner",
    desc: "Access control systems, biometric solutions, and security devices.",
  },
];

export default function Partners() {
  const { t } = useLang();
  return (
    <>
      <SEO
        title="Our Technology Partners - Proxynet Group"
        description="Proxynet Group holds authorised distributor and partner status with Samsung, Logitech, Microsoft, Canon, Yealink, Dahua, and VT."
        canonical="/partners"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
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
              <span className={styles.crumbActive}>{t.partnersHeading}</span>
            </motion.nav>
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {t.partnersEyebrow}
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.partnersHeading}
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.partnersSub}
            </motion.p>
          </div>
        </section>

        {/* Partner grid */}
        <section className={styles.section}>
          <div className={styles.inner}>
            {/* <SectionBlobs /> */}
            <div className={styles.grid}>
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className={styles.logoWrap}>
                    <img src={p.logo} alt={p.name} className={styles.logo} />
                  </div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.type}>{p.type}</p>
                  <p className={styles.desc}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
            <SectionBlobs />
          </div>
        </section>
      </main>
    </>
  );
}
