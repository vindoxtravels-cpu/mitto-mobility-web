import type * as React from "react";

// React 19's recommended typing is React.JSX.*, but this project uses JSX.Element in many places.
// This file restores the global JSX namespace so `JSX.Element` works everywhere.
declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface Element extends React.ReactElement<any, any> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

export {};
