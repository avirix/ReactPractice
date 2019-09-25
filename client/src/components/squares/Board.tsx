import React from 'react';
import Square from './Square';
import { SquareProps } from './Square';

interface BoardState {
    squares: SquareProps[],
    lastCoords: MousePosition
}

export interface MousePosition {
    X: number;
    Y: number;
}

class Board extends React.Component<{}, BoardState>{
    constructor(props: any) {
        super(props);
        this.btnTapped = this
            .btnTapped
            .bind(this);
    }
    btnTapped() {
        console.log('tapped');
    }

    state: BoardState = {
        squares: [
            {
                xPos: 125,
                yPos: 125,
                name: "square1",
                color: "red",
                isActive: false
            },
            {
                xPos: 250,
                yPos: 250,
                name: "square2",
                color: "green",
                isActive: false
            },
            {
                xPos: 0,
                yPos: 0,
                name: "square3",
                color: "blue",
                isActive: false
            }
        ],
        lastCoords: {
            X: 0,
            Y: 0
        }
    };

    createSquares = () => this.state.squares.map(e =>
        <React.Fragment>
            <Square key={e.name} xPos={e.xPos} yPos={e.yPos} name={e.name}
                color={e.color} isActive={e.isActive} />
        </React.Fragment>);

    onDown = (e: any) => {
        const squares: SquareProps[] = this.state.squares.slice();
        const mouse: MousePosition = 
        {
            X: e.clientX - e.currentTarget.offsetLeft,
            Y: e.clientY - e.currentTarget.offsetTop
        };
        squares.forEach(el => {
            el.isActive = !el.isActive &&
                mouse.X >= el.xPos &&
                mouse.X <= el.xPos + 108 &&
                mouse.Y >= el.yPos &&
                mouse.Y <= el.yPos + 108;
        });
        this.setState({
            squares: squares,
            lastCoords: mouse
        } as BoardState)
    }

    onMove = (e: any) => {
        const squares: SquareProps[] = this.state.squares.slice();
        const mouse: MousePosition =
        {
            X: e.clientX - e.currentTarget.offsetLeft,
            Y: e.clientY - e.currentTarget.offsetTop
        };
        //console.log("x:" + e.clientX + " - y:" + e.clientY);
        squares.forEach(el => {
            if (el.isActive) {
                const newXPos = el.xPos + mouse.X - this.state.lastCoords.X;
                const newYPos = el.yPos + mouse.Y - this.state.lastCoords.Y;
                if (newXPos >= 0 && newYPos >= 0) {
                    el.xPos = newXPos;
                    el.yPos = newYPos;
                }
            }
        });
        this.setState({
            squares: squares,
            lastCoords: mouse
        } as BoardState);
    }

    onUp = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        squares.forEach(el => {
            el.isActive = false;
        });
        this.setState({
            squares: squares,
            lastCoords: this.state.lastCoords
        } as BoardState);
    }

    render() {
        return (
            <div className={"board"}
                onMouseDown={this.onDown}
                onMouseMove={this.onMove}
                onMouseUp={this.onUp} >
                {this.createSquares()}
            </div>
        );
    }
}

export default Board;