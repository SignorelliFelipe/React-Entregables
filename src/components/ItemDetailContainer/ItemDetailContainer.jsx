import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {

        const getProduct = new Promise((resolve) => {

            setTimeout(() => {

                resolve(
                    products.find(
                        (product) => product.id === Number(itemId)
                    )
                );

            }, 1000);

        });

        getProduct.then((response) => {
            setItem(response);
        });

    }, [itemId]);

    if (item === undefined) {
        return <h2>Producto no encontrado</h2>;
    }

    if (item === null) {
        return <h2>Cargando...</h2>;
    }

    return <ItemDetail product={item} />;
};

export default ItemDetailContainer;