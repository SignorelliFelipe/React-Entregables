import { useState } from "react";
import { createOrder } from "../../services/firebase";
import "./CheckoutForm.css";

const CheckoutForm = ({ cart, total, clearCart }) => {

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const [orderId, setOrderId] = useState("");

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };

 const handleSubmit = async (event) => {

  event.preventDefault();
  if (
    !formData.name.trim() ||
    !formData.lastname.trim() ||
    !formData.email.trim()
  ) {
    alert("Por favor complete todos los campos.");
    return;
  }

  if (!formData.email.includes("@")) {
    alert("Ingrese un email válido.");
    return;
  }

  const order = {
    buyer: formData,
    items: cart,
    total: total,
    date: new Date(),
  };

  const id = await createOrder(order);

  setOrderId(id);

  clearCart();

};

 if (orderId) {
  return (
    <div>
      <h3>¡Gracias por tu compra!</h3>

      <p>Tu número de orden es:</p>

      <strong>{orderId}</strong>

      <br /><br />

      <Link to="/">
        Volver al catálogo
      </Link>

    </div>
  );
}

  return (

    <form className="checkout-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Apellido"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Finalizar compra
      </button>

    </form>

  );
};

export default CheckoutForm;