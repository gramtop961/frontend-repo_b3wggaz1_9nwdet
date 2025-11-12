import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/40" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-700 max-w-3xl"
        >
          I'm Sarthak Tripathy, a prefinal year student at CV Raman Global University, aiming for a junior data analyst role. I'm passionate about finding patterns in data and telling stories with visuals. I focus on clean, repeatable workflows and clear communication.
        </motion.p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Seaborn", "Matplotlib"].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="rounded-xl border bg-white p-4 text-center text-gray-800 shadow-sm"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
