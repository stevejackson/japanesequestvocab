import * as React from "react"
import { graphql } from 'gatsby'
import {VocabularyWordCard} from "../components/VocabularyWordCard";

const IndexPage = ({data}) => {
  console.log(data.allContentfulVocabularyWord.nodes)
  const vocabularyWords = data.allContentfulVocabularyWord.nodes;

  return (
    <main>
      {vocabularyWords.map(vocabularyWord => <VocabularyWordCard key={vocabularyWord.id} vocabularyWord={vocabularyWord} /> )}
    </main>
  )
}

export const query = graphql`
{
  allContentfulVocabularyWord {
    totalCount
    nodes {
      episode
      expression
      game
      id
      powerLevel
      videoLink
    }
  }
}

`


export default IndexPage
