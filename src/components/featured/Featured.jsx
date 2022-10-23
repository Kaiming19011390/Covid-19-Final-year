import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Component } from "react";

const data = [
  { name: 'Europe', value: 256938830},
  { name: 'America', value: 178906402},
  { name: 'Western Pacific', value: 91117545},
  { name: 'South-East Asia', value: 60353291},
  { name: 'Eastern Mediterranean', value: 23115075},
  { name: 'Africa', value: 9338726},
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="blue">{`Total confirmed: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="red">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};




class Featured extends Component {
  state = {
    activeIndex: 0,
  };
  
  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };
 render(){
  return <ResponsiveContainer width={800} height={450} >
    
  <PieChart width={600} height={1000}>
    <Pie
      activeIndex={this.state.activeIndex}
      activeShape={renderActiveShape}
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={100}
      outerRadius={150}
      fill="#1ABC9C"
      stroke="#FFF"
      dataKey="value"
      onMouseEnter={this.onPieEnter}
    />
  </PieChart>
</ResponsiveContainer>
;}

 }

 
    

    
    
  

    


export default Featured;
