import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({ description, image, title }: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image src={getImageUrl(image.url)} alt={image.alternativeText} loading='lazy'>

        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }}>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
