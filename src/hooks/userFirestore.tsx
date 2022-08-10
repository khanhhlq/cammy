import React, { useState } from 'react'
import { db } from '../firebase/config'

const userFirestore = (collection:any, condition:any) => {
    const [documents, setDocuments] = useState<any[]>([])
    
    React.useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createdAt')

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }

            collectionRef = collectionRef.where(
                condition.fieldName, 
                condition.operator, 
                condition.compareValue
            )
        }

        const unsubcribe = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))

            setDocuments(documents)
        });

        return unsubcribe;
    }, [collection, condition])

    return documents;
};

export default userFirestore