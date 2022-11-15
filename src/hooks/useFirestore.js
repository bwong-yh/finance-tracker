import { useEffect, useReducer, useStatus } from 'react';

// firebase & firestore
import db from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const useFirestore = coll => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  //  referencing a collection
  const collectionRef = collection(db, coll);

  // add a doc
  const addDocument = doc => {};

  // delete a doc
  const deleteDocument = id => {};

  return { response, addDocument, deleteDocument };
};

export default useFirestore;
