import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  background-color: var(--badass);
  color: white;
  font-size: 1.1rem;
  margin: 0;
  padding: 20px;
  text-align: center;
`;

const MyTitle = () => (
  <>
    <Title>Activities</Title>
  </>
);

export default MyTitle;
