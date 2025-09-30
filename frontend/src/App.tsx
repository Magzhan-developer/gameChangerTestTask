import './_css/index.scss'
import Root from "./_app/Root.tsx";
import {Provider} from "react-redux";
import {store} from "./_helpers/store.ts";

function App() {


  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  )
}

export default App
