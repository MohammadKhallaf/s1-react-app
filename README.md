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


## React Router
- 1st level routes should have `""` | `"/"` once
- `{path,Component,children,index?}[]`
- lazy loading


## Rules of Hooks
1- only used inside another (component | hook)


## 22 Mar
### Declarative 
### Migrate from variable ==> react ecosystem <==> global state
### Context
1- create context to collect data
`const ProductsContext = createContext({});`

2- prepare "state" for sharing (inside root app)
`const [products, setProducts] = useState([]);`

3- wrap root element within context

4- inject state in the provider
`<ProductsContext value={{ products }}>`

4- consume shared | global state
`const { products } = useContext(ProductsContext);`


## Performance Optimization

- Memoization ##repeat next session
  - value   --> memo ==> useMemo ()=>{return value} , [ ]
  - function -> callback ==> useCallback ()=>{} , [ ]
- ()=>{} , [ ]
- lazy loading

## Redux Toolkit
- <Provider > @ root component
- folder -> redux store
  - index.ts | store.ts
  - for each slice of data -> one file
    - export reducer from the file
    - export actions if exist
- @ component 
  - useSelector() => reading state
  - useDispatch() => action execution

## Async Thunk

## SWR

## Protected Component | Protected Route ( 2 ways )