import React from "react";
import TimePicker from "./TimePicker";

class TimePickerContainer extends React.Component {
    render() {
        return (
            <div className="col-12">
                <TimePicker time={"08:10"}/>
                <TimePicker time={"16:28"}/>
            </div>
        );
    }
}

export default TimePickerContainer;