import React from "react";

export interface ClockProps {
    minute: string,
    hours: string,
    onChange(newTime: string): void
}

class TimePickerClock extends React.Component<ClockProps> {
    render() {
        return (
            <div className="mb-2 input-group">
                <input type="time" className="form-control"
                    value={this.props.hours + ":" + this.props.minute}
                    onChange={(e) => this.props.onChange(e.target.value)} />
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <img src="/clock.png" className="img-responsive" width="24" height="24"></img>
                    </span>
                </div>
                
            </div>
        );
    }
}

export default TimePickerClock;