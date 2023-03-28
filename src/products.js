import { useState, useEffect } from "react";

function PRODUCTS() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fake = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsonData = await res.json();
      setData(jsonData);
    };
    fake();
  }, []);
  return { data };
}

export default PRODUCTS;
