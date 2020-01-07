import React, { Component } from 'react'
import CanvasDraw from 'react-canvas-draw';


export default class Drawing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 400,
            height: 400,
            brushRadius: 10,
            lazyRadius: 0,
            color: 'blue',
        }

        this.changeBrushSize = this.changeBrushSize.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
        this.undoSection = this.undoSection.bind(this);
    }

    undoSection = () => {
        this.saveableCanvas.undo();
    }
    changeBrushSize = (newSize) => {
        this.setState({ brushRadius: 20 })
    }
    clearCanvas = () => {
        this.saveableCanvas.clear();
    }
    changeColor = (newColor) => {
        this.setState({ color: 'red' });
    }

    render() {
        return (
            <React.Fragment>
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                ></CanvasDraw>

                <button onClick={this.changeColor}>Change to Red</button>
                <button onClick={this.clearCanvas}>Clear</button>
                <button onClick={this.changeBrushSize}>Change Brush Size</button>
                <button onClick={this.undoSection}>Undo</button>
            </React.Fragment>
        )
    }
}
