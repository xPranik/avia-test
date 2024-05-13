import { Filter } from "./modules/components/filter";
import { Logo } from "./modules/components/logo";
import { Sort } from "./modules/components/sort";
import { Tickets } from "./modules/components/tickets";

function App() {
  return (
    <div className="page">
      <Logo />
      <div className="page__content">
        <div className="page__sidebar">
          <Filter />
        </div>
        <div className="page__body">
          <Sort />
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
