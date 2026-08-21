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
import fortinetLogo from "../assets/logo_fortinet.png";
import vkeyLogo from "../assets/vkey.jpeg";
import forcepointLogo from "../assets/Forcepoint_Logo_New.webp";
import comforteLogo from "../assets/comforte.png";
import crowdstrikeLogo from "../assets/crowdstrike.svg";
import algosecLogo from "../assets/algosec.avif";
import nordenLogo from "../assets/348886.png";
import krammerLogo from "../assets/Krammer.png";
import inetcoLogo from "../assets/INETCO_Systems_Limited_Logo.jpg";
import acebottLogo from "../assets/logo-1000x500-1 1.png";
import makeblockLogo from "../assets/makeblock.png";
import lumensLogo from "../assets/lumens-logo-2.png";
import zktecLogo from "../assets/zkteco.png";
import ciscoLogo from "../assets/cisco.png";
import cleverLogo from "../assets/clevertouch.png";
import lgLogo from "../assets/lg.png";
import leyardLogo from '../assets/leyard.png'
import cyxteraLogo from "../assets/cystera.jpg";
import yubicoLogo from "../assets/yubico.jpg";
import netscopeLogo from "../assets/netskope.png";
import styles from "./Partners.module.css";
import SectionBlobs from "../components/SectionBlobs";

export default function Partners() {
  const { t } = useLang();

  const partners = [
    // Cybersecurity Partners (from Cybersecurity Solutions section)
    { logo: fortinetLogo,   name: "Fortinet",     typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescFortinet" },
    { logo: beyondLogo,     name: "BeyondTrust",  typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescBeyondTrust" },
    { logo: vkeyLogo,       name: "V-Key",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescVKey" },
    { logo: forcepointLogo, name: "Forcepoint",   typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescForcepoint" },
    { logo: comforteLogo,   name: "Comforte",     typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescComforte" },
    { logo: crowdstrikeLogo,name: "CrowdStrike",  typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescCrowdStrike" },
    { logo: inetcoLogo,     name: "INETCO",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescInetco" },
    { logo: algosecLogo,    name: "AlgoSec",      typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescAlgoSec" },
    
    // Other Security Partners
    { logo: cyxteraLogo,    name: "Cyxtera",      typeKey: "partnerTypeAuthorisedPartner",  logoSize: "xlarge", descKey: "partnerDescCyxtera" },
    { logo: yubicoLogo,     name: "Yubico",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescYubico" },
    { logo: netscopeLogo,   name: "Netskope",     typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescNetskope" },
    { logo: fireeyeLogo,    name: "FireEye",      typeKey: "partnerTypeAuthorisedPartner",  logoSize: "xlarge", logoAlign: "farLeft", descKey: "partnerDescFireEye" },
    
    // Audio-Visual & Collaboration Partners
    { logo: samsungLogo,    name: "Samsung",      typeKey: "partnerTypeAuthorisedB2BPartner",                   descKey: "partnerDescSamsung" },
    { logo: leyardLogo,     name: "Leyard",       typeKey: "partnerTypeAuthorisedPartner",  logoAlign: "left", logoSize: "xlarge", descKey: "partnerDescLeyard" },
    { logo: ciscoLogo,      name: "Cisco",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescCisco" },
    { logo: cleverLogo,     name: "CleverTouch",  typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescCleverTouch" },
    { logo: lgLogo,         name: "LG",           typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescLG" },
    { logo: logitechLogo,   name: "Logitech",     typeKey: "partnerTypeAuthorisedDistributor", logoAlign: "left", descKey: "partnerDescLogitech" },
    { logo: microsoftLogo,  name: "Microsoft",    typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescMicrosoft" },
    { logo: canonLogo,      name: "Canon",        typeKey: "partnerTypeAuthorisedDistributor",                  descKey: "partnerDescCanon" },
    { logo: yealinkLogo,    name: "Yealink",      typeKey: "partnerTypeAuthorisedDistributorIntegrator",        descKey: "partnerDescYealink" },
    { logo: dahuaLogo,      name: "Dahua",        typeKey: "partnerTypeAuthorisedDistributor",                  descKey: "partnerDescDahua" },
    { logo: vtLogo,         name: "VT",           typeKey: "partnerTypeAuthorisedDistributor",                  descKey: "partnerDescVT" },
    { logo: sennheiserLogo, name: "Sennheiser",   typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescSennheiser" },
    { logo: maxhubLogo,     name: "Maxhub",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescMaxhub" },
    { logo: makeblockLogo,  name: "MakeBlock",    typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescMakeblock" },
    { logo: krammerLogo,    name: "Kramer",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescKramer" },
    { logo: huaweiLogo,     name: "Huawei",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescHuawei" },
    { logo: acebottLogo,    name: "Acebott",      typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescAcebott" },
    { logo: ibmLogo,        name: "IBM",          typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  logoAlign: "left", descKey: "partnerDescIBM" },
    { logo: zoomLogo,       name: "Zoom",         typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  logoAlign: "midLeft", descKey: "partnerDescZoom" },
    { logo: peerlessLogo,   name: "Peerless-AV",  typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescPeerless" },
    { logo: nordenLogo,     name: "Norden",       typeKey: "partnerTypeAuthorisedPartner",  logoSize: "xlarge", descKey: "partnerDescNorden" },
    { logo: hikvisionLogo,  name: "Hikvision",    typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescHikvision" },
    { logo: boschLogo,      name: "Bosch",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescBosch" },
    { logo: panasonicLogo,  name: "Panasonic",    typeKey: "partnerTypeAuthorisedPartner",  logoAlign: "left",  descKey: "partnerDescPanasonic" },
    { logo: crestronLogo,   name: "Crestron",     typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescCrestron" },
    { logo: belkinLogo,     name: "Belkin",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescBelkin" },
    { logo: extronLogo,     name: "Extron",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescExtron" },
    { logo: biampLogo,      name: "Biamp",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescBiamp" },
    { logo: polycomLogo,    name: "Polycom",      typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescPolycom" },
    { logo: sharpLogo,      name: "Sharp",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescSharp" },
    { logo: absenLogo,      name: "Absen",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescAbsen" },
    { logo: uniluminLogo,   name: "Unilumin",     typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescUnilumin" },
    { logo: sonosLogo,      name: "Sonos",        typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescSonos" },
    { logo: dLinkLogo,      name: "D-Link",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescDLink" },
    { logo: hanwhaLogo,     name: "Hanwha",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescHanwha" },
    { logo: lumensLogo,     name: "Lumens",       typeKey: "partnerTypeAuthorisedPartner",  logoSize: "large",  descKey: "partnerDescLumens" },
    { logo: zktecLogo,      name: "ZKTeco",       typeKey: "partnerTypeAuthorisedPartner",                      descKey: "partnerDescZKTeco" },
  ];
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
                    <img
                      src={p.logo}
                      alt={p.name}
                      className={`${styles.logo} ${
                        p.logoSize === "xlarge"
                          ? styles.logoXLarge
                          : p.logoSize === "large"
                            ? styles.logoLarge
                            : ""
                      } ${
                        p.logoAlign === "farLeft"
                          ? styles.logoPullFarLeft
                          : p.logoAlign === "midLeft"
                            ? styles.logoPullMidLeft
                          : p.logoAlign === "left"
                            ? styles.logoPullLeft
                            : ""
                      }`}
                    />
                  </div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.type}>{t[p.typeKey]}</p>
                  <p className={styles.desc}>{t[p.descKey]}</p>
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
