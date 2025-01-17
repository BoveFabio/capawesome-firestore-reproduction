import {useEffect, useRef, useState} from "react";
import {FirebaseFirestore} from "@capacitor-firebase/firestore";

export function IOSDataFetchingComponent(props: { condition: string | number }) {
    const callbackIds = useRef<Set<string>>(new Set<string>());
    const [count, setCount] = useState(0);

    useEffect(() => {
        FirebaseFirestore.addCollectionSnapshotListener({
            reference: "testData",
            compositeFilter: {
                type: "and",
                queryConstraints: [
                    {
                        type: "where",
                        fieldPath: "testProperty",
                        opStr: "==",
                        value: "A"
                    }
                ]
            }
        }, snapshot => {
            setCount(snapshot?.snapshots?.length ?? 0);
        }).then(listenerId => {
            callbackIds.current.add(listenerId);
        })

        return () => {
            for (const id of callbackIds.current) {
                FirebaseFirestore.removeSnapshotListener({
                    callbackId: id,
                }).then(() => {
                    callbackIds.current.delete(id);
                })
            }
        }
    }, [props.condition]);

    return <div><span>{props.condition}:</span><span>{count}</span></div>
}