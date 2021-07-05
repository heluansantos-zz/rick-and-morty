import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 475px;
  background: #1b1b1b;
  border: 1px solid #606060;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 5px;
`;

export const Img = styled.img`
  width: 400px;
  height: auto;
  border-radius: 6px;
  margin: 10px;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin: 10px;
  text-align: center;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #cbd736;
  font-weight: normal;
  font-size: 13px;
  letter-spacing: 0.65em;
`;

export const Info = styled.span`
  color: #d3d3d3;
  font-weight: normal;
  font-size: 16px;
`;

export const DivDetails = styled.div``;
export const Residents = styled.span`
  color: #fff;
  font-weight: bold;
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
`;
