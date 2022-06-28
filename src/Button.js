import React from 'react';

export function Button({ setState, state }) {
  let label = ["Timer", "Start", "clock"];
  return (
    <button className="btn" onClick={() => setState(state === 2 ? 0 : state + 1)}>{label[state]}</button>
  );
}
