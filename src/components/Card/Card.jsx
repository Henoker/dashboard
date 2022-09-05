import React, {useState} from 'react';
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes} from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

const Card = (props) => {
    const [expanded, setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
        {expanded? 
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  )
}
// Compact Card Structure
function CompactCard ({param, setExpanded}) {
    const Png = param.png;
    return (
        <motion.div className="ComapctCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
          }}
        layoutId='expandableCard'
        onClick={setExpanded}
        >
            <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
            />
            <span>{param.title}</span>
      
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 2 weeks</span>


            </div>
        </motion.div>

    ) 

}
// Expanded Card 
function ExpandedCard({param, setExpanded}){
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            datalabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/mm/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00:000Z",
                    "2018-09-19T01:30:00:000Z",
                    "2018-09-19T02:30:00:000Z",
                    "2018-09-19T03:30:00:000Z",
                    "2018-09-19T04:30:00:000Z",
                    "2018-09-19T05:30:00:000Z",
                    "2018-09-19T06:30:00:000Z",
                ]
            }
        },
    }
    return(
        <motion.div className="ExpandedCard"
        style = {{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        layoutId='expandableCard'
        >
        <div style={{ alignSelf: "flex-end", cursor:"pointer", color: "white"}}>
            <UilTimes onClick={setExpanded}
            
            />
        </div>
        <span>
            {param.title}
        </span>
        <div className="chartContainer">
            <Chart series={param.series} type="area" options={data.options}/>
        </div>
        <span>Last 2 weeks</span>
        </motion.div>
    )
}
export default Card