import { motion } from 'framer-motion'
import samsung from '../assets/samsung.png'
import lg from '../assets/lg.png'
import logitech from '../assets/Logitech.jpg'
import biamp from '../assets/Biamp.png'
import crestron from '../assets/Crestron-Logo-1.jpg'
import extron from '../assets/extron.png'
import sonos from '../assets/Sonos_2015-Logo.png'
import canon from '../assets/canon.png'
import sennheiser from '../assets/Sennheiser-logo.png'
import yealink from '../assets/yealink.png'
import absen from '../assets/absen.jpg'
import unilumin from '../assets/unilumin.png'
import leyard from '../assets/leyard.png'
import peerless from '../assets/peerlessav.jpg'
import cisco from '../assets/cisco.png'
import dLink from '../assets/D-Link_wordmark.svg.png'
import fortinet from '../assets/logo_fortinet.png'
import beyondTrust from '../assets/BeyondTrust.jpg'
import inetco from '../assets/INETCO_Systems_Limited_Logo.jpg'
import comforte from '../assets/comforte.png'
import vt from '../assets/vt.webp'
import dahua from '../assets/dahua.png'
import hikvision from '../assets/2560px-Hikvision_logo.svg.png'
import hanwha from '../assets/hanwha.png'
import bosch from '../assets/bosch.jpg'
import zkteco from '../assets/zkteco.png'
import makeblock from '../assets/makeblock.png'
import acebott from '../assets/logo-1000x500-1 1.png'
import techScouts from '../assets/iTech-Scout-Labs.png'
import vkeys from '../assets/vkey.jpeg'
import algosec from '../assets/Algosec_logo.svg.webp'
import crowdstrike from '../assets/crowdstrike.svg'
import forcepoint from '../assets/Forcepoint_Logo_New.webp'
import cyxtera from '../assets/cystera.jpg'
import yubico from '../assets/yubico.jpg'
import netskope from '../assets/netskope.png'
import fireeye from '../assets/fireeye.jpg'

const partnerAssets = {
  Samsung: samsung,
  LG: lg,
  Logitech: logitech,
  Biamp: biamp,
  Crestron: crestron,
  Extron: extron,
  Sonos: sonos,
  Canon: canon,
  Sennheiser: sennheiser,
  Yealink: yealink,
  Absen: absen,
  Unilumin: unilumin,
  Leyard: leyard,
  'Peerless-AV': peerless,
  Cisco: cisco,
  'D-Link': dLink,
  Fortinet: fortinet,
  BeyondTrust: beyondTrust,
  INETCO: inetco,
  Comforte: comforte,
  VT: vt,
  Dahua: dahua,
  Hikvision: hikvision,
  Hanwha: hanwha,
  Bosch: bosch,
  ZKTeco: zkteco,
  MakeBlock: makeblock,
  Acebott: acebott,
  TechScouts: techScouts,
  VKeys: vkeys,
  AlgoSec: algosec,
  CrowdStrike: crowdstrike,
  Forcepoint: forcepoint,
  Cyxtera: cyxtera,
  Yubico: yubico,
  Netskope: netskope,
  FireEye: fireeye,
  'Comforte AG': comforte,
  Inetco: inetco,
}

export default function SolutionPartnerStrip({ partners, label = 'Technology Partners' }) {
  return (
    <section className="solutionPartnerStrip" aria-label={label}>
      <div className="solutionPartnerStripInner">
        <span className="solutionPartnerStripLabel">{label}</span>
        <div className="solutionPartnerLogos">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              className={`solutionPartnerLogoWrap ${['Cyxtera', 'FireEye', 'Peerless-AV', 'LG'].includes(partner) ? 'solutionPartnerLogoWrapLarge' : ''}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              {partnerAssets[partner]
                ? <img src={partnerAssets[partner]} alt={partner} className={`solutionPartnerLogo ${['Cyxtera', 'FireEye', 'Peerless-AV', 'LG'].includes(partner) ? 'solutionPartnerLogoLarge' : ''}`} />
                : <span className="solutionPartnerName">{partner}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}