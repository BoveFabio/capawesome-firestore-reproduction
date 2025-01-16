import {useEffect, useRef, useState} from "react";
import {FirebaseFirestore} from "@capacitor-firebase/firestore";

export function IOSDataFetchingComponent(props: { condition: string }) {
    const callbackId = useRef<string>();
    const [count, setCount] = useState(0);
    const [reload, setReload] = useState(0);

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
                        value: props.condition
                    }
                ]
            }
        }, snapshot => {
            setCount(snapshot?.snapshots?.length ?? 0);
        }).then(listenerId => {
            callbackId.current = listenerId;
        })

        return () => {
            if (callbackId.current) {
                FirebaseFirestore.removeSnapshotListener({
                    callbackId: callbackId.current,
                })
            }
        }
    }, [props.condition, reload]);

    return <div><span>{props.condition}:</span><span>{count}</span><button onClick={() => setReload(prev => prev+1)}>Reload</button></div>
}