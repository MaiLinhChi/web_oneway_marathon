import React from 'react';

import { TTournamentEventProps } from './TournamentEvent.types.d';
import './TournamentEvent.scss';

const TournamentEvent: React.FC<TTournamentEventProps> = ({ color, data, id }) => {
  const dataTimeline = [
    {
      value: '08:00 - 10:00',
      label: 'VĐV nhận BIB và Race Kit',
    },
    {
      value: '10:00 - 15:00',
      label: 'Thời gian hoạt động của các gian hàng tại EXPO',
    },
    {
      value: '9:00',
      label: 'Khai mạc giải chạy',
    },
    {
      value: '12:00',
      label: 'Mở quầy gửi đồ các cự ly',
    },
    {
      value: '13:30',
      label: 'Chào mừng các VĐV và khởi động cự ly 21KM Phổ biến thông tin đường chạy',
    },
    {
      value: '14:00',
      label: 'Cự ly 21KM xuất phát',
    },
    {
      value: '14:15',
      label: 'Cự ly 10KM khởi động',
    },
    {
      value: '14:30',
      label: 'Cự ly 10KM xuất phát',
    },
    {
      value: '14:45',
      label: 'Cự ly 5KM khởi động',
    },
    {
      value: '15:00',
      label: 'Cự ly 5KM xuất phát',
    },
    {
      value: '16:30',
      label: 'Đóng đường đua cự ly 5KM và 10KM',
    },
    {
      value: '18:00',
      label: 'Đóng đường đua cự ly 21KM',
    },
    {
      value: '16:30',
      label: 'Trao giải các cự ly và bế mạc',
    },
    {
      value: '19:00 - 22:30',
      label: 'OneWay Marathon Festival',
    },
  ];

  return (
    <div className="TournamentEvent" id={id}>
      <div className="container">
        <div className="TournamentEvent-wrapper">
          <h2 className="TournamentEvent-title">
            Lịch trình
            <span style={{ color }}>sự kiện</span>
          </h2>

          <div className="TournamentEvent-main">
            {data.map((item: any, index: any) => (
              <div key={index} className="TournamentEvent-main-item flex">
                <div className="TournamentEvent-main-item-day">
                  <div className="TournamentEvent-main-item-day-title">{item.title}</div>
                  <div className="TournamentEvent-main-item-day-description">{item.description}</div>
                </div>
                <div className="TournamentEvent-main-item-timeline">
                  {item.detail.map((detail: any, key: any) => (
                    <div className="TournamentEvent-main-item-timeline-item flex" key={key}>
                      <div className="TournamentEvent-main-item-timeline-item-title">{detail.time}</div>
                      <div className="TournamentEvent-main-item-timeline-item-circle-wrapper">
                        <div className="TournamentEvent-main-item-timeline-item-circle" />
                        <div className="TournamentEvent-main-item-timeline-item-line" />
                      </div>
                      <div className="TournamentEvent-main-item-timeline-item-description">{detail.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentEvent;
