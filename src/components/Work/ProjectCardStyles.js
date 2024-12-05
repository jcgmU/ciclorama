import styled from "styled-components";

export const Card = styled.div`
  background-color: #2c2c2c;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    padding: 20px;
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #455ce9;
  }

  .description {
    font-size: 1rem;
    color: #ccc;
  }
`;
