import { useEffect, useState } from "react";
import axios from "axios";
function useDebounce(input, value) {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => setDebouncedValue(input), value);
    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [input]);
  return debouncedValue;
}
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState([]);
  function getData() {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }

  useEffect(() => {
    const value = setInterval(() => {
      getData();
    }, n * 1000);
    getData();
    return () => {
      clearInterval(value);
    };
  }, [n]);
  return {
    todos,
    loading,
  };
}
const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

function useIsOnline() {
  // const [online, setonline] = useState(false);
  // if (window.navigator.online === true) {
  //   setonLine(true);
  // }
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
}
function App() {
  // const { todos, loading } = useTodos(5);
  const isOnline = useIsOnline(5);
  const mousePointer = useMousePointer();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return (
    <>
      Timer is at {count}
      Your mouse position is {mousePointer.x} {mousePointer.y}
      {isOnline ? "You are online yay!" : "You are not online"}
      {/* {loading ? (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <Track todo={todo} />
            </div>
          ))}
        </>
      ) : (
        <div> Loading...</div>
      )} */}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.error("component mounted");
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted");
//     };
//   }, []);
//   return <div>from inside my component</div>;
//   // Render UI
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }
export default App;
