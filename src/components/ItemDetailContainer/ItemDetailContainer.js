import React from 'react';
import ItemLoading from '../ItemLoading/ItemLoading';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      <div className="pt-3">
        <h3>Detalle</h3>
      </div>
      <div className="ItemDetailContainer d-flex justify-content-center mt-2">{loading ? <ItemLoading text="Loading..." /> : <ItemDetail {...product} />}</div>
    </>
  );
};

export default ItemDetailContainer;
