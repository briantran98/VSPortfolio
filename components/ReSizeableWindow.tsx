import styles from './ReSizeableWindow.module.css';
import React, { useCallback, useState, useRef, useEffect } from 'react';

export default function ReSizeableWindow(prop: { width?: number; className?: string; id?:string}) {
  const resizeableRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState<number>(prop.width ?? 0);
  
  let startX: number = 0;

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    if (resizeableRef.current != null)
    {
      let currentWidth = width;
      setWidth(() => currentWidth + event.clientX - startX)
    }
  }, [startX, width])


  const mouseUpHandler = useCallback((event: MouseEvent) => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  }, [mouseMoveHandler])

  const mouseDownHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    startX = event.clientX;
    window.addEventListener('mousemove', mouseMoveHandler)
    window.addEventListener('mouseup', mouseUpHandler)
  }, [width])

  let className : string = prop.className ? `${styles.window} ${prop.className}` : styles.window;
  let widthStyle = width ? {width: width} : {};

  return (
    <div id={prop.id} className={className} ref={resizeableRef} style={widthStyle}>
      {/* <div className={`${styles.resizable} ${styles.horizontalEdge}`} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}/> */}
      <div className={`${styles.resizable} ${styles.verticalEdge}`} onMouseDown={mouseDownHandler}/>

    </div>
  )
}