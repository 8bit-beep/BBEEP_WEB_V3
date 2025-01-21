import { FC } from 'react'
import * as S from './style'
import { StyledButtonProps } from '../../../types/props/styledButtonProps'

const StyledButton: FC<StyledButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>{children}</S.Button>
  )
}

export default StyledButton