import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles.css";
import CreateArea from "./CreateArea";

function App() {
    return(
        <div>
            <script type="text/javascript" src="notes.js"></script>
            <Header />
            <CreateArea />
            <Note title="Note title" content="Note content" />
            <Footer />
        </div>
    );
}

export default App;