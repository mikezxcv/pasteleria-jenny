"use client"

import { useState } from "react"

const tiposPastel = ["Cumpleaños", "Boda", "Bautizo", "Aniversario", "Graduación", "Otro"]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tipoPastel: "",
    detalles: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nombre: "",
        telefono: "",
        tipoPastel: "",
        detalles: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="cotizacion" className="container-custom bg-gray-50">
      <h2 className="title-font text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--primary)]">
        Solicita tu Cotización
      </h2>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">¡Gracias por tu solicitud!</h3>
            <p className="text-lg">Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div>
              <label htmlFor="tipoPastel" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Pastel
              </label>
              <select
                id="tipoPastel"
                name="tipoPastel"
                value={formData.tipoPastel}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {tiposPastel.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="detalles" className="block text-sm font-medium text-gray-700 mb-1">
                Detalles personalizados
              </label>
              <textarea
                id="detalles"
                name="detalles"
                value={formData.detalles}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="Describe cómo quieres tu pastel, sabores, decoración, etc."
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="submit-button py-3 px-8 rounded-full text-lg font-semibold">
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
