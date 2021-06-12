import  { useEffect, useState } from 'react'


function useFetch<Payload>(url:string): {data: Payload | null, done: boolean} {

    const [data, setData] = useState<Payload | null>(null)
    const [done, setDone] = useState(false)

    useEffect(() => {

        fetch(url)
        .then(res => res.json())
        .then((res: Payload)=> {
            setDone(true)
            setData(res)
        })
    }, [url])

    return {data, done}
}



export default useFetch;