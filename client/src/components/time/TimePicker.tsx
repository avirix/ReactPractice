import React from "react";

class TimePicker extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group mb-2">
                        <input type="time" className="form-control" min="09:00" max="18:00" required />
                    </div>

                    <div className="form-group">
                        <label>Hour</label>
                        <input type="range" className="form-control-range" />
                        <label>Minutes</label>
                        <input type="range" className="form-control-range" />
                    </div>
                </form>
            </div>
        )
    }
}

export default TimePicker;