import React from "react";
import { Book } from "./Book";
import { Preloader } from "./Preloader";

import "./styles.css";

const App = ({ isLoading }) => {
    return isLoading ? (
        <Preloader/>
    ) : (
        <div className="app">
            <header className="header">
                <h1>Book</h1>
            </header>
            <main>
                <Book name="React for beginners" years="2019" price="1200"/>
            </main>
        </div>
    );
}

export default App;