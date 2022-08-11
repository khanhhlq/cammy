import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, QuerySnapshot } from "firebase/firestore";


const useFirestore = (collectionn, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    // let collectionRef = db.collection(collection).orderBy('createdAt');
    let collectionRef = query(collection(db, collectionn), where(condition.fieldName, condition.operator, condition.compareValue ))
    
    // if (condition) {
    //   if (!condition.compareValue || !condition.compareValue.length) {
    //     setDocuments([]);
    //     return;
    //   }

    //   collectionRef = collectionRef.where(
    //     condition.fieldName,
    //     condition.operator,
    //     condition.compareValue
    //   );
    // }

    // const unsubscribe = collectionRef.onSnapshot((snapshot) => {
    //   const documents = snapshot.docs.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id,
    //   }));

    //   setDocuments(documents);
    // });

    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const documents = querySnapshot.map((doc) => (
        {
          ...doc.data(),
          id: doc.id
      }
      ));

      setDocuments(documents)
      console.log("Current cities in CA: ", documents);
    });
    

    return unsubscribe;
  }, [collection, condition]);
  
  return documents;
};

export default useFirestore;