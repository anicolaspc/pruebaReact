import React, { useState, useEffect } from "react";

const FetchComponent = ({ url, children }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    setData(data)
                } else {
                    throw new Error('Error en la respuesta HTTP')
                }
            } catch (err) {
                setData({ error: 'Hubo un problemacon la petición: ' + err.message })
            }
        }
        fetchData()
    }, [url])

    if (!data) {
        return null
    }

    if (data.error) {
        return <div>Error: {data.error}</div>
    }

    return children(data)

}

export default FetchComponent