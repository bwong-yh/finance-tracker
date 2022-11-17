import { useEffect, useRef, useState } from 'react';

// firebase & firestore
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const useCollection = (coll, _queryArray) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if no useRef --> infinity loop in useEffect
  // _querArray is 'different' on every function call
  const queryArray = useRef(_queryArray).current;

  useEffect(() => {
    let collectionRef = collection(db, coll);

    if (query) {
      collectionRef = query(collectionRef, where(...queryArray));
    }

    // real-time listener to updates every time a new doc is added to the collection
    const unsub = onSnapshot(
      collectionRef,
      snapshot => {
        let results = [];

        // snapshot contains an array of docs of the collection
        snapshot.docs.forEach(doc => {
          console.log(doc.data());
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      err => {
        console.log(err);
        setError('Could not get data.');
      }
    );

    // func is returns when page is unmount, and in return unsub from the event listener
    return () => unsub();
  }, [coll, queryArray]);

  return { documents, error };
};

export default useCollection;
