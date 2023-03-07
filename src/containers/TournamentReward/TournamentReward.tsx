import React from 'react';

import Table from '@/components/Table';

import { TTournamentRewardProps } from './TournamentReward.types.d';
import './TournamentReward.scss';

const TournamentReward: React.FC<TTournamentRewardProps> = ({ title, color, loading, award }) => {
  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: '',
      render: (row: any, index: number): string => row.name,
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'first',
      dataIndex: 'first',
      title: 'Hạng Nhất',
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'second',
      dataIndex: 'second',
      title: 'Hạng Nhì',
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'third',
      dataIndex: 'third',
      title: 'Hạng Ba',
      onHeaderCell: (): any => {
        return {
          style: { background: color },
        };
      },
    },
    {
      key: 'fourth',
      dataIndex: 'fourth',
      title: 'Hạng Tư',
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
          <Table loading={loading} columns={columns} dataSources={award} />
        </div>
      </div>
    </div>
  );
};

export default TournamentReward;
