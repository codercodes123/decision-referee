import { motion } from 'framer-motion';
import styles from './Home.module.css';
import PixelSnow from '../PixelSnow/PixelSnow';
import GradientText from '../GradientText/GradientText';
import TiltedCard from '../TittedText/TiltedCard';
import About from '../About/About';
import Referee from '../Referee/Referee';

/* Home component - Pre-ADR Architecture Decision Referee */
function Home() {
  return (
    <main className={styles.hero}>
      {/* Background layer - PixelSnow with reduced opacity */}
      <div className={styles.background}>
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={0.8}
          density={0.10}
          direction={145}
          brightness={1.5}
        />
      </div>

      {/* Content layer - scrollable */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Hero Heading - Authority Framing */}
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <GradientText
            colors={["#eaeaeaff", "#40ffaa", "#1ae7feff", "#40ffaa", "#eaeaeaff"]}
            animationSpeed={4}
            showBorder={false}
            className={styles.heading}
          >
            Decision Gate
          </GradientText>
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          Architectural decisions don't have best answers — only consequences.
        </motion.p>

        <motion.p
          className={styles.supportingLine}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
        >
          A deterministic, rule-based referee that surfaces trade-offs and risks before an architecture decision is locked into an ADR.
        </motion.p>

        {/* Hero Divider */}
        <motion.div
          className={styles.heroDivider}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        />

        {/* Authority Cue */}
        <motion.p
          className={styles.authorityCue}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
        >
          Use this referee to surface risks before an architecture decision becomes irreversible.
        </motion.p>

        {/* Referee interaction section - Comparison Modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          <Referee />
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
        >
          <About />
        </motion.div>

        {/* Conceptual cards section */}
        <motion.div
          className={styles.cardsSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className={styles.cardsGrid}>
            <TiltedCard
              imageSrc="/img2.png"
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="280px"
              showMobileWarning={false}
              showTooltip={false}
            />
            <TiltedCard
              imageSrc="/img3.png"
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="280px"
              showMobileWarning={false}
              showTooltip={false}
            />
            <TiltedCard
              imageSrc="/img4.png"
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="280px"
              showMobileWarning={false}
              showTooltip={false}
            />
            <TiltedCard
              imageSrc="/img5.png"
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="280px"
              showMobileWarning={false}
              showTooltip={false}
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Home;
