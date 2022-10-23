import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Europe',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'America',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Western Pacific',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'South-East Asia',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Eastern Mediterranean',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Africa',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


const Domain = () => {
  return (
    <ResponsiveContainer width={800} height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="bruh" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="bruh" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
  )
}

export default Domain
