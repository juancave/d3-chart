import Barchart from './Barchart';

const data = [
  { name: "United States", value: "12394" },
  { name: "Russia", value: "6148" },
  { name: "Germany (FRG)", value: "1653" },
  { name: "France", value: "2162" },
  { name: "United Kingdom", value: "1214" },
  { name: "China", value: "1131" },
  { name: "Spain", value: "814" },
  { name: "Netherlands", value: "1167" },
  { name: "Italy", value: "660" },
  { name: "Israel", value: "1263" },
];

const Charts = () => {
  return (
    <div className="Charts">
      <Barchart barColor="#5f0f40" data={data} height="400" id="bar1" width="460" />
      <hr/>
      <Barchart barColor="#29437F" data={data} height="400" id="bar2" width="460" />
    </div>
  );
};

export default Charts;
