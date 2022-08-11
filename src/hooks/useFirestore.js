import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const useFirestore = (collectionn, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    let collectionRef = query(collection(db, collectionn), where(condition.fieldName, condition.operator, condition.compareValue ))

    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const documents = []

      querySnapshot.forEach((doc) => (
        documents.push({ ...doc.data(), id: doc.id})
      ));

      setDocuments(documents)
    });
  
    return unsubscribe;
  }, [collectionn, condition]);
  
  return documents;
}

export default useFirestore;