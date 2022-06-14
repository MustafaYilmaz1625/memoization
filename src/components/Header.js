import React from "react";

function Header({ number }) {
  return <div>Header- {number}</div>;
}

export default React.memo(Header);
