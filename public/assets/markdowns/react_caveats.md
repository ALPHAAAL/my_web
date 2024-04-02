# useCallback / useMemo and re-renders

1. When is useCallback / useMemo useless
    
    ```jsx
    function Component() {
    	const handler = useCallback(() => {}, []);
    
    	return <button onClick={handler} />
    }
    ```
    
    At first glance, it might looks like this is correct use of useCallback, but actually it isn’t, the reason being that `Component` itself is not memoized, so whenever it’s parent re-renders, the whole Component will be recreated, it doesn’t matter if you use `useCallback`
    
    So the solution to this is
    
    ```jsx
    // ...
    const MemoizedComponent = React.memo(Component);
    ```
    
    Another example
    
    ```jsx
    const Memoized = React.memo(Something);
    
    function Component() {
    	const handler = useCallback(() => {}, []);
    
    	return (
    		<Memoized onClick={handler}>
    			<div>{textFromConstant}</div>
    		</Memoized>
    	);
    }
    ```
    
    This is also useless, because the `<div>...</div>` is just a syntactic sugar for `React.createElement(...)` and is passed into `Memoized` as `children` props, i.e.
    
    ```jsx
    <Memoized
    	onClick={handler}
    	children={(<div>{textFromConstant}</div>)}
    />
    ```
    
     so when `Component` is re-rendered, since the `children` receives a new `React.createElement` object, it will not be memoized and re-renders.
    
    Another example, that might looks like it fixes the above problem
    
    ```jsx
    const Memoized = React.memo(Something);
    const MemoizedInner = React.memo(<div>{children}</div>);
    
    function Component() {
    	const handler = useCallback(() => {}, []);
    
    	return (
    		<Memoized onClick={handler}>
    			<MemoizedInner>
    				<div>balbalbal</div>
    			<MemoizedInner /> // actually not memoized
    		</Memoized>
    	);
    }
    ```
    
    Again, same problem, the children passed into `MemoizedInner` is not memoized, so it will be a new reference every time.
    
    Which means it always create a new object of `MemoizedInner`, instead of the actual memoization that we expect, so the final solution should be
    
    ```jsx
    const Memoized = React.memo(Something);
    
    function Component() {
    	const handler = useCallback(() => {}, []);
    	const child = useMemo(() => {
    		return (<div>{textFromConstant}</div>);
    	}, []); // constant reference here
    
    	return (
    		<Memoized onClick={handler}>
    			<MemoizedInner>
    				{child} // **Note that here we are using {} syntax**
    			<MemoizedInner />
    		</Memoized>
    	);
    }
    ```
    
    Backup full example:
    
    ```jsx
    import React, { useCallback, useMemo, useState } from "react";
    import ReactDOM from "react-dom";
    
    function Child({children}) {
      console.log("Rerender child");
    
      return (
        <div>
          {children}
        </div>
      );
    }
    
    const MChild = React.memo(Child);
    
    function Parent() {
      const [t, setT] = useState(0);
      const cb = useCallback(() => {
        setT(Math.random());
      }, []);
      const memoHehe = useMemo(() => (<div>hehe</div>), []);
    
      console.log("Rerender parent");
    
      return (
        <div>
          <MChild>
             <div>hehe</div>{/* Do React.createElement here, so memo-ed Child became useless */}
          </MChild>
          <button onClick={cb}>Set {t}</button>
        </div>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<Parent />, rootElement);
    ```