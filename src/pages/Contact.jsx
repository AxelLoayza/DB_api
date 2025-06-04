
import { useState, useEffect } from "react";

const Contact=() =>{

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Datos personales</legend>

          <label>Nombre:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <label>Correo:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </fieldset>

        <fieldset>
          <legend>Consulta</legend>

          <label>Mensaje:</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </fieldset>

        <button type="submit" style={{ marginTop: "15px" }}>Enviar</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default ContactPage;
