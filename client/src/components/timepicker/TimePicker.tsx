import React from "react";
import TimePickerRange from "./TimePickerRange";
import TimePickerClock from "./TimePickerClock";

class TimePicker extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-6">
                <TimePickerClock />
                <h1>17:36</h1>
                <TimePickerRange />
                <TimePickerRange />
            </div>
        );
    }
}

export default TimePicker;