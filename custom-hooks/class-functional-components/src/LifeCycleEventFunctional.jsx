import React, { useState, useEffect} from 'react'

const LifeCycleEventFunctional = () => {
    console.log("Component mounts")
    const [count, setCount ] = useState(0)
    useEffect(()=> {
        const timer = setInterval(()=> {
            setCount(prev => prev + 1)
        }, 1000)
        return ()=> {
            console.log("Before unmounting")
            clearInterval(timer)
        }
    })
  return (
    <div>
        {count}
    </div>
  )
}

export default LifeCycleEventFunctional