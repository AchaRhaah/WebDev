import React, {useState, useEffect} from 'react'

export default function Products() {
      const [data, setdata] = useState([])
      const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
  let componentMounted = true;
  

    return (
      <div>
          <p>Product</p>
    </div>
  )
}
