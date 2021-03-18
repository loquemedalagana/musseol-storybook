import React, { RefObject } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;
`;

interface IProps {
  ref?: RefObject<HTMLDivElement>;
}

const BottomLoadingContainer: React.VFC<IProps> = ({ ref }) => {
  return (
    <Wrapper ref={ref}>
      <div className="cssload-container">
        <div className="cssload-bouncywrap">
          <div className="cssload-cssload-dotcon cssload-dc1">
            <div className="cssload-dot" />
          </div>
          <div className="cssload-cssload-dotcon dc2">
            <div className="cssload-dot" />
          </div>
          <div className="cssload-cssload-dotcon dc3">
            <div className="cssload-dot" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomLoadingContainer;
