"use client";

import { useState } from "react";

function Layout({ renderHeader, renderMain, renderFooter }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  return (
    <div>
      <header>{renderHeader?.(true)}</header>
      <main>
        <button onClick={() => setIsFooterVisible(!isFooterVisible)}>
          click
        </button>
        {renderMain?.()}
      </main>
      <footer>{renderFooter?.(isFooterVisible)}</footer>
    </div>
  );
}

function Header({ isSticky }) {
  return <div>Header</div>;
}

export default function RenderProp() {
  return (
    <Layout
      renderHeader={(isSticky) => <Header isSticky={isSticky} />}
      renderMain={() => <div>MainContent</div>}
      renderFooter={(isFooterVisible) => (
        <div>{isFooterVisible ? "Yes" : "No"}</div>
      )}
    />
  );
}
