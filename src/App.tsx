import { useState } from "react";
import "./App.css";
import ProfileViewer from "./components/ProfileViewer";
import NpubSearch from "./components/NpubSearch";

const JACKS_NPUB =
  "npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m";

function App() {
  const [npub, setNpub] = useState(JACKS_NPUB);

  const handleSearch = (searchNpub: string) => {
    setNpub(searchNpub);
  };

  return (
    <>
      <h1>Lakers + NOSTR</h1>
      <div className="card">
        <NpubSearch onSearch={handleSearch} />
        <ProfileViewer npub={npub} />
      </div>
    </>
  );
}

export default App;
