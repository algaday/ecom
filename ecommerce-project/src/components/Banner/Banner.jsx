import React from 'react'
import {
  BannerButton,
  BannerContainer,
  BannerImage,
  BannerInfo,
  BannerInfoText,
  BannerInfoTitle,
  BannerWrapper,
} from './Banner.styles'
import CustomButton from '../Button/CustomButton'
function Banner() {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerImage src={require('./dish.jpg')} />
        <BannerInfo>
          <BannerInfoTitle>
            People who love to eat are always the best people
          </BannerInfoTitle>
          <BannerInfoText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            recusandae blanditiis ipsa culpa quae molestiae fuga amet iste
            corporis obcaecati itaque, delectus placeat numquam explicabo,
            ratione, impedit quisquam magni expedita.
          </BannerInfoText>
          <BannerButton to='shop'>See all foods</BannerButton>
        </BannerInfo>
      </BannerContainer>
    </BannerWrapper>
  )
}

export default Banner
