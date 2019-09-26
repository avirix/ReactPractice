import React from "react";

class SimpleTimePicker extends React.Component {
    state = {
        hours: "23",
        minutes: "50"
    };

    onTextChange = (e: any) => {
        let time = e.target.value.split(':');
        console.log(e.target.value);
        const state = this.state;
        state.hours = time[0];
        state.minutes = time[1];
        this.setState(state);
    }

    onHoursChange = (e: any) => {
        const state = this.state;
        state.hours = e.currentTarget.value;
        if (state.hours.length === 1) state.hours = "0" + state.hours;
        this.setState(state);
    };

    onMinutesChange = (e: any) => {
        const state = this.state;
        state.minutes = e.currentTarget.value;
        if (state.minutes.length === 1) state.minutes = "0" + state.minutes;
        this.setState(state);
    };

    render() {
        return (
            <div className="col-12 col-md-6">
                <div className="mb-2">
                    <input type="time" className="form-control"
                        value={this.state.hours + ':' + this.state.minutes}
                        onChange={(e) => this.onTextChange(e)} />
                </div>
                <h1>
                    {this.state.hours + ':' + this.state.minutes}
                </h1>
                <div>
                    <label>Hour: {this.state.hours}</label>
                    <input type="range" min="0" max="23" step="1"
                        className="form-control-range"
                        value={this.state.hours}
                        onChange={(e) => this.onHoursChange(e)} />
                    <label>Minutes: {this.state.minutes}</label>
                    <input type="range" min="0" max="59" step="1"
                        className="form-control-range"
                        value={this.state.minutes}
                        onChange={(e) => this.onMinutesChange(e)} />
                </div>
            </div>
        )
    }
}

export default SimpleTimePicker;