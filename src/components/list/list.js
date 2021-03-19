import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  let title = 'Blog';

  return (
    <Container>
      {/* If the list is a blog posts, we render a title. */}
      {data.isPostArchive && (
      <Header>
        <h1>{title}</h1>
      </Header>
      )}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
    
      {/* Iterate over the items of the list. */}
      <div className="post_grid">
        <>
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
        </>
      </div>
      
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
  .post_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 900px) {
    .post_grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Header = styled.div`
  h1 {
    font-size: 78px;
    font-weight: 400;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 48px;
    }
  }
`;