import { useReducer } from 'react';

// firebase & firestore
import { db, timestamp } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

let initialState = {
  isPending: false,
  document: null,
  success: null,
  error: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: null, error: null };
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'ERROR':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useFirestore = coll => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  //  referencing a collection
  const collectionRef = collection(db, coll);

  // add a doc
  const addDocument = async doc => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createAt = timestamp.fromDate(new Date());
      const docRef = await addDoc(collectionRef, {
        ...doc,
        createAt,
      });

      dispatch({ type: 'ADDED_DOCUMENT', payload: docRef });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  // delete a doc
  const deleteDocument = async id => {};

  return { response, addDocument, deleteDocument };
};

export default useFirestore;
