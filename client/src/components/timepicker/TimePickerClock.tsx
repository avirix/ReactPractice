import React from "react";

class TimePickerClock extends React.Component {
    render() {
        return (
            <div className=" mb-2">
                <input type="time" className="form-control" />
            </div>
        );
    }
}

export default TimePickerClock;