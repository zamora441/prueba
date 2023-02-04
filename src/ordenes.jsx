import { useEffect, useState } from "react"

const Ordenes = () => {
    const [orden, setOrden] = useState(null)
    const getOrden = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setOrden(data)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
    getOrden('http://localhost:8000/api/orders/2')
    },[])

    
    return (
        <div>
            <div>{`Orden ${orden && orden.id}` }</div>
            <table border='2px'>
                <thead>
                <tr>
                    <th>id</th>
                    <th>uni</th>
                    <th>shelf</th>
                    <th>count</th>
                    <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    {orden && orden.products.map(product => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.uni}</td>
                            <td>{product.shelf}</td>
                            <td>{product.count}</td>
                            <td>{product.total}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )


}

export default Ordenes