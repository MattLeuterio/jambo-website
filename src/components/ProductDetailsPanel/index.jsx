import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CloseOutline as CloseIcon, VideocamOffOutline as NoVideoIcon } from 'react-ionicons';
import ReactPlayer from 'react-player';
import {
  Body,
  Container,
  Content,
  Cover,
  Description, DetailsProduct,
  Genre,
  Header,
  InfoSection,
  ReleaseDate,
  RowInfo,
  VideoWrapper,
  Detail, NoVideoWrapper
} from './style';
import theme from '../../ui/theme';
import { GET_PRODUCT_DETAILS, GET_PRODUCT_VIDEO } from '../../redux/actions/product';
import Lexend from '../../ui/typography/lexend';

const ProductDetailsPanel = ({
  onClose, isOpen, product, getProductDetails, details,
  getProductVideo, videoProduct
}) => {
  const [video, setVideo] = useState({});
  useEffect(() => {
    if (product) {
      const payload = {
        id: product?.idTmdb,
        prodType: product?.productType
      };
      getProductDetails(payload);
      getProductVideo(payload);
    }
  }, [product]);

  useEffect(() => {
    if (videoProduct) {
      const video = videoProduct.find(el => el.site === 'YouTube' && el.type === 'Trailer');
      setVideo(video);
    }
  }, [videoProduct]);

  return (
    <Container isOpen={isOpen}>
      <CloseIcon
        className="iconClose"
        color={theme.colors.primary.white}
        onClick={() => onClose()}
        height="30px"
        width="30px"
      />
      <Content>
        <Header>
          <Cover posterPath={details?.poster_path} />
          <InfoSection>
            <RowInfo>
              {(details?.release_date || details?.first_air_date) && (
                <ReleaseDate>
                  <Lexend type="prodDetailsDate">{details?.release_date || details?.first_air_date}</Lexend>
                </ReleaseDate>
              )}
              <Genre>
                <Lexend type="prodDetailsGenre">{details?.genres?.map((genre) => (
                  <span key={genre.name}>{genre.name}</span>
                ))}
                </Lexend>
              </Genre>
              {product?.productType === 'Film' && (
                <Lexend type="prodDetailsRuntime">{details?.runtime} min.</Lexend>
              )}
            </RowInfo>
            <Lexend type="prodDetailsTitle">{details?.title || details?.name}</Lexend>
            <Description>
              <Lexend type="h4">{details?.overview}</Lexend>
            </Description>
          </InfoSection>
        </Header>
        <Body>
          <VideoWrapper>
            <Lexend type="medium">
              Video
              {videoProduct?.length > 0 && (
                <Lexend htmlAttribute="span" type="prodVideoType">{" - "}{video?.type}</Lexend>
              )}
            </Lexend>
            {videoProduct?.length > 0 ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video?.key}`}
                width="100%"
                height="100%"
                controls
              />
            ) : (
              <NoVideoWrapper>
                <NoVideoIcon
                  color={theme.colors.primary.white}
                  onClick={() => onClose()}
                  height="30px"
                  width="30px"
                />
              </NoVideoWrapper>
            )}
          </VideoWrapper>
          <DetailsProduct>
            {(details?.original_name || details?.original_title) && (
              <Detail>
                <Lexend type="bold">Titolo Originale</Lexend>
                <Lexend type="cardTitle">{details?.original_name || details?.original_title}</Lexend>
              </Detail>
            )}
            {details?.original_language && (
              <Detail>
                <Lexend type="bold">Lingua Originale</Lexend>
                <Lexend type="cardTitle">{details?.original_language}</Lexend>
              </Detail>
            )}
          </DetailsProduct>
        </Body>
      </Content>
    </Container>
  );
};

ProductDetailsPanel.propTypes = {
  // HOC (connect, state)

  // HOC (connect, dispatch)
  onClose: PropTypes.func
};

export default connect(
  state => ({
    details: state.product.productSelectedDetails,
    videoProduct: state.product.productSelectedVideo
  }),
  dispatch => ({
    //onClose: () => dispatch({ type: MODAL_CLOSE }),
    getProductDetails: (payload) => dispatch({ type: GET_PRODUCT_DETAILS._REQUEST, payload }),
    getProductVideo: (payload) => dispatch({ type: GET_PRODUCT_VIDEO._REQUEST, payload })
  })
)(ProductDetailsPanel);
