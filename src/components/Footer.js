import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledFooter = styled.footer`
  padding: 4.4em 0;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LinksList = styled.ul`
  color: #bdbdbd;
`;

const LinkListItem = styled.li`
  display: inline-block;
  margin-right: 1.1em;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container>
        <Content>
          <div className="copyrights">
            <p>© {year} CodeNakama</p>
          </div>

          <LinksList>
            <LinkListItem>
              <a
                href="https://www.instagram.com/iamricardo_o/"
                title="Instagram"
                target="_blank"
              >
                <i className="fa fa-instagram fa-2x" aria-hidden="true" />
              </a>
            </LinkListItem>
            <LinkListItem>
              <a
                href="https://www.linkedin.com/in/rjabreu"
                title="LinkedIn"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
              </a>
            </LinkListItem>
            <LinkListItem>
              <a
                href="https://github.com/CodeNakama"
                title="GitHub"
                target="_blank"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </LinkListItem>
            <LinkListItem>
              <a
                href="https://twitter.com/CodeNakama"
                title="Twitter"
                target="_blank"
              >
                <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              </a>
            </LinkListItem>
          </LinksList>
        </Content>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
