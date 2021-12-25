import React from 'react'

function Number({num, setNumber}) {
    const handleNum = () =>{
        setNumber(num)
    }


    return  <span onClick={handleNum}>{num} </span>
}

export default Number
