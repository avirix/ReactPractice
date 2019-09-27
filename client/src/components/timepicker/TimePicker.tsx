import React from "react";
import TimePickerRange from "./TimePickerRange";
import TimePickerClock from "./TimePickerClock";

interface TimePickerProps {
    time: string
}

interface TimePickerState {
    hours: string,
    minutes: string
}

class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
    constructor(props: TimePickerProps) {
        super(props);
        const time = props.time ? "12:50" : props.time;
        const splittedTime = time
            .split(':')
            .map(e => e.length === 1 ? "0" + e : e);
        this.state = {
            hours: splittedTime[0],
            minutes: splittedTime[1]
        }
    }

    onHoursChange = (newHours: string) => {
        let { hours } = this.state;
        if (newHours != hours) {
            hours = newHours.length === 1
                ? "0" + newHours
                : newHours;
            this.setState({ hours: hours });
        }
    };

    onMinutesChange = (newMinutes: string) => {
        let { minutes } = this.state;
        if (newMinutes != minutes) {
            minutes = newMinutes.length === 1
                ? "0" + newMinutes
                : newMinutes;
            this.setState({ minutes: minutes });
        }
    };

    onTimeChange = (newTime: string) => {
        const splittedTime = newTime
            .split(':')
            .map(e => e.length === 1 ? "0" + e : e);
        this.onHoursChange(splittedTime[0]);
        this.onMinutesChange(splittedTime[1]);
    }

    render() {
        return (
            <div className="d-inline-block col-sm-12 col-md-6">
                <TimePickerClock
                    minute={this.state.minutes}
                    hours={this.state.hours}
                    onChange={this.onTimeChange} />
                <h1>{this.state.hours}:{this.state.minutes}</h1>
                <TimePickerRange
                    text={"Hours: " + this.state.hours}
                    value={this.state.hours}
                    min={0}
                    max={23}
                    onChange={this.onHoursChange} />
                <TimePickerRange
                    text={"Minutes: " + this.state.minutes}
                    value={this.state.minutes}
                    min={0}
                    max={59}
                    onChange={this.onMinutesChange} />
            </div>
        );
    }
}

export default TimePicker;