import styled from "styled-components";

export const WorkSection = styled.section`
  min-height: 100vh;
  padding: 150px 50px 50px 50px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
  }

  .project-detail {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
`;
