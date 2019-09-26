import React from "react";

class TimePickerRange extends React.Component {
    render() {
        return (
            <div>
                <label>Time picker range</label>
                <input type="range" min="0" max="23" step="1"
                    className="form-control-range" />
            </div>
        );
    }
}

export default TimePickerRange;