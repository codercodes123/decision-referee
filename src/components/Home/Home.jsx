import { motion } from 'framer-motion';
import styles from './Home.module.css';
import PixelSnow from '../PixelSnow/PixelSnow';
import GradientText from '../GradientText/GradientText';
import TiltedCard from '../TittedText/TiltedCard';
import About from '../About/About';
import Referee from '../Referee/Referee';

/* Home component - scrollable page with fixed PixelSnow background */
function Home() {
  return (
    <main className={styles.hero}>
      {/* Background layer - fixed PixelSnow */}
      <div className={styles.background}>
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.2}
          density={0.30}
          direction={125}
          brightness={2}
        />
      </div>

      {/* Content layer - scrollable */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Hero Heading */}
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <GradientText
            colors={["#eaeaeaff", "#fe0afeff", "#40ffaa", "#1ae7feff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className={styles.heading}
          >
            Decision Referee
          </GradientText>
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          A constraint-driven framework for comparing REST, GraphQL, and gRPC — without recommendations
        </motion.p>

        {/* About Section - Between hero and Referee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          <About />
        </motion.div>

        {/* Referee interaction section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          <Referee />
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
