import React from 'react'
import { Link } from 'react-router'
import { ReactComponent as menu } from '../assets/menu.svg'
import { ReactComponent as left } from '../assets/left-arrow.svg'
import { ReactComponent as right } from '../assets/right-arrow.svg'
import './css/Svg_withLink.css'

export function Svg_withLink(Svg) {
  return function(props) {
    return (
      <span { ...props } className="icon-link">
        <Svg />
      </span>
    )
  }
}

export const Menu = Svg_withLink(menu);
export const LeftArrow = Svg_withLink(left);
export const RightArrow = Svg_withLink(right);
