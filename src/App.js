import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
          <Body className='no-scrollbar w-screen'/>
    </Provider>
  );
}

export default App;
