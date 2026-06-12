import type { NoteChapter } from '../types'

export const reactNotes: NoteChapter[] = [
  {
    id: 'react-rendering',
    title: 'Chapter 1: React State & The Virtual DOM',
    content: 'React coordinates DOM updates by maintaining a virtual copy of the DOM in memory. When a component\'s state or props modify, React creates a new virtual tree, compares it with the old virtual tree (diffing), and pushes only the differences to the real browser DOM (reconciliation).',
    codeSnippet: {
      code: `import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Updating state schedules a virtual DOM re-render */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
      language: 'javascript',
    },
    summary: 'Never mutate state variables directly. Always invoke the state setter function to inform React to queue virtual tree comparisons.',
  },
  {
    id: 'react-hooks',
    title: 'Chapter 2: Optimization with useMemo & useCallback',
    content: 'React components re-render by default when their parents re-render. To prevent redundant heavy computations and preserve referential integrity of handler callbacks, use `useMemo` (memoizes a calculation result) and `useCallback` (memoizes a function instance).',
    codeSnippet: {
      code: `import { useState, useMemo, useCallback } from 'react';

export function HeavyComputation({ items }) {
  const [search, setSearch] = useState("");

  // Memoize heavy filtration computation
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(search));
  }, [items, search]);

  // Memoize function to prevent re-creating reference on each render
  const handleClear = useCallback(() => {
    setSearch("");
  }, []);

  return (
    <input value={search} onChange={e => setSearch(e.target.value)} />
  );
}`,
      language: 'javascript',
    },
    summary: 'Do not optimize prematurely. Use useMemo/useCallback when rendering lists, passing functions to memoized child components, or when dependencies trigger nested hooks.',
  },
]
