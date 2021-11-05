import styled from 'styled-components'

export const ProgressWrap = styled.div`
  background-color: #6f6f6f;
  border-radius: 20px;
  position: relative;
  margin: 6px 0;
  height: 14px;
  width: 200px;
`

export const ProgressDone = styled.div`
  background: linear-gradient(to left, #5a0a75, #f172ff);
  ${'' /* box-shadow: 0 3px 3px -5px #d870f2, 0 2px 5px #7f70f2; */}
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${(props) => props.width};
  opacity: ${(props) => props.opacity};
  transition: 1s ease 0.3s;
`
