import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";




const SuveyProgress = ({maxStages, stage, setStage}) => (
    <ProgressBar
        percent={100/maxStages * (stage + 1)}
        filledBackground="#333"
        /*linear-gradient(to right, rgb(165, 165, 165), #333*/
    >

        {/* Dynamically create number of stages based on max num stages */}
        {[...Array(maxStages)].map((e, i) => (
            <Step
                transition="scale" 
                key={i}>
                {({ accomplished, index }) => (
                    <div
                    onClick={() => setStage(i)} //Jump to selected stage
                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                    {index + 1}
                    </div>
                )}
            </Step> 
            ))
        }
    </ProgressBar>
)

export default SuveyProgress


