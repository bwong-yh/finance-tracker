import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';

// firebase & firestore
import { db } from '../firebase/config';
import { collection } from 'firebase/firestore';

const useCollection = coll => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let collectionRef = collection(db, coll);

    // real-time listener to updates every time a new doc is added to the collection
    const unsub = onSnapshot(
      collectionRef,
      snapshot => {
        let results = [];

        // snapshot contains an array of docs of the collection
        snapshot.docs.forEach(doc => {
          results.push({ ...doc.data, id: doc.id });
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
  }, [coll]);

  return { documents, error };
};

export default useCollection;
