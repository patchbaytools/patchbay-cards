"use client"

import { motion } from "framer-motion"

export default function DetailedView() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mb-6">PAUL MCCARTNEY</h1>
        <p className="text-xl mb-8">Artist, Producer, Songwriter • BMI</p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">CONTRACTING INFO</h2>
            <div className="space-y-2">
              <p>Paul McCartney (fso James Paul McCartney)</p>
              <p>10 Downing St.</p>
              <p>London, UK SW1A2AA</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">PUB LINE</h2>
            <div className="space-y-2">
              <p>James Paul McCartney</p>
              <p>BMI</p>
              <p>IPI 12345678909</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4">ADDITIONAL METADATA</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">ISRC Codes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>USRC12345678</li>
                <li>GBRC98765432</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">UPC/EAN</h3>
              <p>602567924128</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Performing Rights</h3>
              <p>BMI</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Publisher</h3>
              <p>MPL Communications</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Download Full Metadata
          </button>
        </div>
      </motion.div>
    </div>
  )
}
