import styled from "styled-components"

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.background};
  color: ${({ theme }) => theme.colors.primary.textPrimary};
`

export const Main = styled.div`
  margin: 2.4rem 8.75rem 0 8.75rem;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    margin: 0 1.5rem;
  }
`
