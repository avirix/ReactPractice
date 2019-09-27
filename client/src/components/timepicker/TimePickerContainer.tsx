import React from "react";
import TimePicker from "./TimePicker";

class TimePickerContainer extends React.Component {
    render() {
        return (
            <div className="col-12">
                <TimePicker time={"12:50"}/>
                <TimePicker time={"12:50"}/>
            </div>
        );
    }
}

export default TimePickerContainer;