import  { useEffect, useCallback } from "react";

const GrabLocation = (getLocation, point) => {
    const grabLocation = useCallback(() => {
        getLocation(point.pathname)
      },[point.pathname, getLocation])
    
      useEffect(()=>{
        grabLocation()
      },[grabLocation])
}

export default GrabLocation