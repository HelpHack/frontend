import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

import { Provider } from "react-redux";

import { store } from "src/store";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation />
      </ApplicationProvider>
    </Provider>
  );
}
