import React, { PureComponent } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'A-1',
    pv: 10,
  },
  {
    name: 'A-2',
    pv: 20,
  },
  {
    name: 'A-3',
    pv: 30,
  },
  {
    name: 'A-4',
    pv: 40,
  },
  {
    name: 'A-5',
    pv: 50,
  },
  {
    name: 'A-6',
    pv: 60,
  },
  {
    name: 'A-7',
    pv: 70,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}