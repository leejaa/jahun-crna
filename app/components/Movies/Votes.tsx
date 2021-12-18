import React from "react"
import styled from "styled-components/native"

interface VotesProps {
  votes: number
}

const Text = styled.Text`
  color: black;
  font-size: 10px;
`

export const Votes: React.FC<VotesProps> = ({ votes }) => (
  <Text>{votes > 0 ? `⭐️ ${votes}/10` : `Coming soon`}</Text>
)
