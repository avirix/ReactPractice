import React from "react";

class TimePicker extends React.Component {
    state = {
        hours: 0,
        minutes: 0
    };

    onHoursChange = (e: any) => {
        const state = this.state;
        state.hours = e.currentTarget.value;
        this.setState(state);
    };

    onMinutesChange = (e: any) => {
        const state = this.state;
        state.minutes = e.currentTarget.value;
        this.setState(state);
    };

    render() {
        return (
            <div className="col-12 col-md-6">
                <form>
                    <div className="form-group mb-2">
                        <input type="time" className="form-control"
                            value={this.state.hours + ':' + this.state.minutes} />
                    </div>
                    <h1>{this.state.hours + ':' + this.state.minutes}</h1>
                    <div className="form-group">
                        <label>Hour: {this.state.hours}</label>
                        <input type="range" min="0" max="12" step="1" className="form-control-range"
                            onChange={(e) => this.onHoursChange(e)} />
                        <label>Minutes: {this.state.minutes}</label>
                        <input type="range" min="0" max="59" step="1" className="form-control-range"
                            onChange={(e) => this.onMinutesChange(e)} />
                    </div>
                </form>
            </div>
        )
    }
}

export default TimePicker;