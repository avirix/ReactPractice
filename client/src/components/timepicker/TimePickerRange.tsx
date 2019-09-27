import React from "react";

interface TimePickerRangeProps {
    value: string,
    min: number,
    max: number,
    text?: string,
    onChange(newTime: string): void
}

class TimePickerRange extends React.Component<TimePickerRangeProps> {
    render() {
        return (
            <div>
                <label>{this.props.text}</label>
                <input type="range"
                    className="form-control-range"
                    min={this.props.min}
                    max={this.props.max}
                    step="1"
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e.target.value)} />
            </div>
        );
    }
}

export default TimePickerRange;