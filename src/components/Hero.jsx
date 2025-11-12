import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Hey, I'm Sarthak —
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> Junior Data Analyst</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-gray-700"
          >
            Prefinal year student at CV Raman Global University. I turn messy data into crisp insights with Python, SQL and dashboards. I love building playful, interactive visuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 hover:bg-gray-800 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white border border-gray-300 text-gray-900 px-5 py-2.5 hover:bg-gray-50">Contact</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-2 text-sm text-gray-600"
          >
            <span className="px-3 py-1 rounded-full bg-white/80 border">Python</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border">SQL</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border">Pandas</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border">Excel</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border">Power BI</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative lg:mt-0 mt-8"
        >
          <div className="rounded-2xl bg-white/70 border backdrop-blur p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">What I Do</h3>
            <p className="mt-2 text-gray-700">I clean, explore and visualize data to answer business questions. I build dashboards and automate analyses to save time.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="rounded-lg border bg-white p-3">Exploratory Analysis</div>
              <div className="rounded-lg border bg-white p-3">Data Cleaning</div>
              <div className="rounded-lg border bg-white p-3">SQL Reporting</div>
              <div className="rounded-lg border bg-white p-3">Power BI Dashboards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
