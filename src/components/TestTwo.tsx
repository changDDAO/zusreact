import BearCounterState from "../states/BearCounterState";
import React from "react";

function TestTwo() {
    const {bears} = BearCounterState();
    return(
        <div>
            <h1>{bears}</h1>
        </div>
    )
}
export default TestTwo;