import { FC, useState } from 'hono/jsx'; // This is safe because `hono/jsx` is compatible with both client and server environments

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export const App: FC = () => {
    return (
        <div>
            <h1>Counter Example</h1>
            <Counter />
        </div>
    );
};
