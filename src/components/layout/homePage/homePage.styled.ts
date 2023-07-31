import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2.4rem 8.75rem 0 8.75rem;
  align-items: center;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  margin: 1.75rem 0;
  line-height: normal;
`

export const Download = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary.textHover};
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  gap: 0.5rem;
  cursor: pointer;
`

export const ContactMe = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.textHover};
  color: ${({ theme }) => theme.colors.primary.textHover};
  padding: 0.6rem 1.25rem;
  gap: 0.5rem;
  cursor: pointer;
`

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  gap: 1rem;
  cursor: pointer;
`

export const Position = styled.p``
