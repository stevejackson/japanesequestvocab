import * as React from "react"
import { graphql } from 'gatsby'
import {VocabularyWordCard} from "../components/VocabularyWordCard";

const IndexPage = ({data}) => {
  const vocabularyWords = data.allMarkdownRemark.nodes.map(remark => remark.frontmatter)

  return (
    <main>
      {vocabularyWords.map(vocabularyWord => <VocabularyWordCard key={vocabularyWord.id} vocabularyWord={vocabularyWord} /> )}
    </main>
  )
}

export const query = graphql`
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
      }
    }
  }
}
`

export default IndexPage
