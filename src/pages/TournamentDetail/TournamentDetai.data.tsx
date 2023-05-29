import { ReactElement } from 'react';
import { copyText } from '@/utils/functions';
import CopyIcon from '@/assets/icons/copy.svg';
import Button from '@/components/Button';

export const columnsBibIndivitual = [
  {
    key: 'index',
    dataIndex: 'index',
    title: 'STT',
    render: (_: string, __: any, index: number): string => `${index + 1}`,
  },
  {
    key: 'products',
    dataIndex: 'products',
    title: 'Họ và tên',
    render: (item: any): string => item[0]?.fullName,
  },
  {
    key: 'products',
    dataIndex: 'products',
    title: 'Cự ly',
    render: (item: any): ReactElement => (
      <span>
        {item[0]?.marathon?.distance}
        {item[0]?.marathon?.unit}
      </span>
    ),
  },
  {
    key: 'registerId',
    dataIndex: 'registerId',
    title: 'Mã đăng ký',
    render: (item: string): ReactElement => (
      <div className="WrapperTd">
        {item}
        {item && (
          <p className="WrapperTd-wrapperIcon" onClick={(): void => copyText(item)}>
            <img src={CopyIcon} alt="copy icon" />
          </p>
        )}
      </div>
    ),
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Trạng thái',
    render: (item: string): any => {
      switch (item) {
        case 'pending':
          return (
            <span
              style={{
                background: '#FFDFDF',
                display: 'inline-block',
                padding: '4px 8px',
                border: '1px solid currentColor',
                color: '#FF2E2E',
                borderRadius: '16px',
              }}
            >
              Chưa thanh toán
            </span>
          );
        case 'processing':
          return (
            <span
              style={{
                background: '#FEFFE4',
                display: 'inline-block',
                padding: '4px 8px',
                border: '1px solid currentColor',
                color: '#FFA928',
                borderRadius: '16px',
              }}
            >
              Đang xữ lý
            </span>
          );
        case 'confirmed':
          return (
            <span
              style={{
                background: '#EFFFED',
                display: 'inline-block',
                padding: '4px 8px',
                border: '1px solid currentColor',
                color: '#0FB700',
                borderRadius: '16px',
              }}
            >
              Đã thanh toán
            </span>
          );
        default:
          return null;
      }
    },
  },
];

export const columnsBibGroups = [
  {
    key: 'index',
    dataIndex: 'index',
    title: 'STT',
    render: (_: string, __: any, index: number): string => `${index + 1}`,
  },
  {
    key: 'fullName',
    dataIndex: 'fullName',
    title: 'Họ và tên',
    render: (item: string): string => item,
  },
  {
    key: 'marathon',
    dataIndex: 'marathon',
    title: 'Cự ly',
    render: (item: any): ReactElement => (
      <span>
        {item.distance}
        {item.unit}
      </span>
    ),
  },
  {
    key: 'createdAt',
    dataIndex: 'createdAt',
    title: 'Thời gian đăng ký',
    render: (item: any): ReactElement => <span>{item}</span>,
  },
  {
    key: 'marathon',
    dataIndex: 'marathon',
    title: 'Giá tiền',
    render: (item: any): ReactElement => <span>{parseInt(item.price).toLocaleString('ES-es')}VND</span>,
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: '',
    width: 300,
    render: (item: string): any => {
      return (
        <div className="wrapperAction flex items-center justify-between">
          <Button title="Chỉnh sửa" type="ghost" />
          <Button title="Xoá" type="ghost" />
        </div>
      );
    },
  },
];
