import React from 'react';
import styled from 'styled-components';

import img from '../../images/img.jpg';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
`;

const H1 = styled.h1`
  color: #fff;
  margin: 0;
  padding: 200px;
  font-size: 80px;
  text-align: center;
`;

export default function ExamplePage() {
  return (
    <Wrapper>
      <H1>
        Hello!
      </H1>
    </Wrapper>
  );
}
