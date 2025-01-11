import * as S from './style'

const StyledButton = ({ children, onClick, disabled }: { children: string, onClick: () => any, disabled: boolean }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>{children}</S.Button>
  )
}

export default StyledButton