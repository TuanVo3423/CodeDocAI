import { AIBox, AIText } from '@/ui-kit';
import { Box, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import {
  Area,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BoxHeading } from '../../components';

const data = [
  {
    name: '4 Aug',
    scope: 20,
    started: 30,
    completed: 5,
  },
  {
    name: '5 Aug',
    scope: 90,
    started: 60,
    completed: 40,
  },
  {
    name: '6 Aug',
    scope: 50,
    started: 65,
    completed: 15,
  },
  {
    name: '7 Aug',
    scope: 70,
    started: 50,
    completed: 40,
  },
  {
    name: '20 Oct',
    scope: 60,
    started: 70,
    completed: 30,
  },
];

const RenderLegend = (props: any) => {
  const { payload } = props;
  const { t } = useTranslation();

  return (
    <UnorderedList
      display="flex"
      gap={{ base: 2, xxxl: 7.5 }}
      listStyleType="none"
      m="0"
    >
      {payload.map((entry: any, index: number) => (
        <ListItem
          key={`item-${index}`}
          m="0"
          display="flex"
          alignItems="center"
          gap="6px"
          color="text.300"
          fontSize="sm"
        >
          <Box w="8px" h="8px" borderRadius="full" bg={entry.color} />
          {t(entry.value)}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;
  const { t } = useTranslation();

  if (active && payload && payload.length) {
    return (
      <Stack bg="text.500" p="6px">
        <AIText>{label}</AIText>
        {payload.map((item: any, idx: number) => (
          <AIText key={idx} fontSize="sm" color={item.color}>{`${t(
            item.name
          )}: ${item.value}%`}</AIText>
        ))}
      </Stack>
    );
  }

  return null;
};

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload } = props;

  if (data?.[data?.length - 1]?.name === payload.name) {
    return (
      <svg
        x={cx - 5}
        y={cy - 5}
        width={10}
        height={10}
        fill={stroke}
        viewBox="0 0 5 7"
      >
        <ellipse cx="2.5" cy="3.55416" rx="2.5" ry="2.85494" />
      </svg>
    );
  }
  return null;
};

const CustomizedAxisTick = (props: any) => {
  const { x, y, index, payload } = props;
  if (index === 0 || index === data.length - 1) {
    return (
      <g transform={`translate(${x + 20},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#52525B">
          {payload.value}
        </text>
      </g>
    );
  }
  return null;
};

// eslint-disable-next-line react/display-name
const Chart = memo(() => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 0, left: 5, right: 5, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5781FF" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#5781FF" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tick={<CustomizedAxisTick />}
          interval="preserveStartEnd"
          axisLine={false}
        />
        <YAxis hide />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            outline: '1px solid',
            outlineColor: '#5F5D69',
            borderRadius: '6px',
          }}
        />
        <Legend
          verticalAlign="top"
          align="left"
          height={20}
          margin={{ left: 0 }}
          content={<RenderLegend />}
        />
        <Line
          type="monotone"
          dataKey="scope"
          stroke="#DFCEFD"
          dot={<CustomizedDot />}
        />
        <Line
          type="monotone"
          dataKey="started"
          stroke="#FFE17C"
          dot={<CustomizedDot />}
        />
        <Area
          type="monotone"
          dataKey="completed"
          stroke="#5781FF"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={<CustomizedDot />}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
});

export const ProjectBoards = () => {
  return (
    <AIBox h="100%">
      <BoxHeading title="project_boards" isBeta />

      <Chart />
    </AIBox>
  );
};
