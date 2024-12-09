import React, { useEffect, useRef, useState } from 'react'
import './css/Wheel.css'
import { LeftArrow, RightArrow } from '../hoc/Svg_withLink'

const itemMargin = 20;

export default function Wheel({ children }) {
  const [x, setX] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const content = useRef(null);
  const scroll = useRef(null);
  const firstItem = useRef(null);

  function move(direct) {
    const step = firstItem.current
      ? (firstItem.current.offsetWidth + itemMargin) * direct
      : 300;

    const newX = x + step;
    const minX =  content.current.offsetWidth - scroll.current.scrollWidth;
    const maxX = 0;

    if (newX >= maxX) {
      setX(maxX);
    } else if (newX <= minX) {
      setX(minX);
    } else {
      setX(newX);
    }

    checkBorders();
  }

  function checkBorders() {
    const minX =  content.current.offsetWidth - scroll.current.scrollWidth;
    const maxX = 0;
    const startReached = x >= maxX;
    const endReached = x <= minX;

    if (isStart != startReached) {
      setIsStart(startReached);
    }

    if (isEnd != endReached) {
      setIsEnd(endReached);
    }
  }

  useEffect(() => {
    checkBorders();
  }, []);

  return (
    <div className="wheel">
      <div className="wheel__desktop"><LeftArrow onClick={() => move(1)} disabled={isStart} /></div>
      <div className="wheel__content" ref={content}>
        <div className="wheel__scroll" style={{left: x + "px"}} ref={scroll}>
          {React.Children.map(children, (child, index) => 
            <div className="wheel__item" ref={index == 0 ? firstItem : undefined}>
              {child}
            </div>
          )}
        </div>
      </div>
      <div className="wheel__desktop"><RightArrow onClick={() => move(-1)} disabled={isEnd} /></div>
      <div className="wheel__mobile">
        <LeftArrow onClick={() => move(1)} disabled={isStart} />
        <RightArrow onClick={() => move(-1)} disabled={isEnd} />
      </div>
    </div>
  )
}
