import React from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';

import { TTournamentAchievementsProps } from './TournamentAchievements.types.d';
import './TournamentAchievements.scss';

const TournamentAchievements: React.FC<TTournamentAchievementsProps> = ({ color, title }) => {
  const columns = [
    {
      key: 'rank',
      dataIndex: 'rank',
      title: 'Hạng',
      render: (_: string, __: any, index: number): string => `${index + 1}`,
    },
    {
      key: 'bib',
      dataIndex: 'bib',
      title: 'BIB',
      render: (): string => `349457`,
    },
    {
      key: 'fullName',
      dataIndex: 'fullName',
      title: 'Họ và tên',
      render: (): string => `Hoàng Hữu Hanh`,
    },
    {
      key: 'gender',
      dataIndex: 'gender',
      title: 'Giới tính',
      render: (): string => `Nam`,
    },
    {
      key: 'cp1',
      dataIndex: 'cp1',
      title: 'CP1',
      render: (): string => `10:24`,
    },
    {
      key: 'chiptime',
      dataIndex: 'chiptime',
      title: 'Chiptime',
      render: (): string => `1:18:56`,
    },
    {
      key: 'guntime',
      dataIndex: 'guntime',
      title: 'Guntime',
      render: (): string => `1:19:01`,
    },
    {
      key: 'pace',
      dataIndex: 'pace',
      title: 'Pace',
      render: (): string => `3:44 min/km`,
    },
    {
      key: 'gap',
      dataIndex: 'gap',
      title: 'Gap',
      render: (): string => `------`,
    },
  ];

  return (
    <div className="TournamentAchievements">
      <div className="container">
        <div className="TournamentAchievements-wrapper">
          <div className="TournamentAchievements-header flex items-center justify-between">
            <h2 className="TournamentAchievements-title">
              Thành tích
              <span style={{ color }}>{title}</span>
            </h2>
            <div className="TournamentAchievements-search flex items-center">
              <Input placeholder="Tìm kiếm" />
              <Button title="Tìm" type="primary" />
            </div>
          </div>

          <div className="TournamentAchievements-table">
            <Table columns={columns} dataSources={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </div>

          <div className="TournamentAchievements-pagination flex justify-center">
            <Pagination page={1} pageSize={10} total={103} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentAchievements;
