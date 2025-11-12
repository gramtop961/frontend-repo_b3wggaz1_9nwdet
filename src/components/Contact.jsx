import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // For now, just simulate send
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/60" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">Let’s work together</h3>
            <p className="mt-2 text-gray-700">Looking for internships and freelance opportunities in data analysis.</p>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <input required placeholder="Your name" className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input required type="email" placeholder="Your email" className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea required rows="4" placeholder="Your message" className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-2.5 hover:bg-gray-800">Send</button>
              {status && <p className="text-sm text-green-700">{status}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Location: Bhubaneswar, Odisha</li>
              <li>University: CV Raman Global University</li>
              <li>Role: Junior Data Analyst (prefinal year)</li>
              <li>Email: sarthak@example.com</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
