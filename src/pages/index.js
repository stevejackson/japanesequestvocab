import * as React from "react"
import { graphql } from 'gatsby'
import {VocabularyWordCard} from "../components/VocabularyWordCard";
import { VocabularyIndexPage } from "./VocabularyIndexPage";

const IndexPage = ({data}) => {
  console.log(data)
  const vocabularyWords = data.allMarkdownRemark.nodes.map(remark => remark.frontmatter)

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
      }
    }
  }
}
`
