# React sessions

- Props && States

```ts
 const [currentValue , fnToChangeState] = useState(#); //✅ to follow react render
//  # --> initial State as value 0 | "ahmed" | true
//  # --> ()=> { operation must return "initial State" }
 if (count === 3) {
 	useState(); //❌
 }
```
- Components with variations
- Atomic structure (code structure)
- useEffect (LifeCycle)
  ```useEffect(cb,[])```

  - 'after mounted`
  ```useEffect(()=>{ ...action ... },[])```
  - 'before unmount`
  ```ts
  useEffect(()=>{

  return ()=>{
    // ...action ...
  }
  },[])
  ```
  - 'update` --> "after update" | "before next update"
  ```ts
  useEffect(()=>{
    // before update | destroy last value

    return ()=>{
      //...
    }

   },[state])
   ```
  - 'before mount`
  ```useLayoutEffect(,)```
