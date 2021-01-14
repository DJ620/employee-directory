import React from "react";

const styles = {
    header: {
        backgroundColor: "green",
        color: "turquoise",
        textShadow: "10px 10px 25px black"
    }
};

function Header() {
    return (
        <div className="jumbotron" style={styles.header}>
            <h1 className="display-2 text-center font-weight-bold">Employee Directory</h1>
        </div>
    );
};

export default Header;