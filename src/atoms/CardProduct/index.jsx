import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CardProductContainer, CoverSection, InfoSection, TypeWrapper
} from './style';
import Lexend from '../../ui/typography/lexend';

const CardProduct = ({
  product, onClickCard
}) => {
  return (
    <CardProductContainer onClick={onClickCard}>
      <CoverSection cover={product.cover}>
        <TypeWrapper>
          <Lexend type="cardProductType">{product.productType}</Lexend>
        </TypeWrapper>
      </CoverSection>
      <InfoSection>
        <Lexend type="cardGenre">{product.genre}</Lexend>
        <Lexend type="cardTitle">{product.title}</Lexend>
      </InfoSection>
    </CardProductContainer>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object.isRequired
};

export default CardProduct;
