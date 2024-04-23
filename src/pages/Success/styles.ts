import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 80px 2rem 80px 2rem;
`;

export const Label = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-700']};
`;

export const Subtitle = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  font-variation-settings: 'wdth' 100;
`;

export const OrderInfoContainer = styled.div`
  width: 526px;
  height: 270px;

  padding: 40px 0px 0px 0px;
  gap: 32px;

  border-radius: 6px 36px 6px 36px;
  border-image: linear-gradient(#dbac2c, #8047f8) 30;
  border-width: 1px;
  border-style: solid;
`;

export const SuccessContainer = styled.div`
  /* Order info */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  border-radius: 6px 36px;
`;
