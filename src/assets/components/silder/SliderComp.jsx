import {useState, useEffect} from 'react'
import Slider from '@mui/material/Slider'
function SliderComp (props) {

    const [value, setValue] = useState(props.value);
    useEffect(() => {
        setValue(props.value)
    }, [props.value])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onChange(newValue);
    }

    return (
        <>
            <h3>{props.labelForSlider} ({props.symbol})</h3>
            <Slider 
            value={value} 
            aria-label={props.labelForSlider}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={props.step} 
            min={props.min}
            max={props.max}
            />
        </>
    )
}

export default SliderComp