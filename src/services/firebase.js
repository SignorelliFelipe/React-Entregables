import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

export const getProducts = async () => {

  const productsRef = collection(db, "products");

  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

};

export const getProductById = async (id) => {

  const productRef = doc(db, "products", id);

  const snapshot = await getDoc(productRef);

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };

};

export const getProductsByCategory = async (categoryId) => {

  const productsRef = collection(db, "products");

  const q = query(
    productsRef,
    where("category", "==", categoryId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

};

export const createOrder = async (order) => {

  const ordersRef = collection(db, "orders");

  const response = await addDoc(ordersRef, order);

  return response.id;

};