'use client'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { ImageProps } from './Image.types'
import cs from 'classnames'
import styles from './Image.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Image = ({
  modifiers = [],
  position,
  size,
  ratio,
  alt,
  width,
  height,
  desktop,
  tablet,
  mobile,
  src,
  placeholder,
  blur
}: ImageProps) => {
  const srcset = `
    ${desktop ? `${desktop} 1024w,` : ''}
    ${tablet ? `${tablet} 768w,` : ''}
    ${mobile ? `${mobile} 480w` : ''}
  `
  const sizes = getBreakpoints('image-size', size)
  const positions = getBreakpoints('image-position', position)
  const ratios = getBreakpoints('ratio', ratio)

  return (
    <LazyLoadImage
      className={cs(
        styles['image'],
        sizes && sizes.length > 0 && sizes.map((size) => styles[size]),
        positions &&
          positions.length > 0 &&
          positions.map((position) => styles[position]),
        ratios && ratios.length > 0 && ratios.map((ratio) => styles[ratio]),
        ...modifiers
      )}
      src={mobile ? mobile : src ? src : ''}
      srcSet={srcset ? srcset : ''}
      placeholderSrc={placeholder ? placeholder : ''}
      width={width ? width : ''}
      height={height ? height : ''}
      alt={alt ? alt : ''}
      effect={blur ? 'blur' : undefined}
    />
  )
}
