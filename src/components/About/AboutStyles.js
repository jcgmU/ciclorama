import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 150px 50px 50px 50px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    max-width: 800px;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
  }

  .image {
    width: 300px;
    margin-top: 30px;
    opacity: 0;
    transform: scale(0.8);
  }
`;
