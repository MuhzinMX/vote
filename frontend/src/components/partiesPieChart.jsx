import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Natiijada Dorashada Urarada - Pie Chart',
    },
  },
};

const data = {
  labels: ['BARWAAQO', 'REJO', 'HORSEED', 'TALO-WADAAG', 'UCID', 'KAAH', 'HILAAC', 'SHACABKA', 'WADDANI', 'KULMIYE'],
  datasets: [
    {
      label: 'Votes',
      data: [900, 850, 900, 800, 750, 650, 2000, 1500, 4000, 5000],
      backgroundColor: [
        'lightgreen',
        'orange',
        'green',
        'skyblue',
        'pink',
        'red',
        'blue',
        'purple',
        'orange',
        'yellow',
      ],
    },
  ],
};

const PartiesPieChart = () => {
  return (
    <div className="w-[100%] h-[100%] bg-white shadow-md p-4">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PartiesPieChart;
