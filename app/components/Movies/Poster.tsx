import React from "react"
import styled from "styled-components/native"
import { makeImgPath } from "../../utils"

export const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`

interface PosterProps {
  path: string
}

export const Poster: React.FC<PosterProps> = ({ path }) => (
  <Image source={{ uri: makeImgPath(path) }} />
)
