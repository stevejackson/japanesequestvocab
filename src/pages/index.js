import * as React from "react"
import { graphql } from 'gatsby'
import VocabularyIndexPage from "../components/features/vocabularyIndex/VocabularyIndexPage";

const IndexPage = ({data}) => {
  const vocabularyWords = data.allMarkdownRemark.nodes.map(remark => remark.frontmatter)
    .sort((a, b) => a.powerlevel - b.powerlevel)
  return <VocabularyIndexPage vocabularyWords={vocabularyWords} />
}

export default IndexPage

export const pageQuery = graphql`
query {
  allMarkdownRemark {
    nodes {
      id
      rawMarkdownBody
      frontmatter {
        definition
        expression
        powerlevel
        pronunciation
        title
        screenshot
        game
        episode
        videolink
      }
    }
  }
}
`
