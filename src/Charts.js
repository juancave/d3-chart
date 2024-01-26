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

const data2 = [
  { name: "Colombia", value: "38" },
  { name: "Ecuador", value: "37" },
  { name: "Venezuela", value: "36" },
  { name: "Chile", value: "29" },
  { name: "Perú", value: "24" },
  { name: "Bolivia", value: "25" },
];

const defaults = {
  width: 460,
  height: 400,
}

const Charts = () => {
  return (
    <div className="Charts">
      <Barchart
        barColor="#5f0f40"
        data={data}
        height={defaults.height}
        id="bar1"
        title="Chart 1"
        width={defaults.width}
      />
      <hr/>
      <Barchart
        barColor="#29437F"
        data={data}
        height={defaults.height}
        title="Chart 2 - Different bar color"
        width={defaults.width}
      />
      <hr/>
      <Barchart
        barColor="#ffac2a"
        data={data2}
        height={defaults.height}
        id="bar3"
        title="Chart 3 - Temperature"
        width={defaults.width}
      />
    </div>
  );
};

export default Charts;
