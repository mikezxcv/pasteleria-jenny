"use client";

import { useForm, ValidationError } from "@formspree/react";

const tiposPastel = [
  "Cumpleaños",
  "Boda",
  "Bautizo",
  "Aniversario",
  "Graduación",
  "Otro",
];

export default function QuoteForm() {
  const [state, handleSubmit] = useForm("xeozlqgz"); // Asegúrate de usar tu ID de formulario real de Formspree

  if (state.succeeded) {
    return (
      <section id="cotizacion" className="container-custom bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
            ¡Gracias por tu solicitud!
          </h3>
          <p className="text-lg">Nos pondremos en contacto contigo pronto.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizacion" className="container-custom bg-gray-50">
      <h2 className="title-font text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--primary)]">
        Solicita tu Cotización
      </h2>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <ValidationError errors={state.errors} />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Teléfono Para llamadas o whatsapp
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <ValidationError
              prefix="Teléfono"
              field="telefono"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="tipoPastel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de Pastel
            </label>
            <select
              id="tipoPastel"
              name="tipoPastel"
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
            <ValidationError
              prefix="Tipo de Pastel"
              field="tipoPastel"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="detalles"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Detalles personalizados
            </label>
            <textarea
              required
              id="detalles"
              name="detalles"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Describe cómo quieres tu pastel, sabores, decoración, etc."
            ></textarea>
            <ValidationError
              prefix="Detalles"
              field="detalles"
              errors={state.errors}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-button py-3 px-8 rounded-full text-lg font-semibold"
            >
              {state.submitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
