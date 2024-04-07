import React from "react";
import something from './../components/something.js'

export default class PreviewComp extends React.Component {
    render() {
        return (
            <>
                <p>Value: {something.test1}</p>
                <p>Value: {something.test2}</p>
            </>
        );
    }
}
