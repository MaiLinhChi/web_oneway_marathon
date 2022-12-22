import React from 'react';

import Table from '@/components/Table';

import { TTournamentRewardProps } from './TournamentReward.types.d';
import './TournamentReward.scss';

const TournamentReward: React.FC<TTournamentRewardProps> = ({ title, color }) => {
  const columns = [
    {
      key: 'tournament',
      dataIndex: 'tournament',
      title: '',
      render: (_: string, __: any, index: number): string => `42 km ${index % 2 !== 0 ? 'Nam' : 'Nữ'}`,
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'prize1',
      dataIndex: 'prize1',
      title: 'Hạng Nhất',
      render: (): string => `8.000.000 đ`,
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'prize2',
      dataIndex: 'prize2',
      title: 'Hạng Nhì',
      render: (): string => `4.600.000 đ`,
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'prize3',
      dataIndex: 'prize3',
      title: 'Hạng Ba',
      render: (): string => `3.500.000 đ`,
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'prize4',
      dataIndex: 'prize4',
      title: 'Hạng Tư',
      render: (): string => `2.400.000 đ`,
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
  ];

  return (
    <div className="TournamentReward">
      <div className="container">
        <div className="TournamentReward-wrapper">
          <h2 className="TournamentReward-title">
            Giải thưởng <span style={{ color }}>{title}</span>
          </h2>
        </div>

        <div className="TournamentReward-table">
          <Table columns={columns} dataSources={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </div>
      </div>
    </div>
  );
};

export default TournamentReward;
