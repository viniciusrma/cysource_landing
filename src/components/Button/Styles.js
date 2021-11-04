import styled from 'styled-components'
import Spinner from '../Spinner'

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  vertical-align: middle;
  line-height: 1;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s;
  background: ${(props) => props.theme.colors.background};
  appearance: none;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  &:disabled {
    opacity: 0.6;

    &:hover {
      cursor: not-allowed;
    }
  }
`

export const StyledSpinner = styled(Spinner)`
  position: relative;
  top: 1px;
`
