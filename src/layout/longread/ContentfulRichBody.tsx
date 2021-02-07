import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import styled, { css } from 'styled-components'

export const CSStextLink = css`
  color: inherit;
  text-decoration: underline;
  text-decoration-style: dotted;
  @media (hover: hover) {
    &:hover {
      text-decoration-style: solid;
    }
  }
`

const BodyContainer = styled.div`
  font-size: 15px;
  & h2,
  & h3 {
    text-align: left;
  }
  & h2 {
    margin-block-start: 1.5em;
    line-height: 1.1;
    margin-block-end: 0.83em;
    font-size: 1.25rem;
    font-weight: 600;
  }
  & p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  & a {
    ${CSStextLink}
  }
  & ul {
    list-style: none;
    margin: 0;
    padding-left: 0.8em;
    & li {
      position: relative;
      padding-left: 1.3em;
      margin: 0.6em 0;
      line-height: 1.3;
      &::before {
        content: '•';
        position: absolute;
        left: 0;
      }
      & p {
        margin: 0;
        & b {
          color: black;
          font-weight: 500;
        }
      }
    }
  }
`

export const ContentfulRichBody = (prop: { document: Document }) => {
  const body = documentToReactComponents(prop.document)
  return <BodyContainer>{body}</BodyContainer>
}
