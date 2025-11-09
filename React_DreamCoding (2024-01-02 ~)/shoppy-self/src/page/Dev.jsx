import React from "react";
import { useShoppyAPI } from "../context/ShoppyAPIProvider";

export default function Dev() {
  const { shoppyAPI } = useShoppyAPI();
  const [formValues, setFormValues] = React.useState({
    id: "",
    name: "",
    price: "",
    imgURL: "",
    sizes: "",
    gender: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const result = shoppyAPI.apiClient.addProduct(formValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required={true}
          name="id"
          placeholder="id"
          value={formValues.id}
          onChange={handleChange}
        />
        <input
          type="text"
          required={true}
          name="name"
          placeholder="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          type="text"
          required={true}
          name="price"
          placeholder="price"
          value={formValues.price}
          onChange={handleChange}
        />
        <input
          type="text"
          required={true}
          name="imgURL"
          placeholder="imgURL"
          value={formValues.imgURL}
          onChange={handleChange}
        />
        <input
          type="text"
          required={true}
          name="sizes"
          placeholder="sizes"
          value={formValues.sizes}
          onChange={handleChange}
        />
        <input
          type="text"
          required={true}
          name="gender"
          placeholder="gender"
          value={formValues.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          required={true}
          name="description"
          placeholder="description"
          value={formValues.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
