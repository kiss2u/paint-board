import { ShapeFillType } from '@/constants/shape'
import { DrawLineType } from '@/constants/drawLineType'
import useShapeStore from '@/store/shape'

export const getShapeBorderWidth = () => {
  const borderWidth = useShapeStore.getState().borderWidth
  return borderWidth
}

export const getShapeBorder = (base = 5) => {
  const borderType = useShapeStore.getState().borderType
  const value = Math.round(base)

  switch (borderType) {
    case DrawLineType.Dashed:
      return [value * 3, value * 2]
    case DrawLineType.Dotted:
      return [value, value * 3]
    default:
      return undefined
  }
}

export const getFillStyle = () => {
  const { fillType, fillColor } = useShapeStore.getState()

  switch (fillType) {
    case ShapeFillType.Transparent:
      return 'transparent'
    case ShapeFillType.Full:
      return fillColor
    default:
      return undefined
  }
}
