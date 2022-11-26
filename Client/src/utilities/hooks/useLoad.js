import { useEffect } from 'react'

const useLoad = (param) => {
  useEffect(()=>{
    window.scrollTo(0, 0)
    console.log('redered')
    console.log(window.scrollY)
  }, [param])
}

export default useLoad