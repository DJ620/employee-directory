import React from "react";
import {InputGroup, FormControl} from "react-bootstrap";

function Filter(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="filter"
                    list="states"
                    className="form-control"
                    placeholder="See employees from State entered here"
                />
                <datalist id="states">
                    {props.states.map(state => (
                        <option value={state} key={state}></option>
                    ))}
                </datalist>
                <button
                    type="submit"
                    className="btn btn-info"
                    onClick={props.submit}>Filter</button>
            </form>
        </div>
    )
}

export default Filter;