import styled from 'styled-components';

interface ItemCardImageProps {
  width?: string;
  height?: string;
  marginTop?: string;
}

export const ItemCardImage = styled.img<ItemCardImageProps>`
  width: ${(props) => props.width || '7.5rem !important'};
  height: ${(props) => props.height || '7.5rem !important'};
  margin-top: ${(props) => props.marginTop || '0'};
`;
