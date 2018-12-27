import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const SuveyProgress = ({maxStages, stage}) => (
    <ProgressBar
        percent={100/maxStages * (stage)}
        filledBackground="#333"
        /*linear-gradient(to right, rgb(165, 165, 165), #333*/
    > 
        <Step transition="scale">
        {({ accomplished, index }) => (
            <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
            {index + 1}
            </div>
        )}
        </Step>
        <Step transition="scale">
        {({ accomplished, index }) => (
            <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
            {index + 1}
            </div>
        )}
        </Step>
        <Step transition="scale">
        {({ accomplished, index }) => (
            <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
            {index + 1}
            </div>
        )}
        </Step>
    </ProgressBar>
)

export default SuveyProgress


