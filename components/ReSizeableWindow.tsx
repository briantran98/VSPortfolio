import styles from './ReSizeableWindow.module.css';
import React, { useCallback, useState, useRef, useEffect } from 'react';

export default function ReSizeableWindow(prop: { width?: number; className?: string; id?:string}) {
  const resizeableRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState<number>(prop.width ?? 0);

  let startX: number = 0;

  const mouseMoveHandler = (event: MouseEvent) => {
    if (resizeableRef.current != null)
    {
      // console.log(event.clientX);
      // setWidth(event.clientX - resizeableRef.current.offsetLeft + 5)
      setWidth(prevWidth => {
        let newWidth = prevWidth + event.clientX - startX;
        console.log(prevWidth, "prevWidth");
        console.log(event.clientX, "clientX");
        console.log(startX, "startX");
        return newWidth;
      })
    }
  }

  const mouseDownHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    window.addEventListener('mousemove', mouseMoveHandler)
    startX = event.clientX;
  }, [])

  const mouseUpHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  }, [])


  let className = prop.className ? `${styles.window} ${prop.className}` : styles.window;

  return (
    <div id={prop.id} className={className} ref={resizeableRef} style={{width: width}}>
      {/* <div className={`${styles.resizable} ${styles.horizontalEdge}`} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}/> */}
      <div className={`${styles.resizable} ${styles.verticalEdge}`} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}/>

    </div>
  )
}