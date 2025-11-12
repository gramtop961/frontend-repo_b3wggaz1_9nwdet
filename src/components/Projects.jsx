import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sales Insights Dashboard',
    description: 'Built an interactive Power BI dashboard to monitor monthly sales, regional trends, and product performance. Added drilldowns and KPI cards for quick insights.',
    tags: ['Power BI', 'DAX', 'Data Modeling'],
    link: '#',
  },
  {
    title: 'SQL Retail Analytics',
    description: 'Analyzed retail transactions to identify top performing categories, customer lifetime value, and churn patterns using SQL and Python.',
    tags: ['SQL', 'Python', 'Pandas'],
    link: '#',
  },
  {
    title: 'Customer Feedback NLP',
    description: 'Cleaned and processed customer reviews, performed sentiment analysis and topic modeling to quantify user pain points.',
    tags: ['Python', 'NLTK', 'Visualization'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="relative text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="relative mt-2 text-gray-700 text-sm">{p.description}</p>
              <div className="relative mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
                {p.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white border">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
