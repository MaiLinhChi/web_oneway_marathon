import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';

import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import TournamentMap from '@/containers/TournamentMap';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button from '@/components/Button';

import './TournamentDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { detailRaceAction, getGroupsAction, getOrdersAction, getTicketsAction } from '@/redux/actions';
import { Link, useParams } from '@reach/router';
import { Paths } from '../routers';
import { copyText, truncateStringByWords } from '@/utils/functions';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import TabRectangle, { ETabRectangleStyleType } from '@/components/TabRectangle';
import { columnsBibIndivitual, columnsBibGroups } from './TournamentDetai.data';

const TournamentDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSizeBib, setPageSizeBib] = useState(10);
  const [pageIndexBib, setPageIndexBib] = useState(1);
  const groupState = useSelector((state: TRootState) => state.registerGroupReducer.listGroupsResponse);
  const [activeTab, setActiveTab] = useState(groupState?.[0]);
  const raceState = useSelector((state: TRootState) => state.raceReducer.detailRaceResponse);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  const ticketsState = useSelector((state: TRootState) => state.registerReducer.getTicketsResponse);
  const ordersState = useSelector((state: TRootState) => state.ordersReducer.getOrdersResponse);
  const getRaces = useCallback(() => {
    dispatch(detailRaceAction.request({ id }));
  }, [dispatch, id]);
  const getOrdersIndividual = useCallback(() => {
    if (!profileState?.email || !raceState?._id) return;
    const materials = {
      params: {
        email: profileState.email,
        marathonId: raceState._id,
        pageSize,
        pageIndex,
      },
    };
    dispatch(getOrdersAction.request(materials));
  }, [dispatch, profileState?.email, raceState?._id, pageSize, pageIndex]);

  const getBibGroup = useCallback(() => {
    if (!profileState?.email || !raceState?._id) return;
    const params = {
      email: profileState.email,
      marathon: raceState._id,
      pageSize,
      pageIndex,
    };
    dispatch(getTicketsAction.request({ params }));
  }, [dispatch, profileState?.email, raceState?._id, pageSize, pageIndex]);

  const getGroup = useCallback(() => {
    if (!profileState?.email || !raceState?._id) return;
    const params = {
      email: profileState.email,
      marathonId: raceState._id,
    };
    dispatch(getGroupsAction.request({ params }));
  }, [dispatch, profileState?.email, raceState?._id]);

  const getTotalGroup = (tickets: any): string => {
    return tickets?.reduce((accumulator: number, currentValue: any) => accumulator + currentValue?.marathon.price, 0);
  };

  useEffect(() => {
    getRaces();
    getOrdersIndividual();
    getGroup();
    getBibGroup();
  }, [dispatch, getRaces, getOrdersIndividual, getGroup, getBibGroup]);
  return (
    <div className="TournamentDetail">
      <div className="container">
        <div className="TournamentDetail-wrapper">
          <div className="TournamentDetail-banner">
            <img src={ImageHomeBanner1} alt="" />
          </div>

          <div className="TournamentDetail-main">
            <Row gutter={{ xs: 0, lg: 48 }}>
              <Col xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 12 }}>
                <h1 className="TournamentDetail-title">
                  OneWay
                  <span>{raceState?.name}</span>
                </h1>
                <p className="TournamentDetail-description">
                  {truncateStringByWords(raceState?.description, 100)}
                  <Link to={Paths.MarathonDetail(raceState?._id)}>Xem chi tiết giải</Link>
                </p>

                <h2 className="TournamentDetail-subtitle">Thông tin chi tiết</h2>
                <div className="TournamentDetail-table striped race">
                  <table>
                    <tbody>
                      <tr>
                        <td>Ngày đua</td>
                        <td>
                          <strong>{raceState?.startTime}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Địa điểm</td>
                        <td>
                          <strong>{raceState?.location}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Loại hình</td>
                        <td>
                          <strong>{raceState?.type}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Cự ly</td>
                        <td>
                          {raceState?.race?.map((item: any, index: any) => (
                            <strong key={index}>
                              {item.distance}
                              {raceState?.unitRace}
                            </strong>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 12 }}>
                <TournamentMap color={EIconColor.BLUE_RIBBON} data={raceState} noRouteMap={true} height={400} />
              </Col>
            </Row>
            <div>
              <h2 className="TournamentDetail-subtitle">QUẢN LÍ BIB CÁ NHÂN</h2>
              <Table
                columns={columnsBibIndivitual}
                dataSources={ordersState?.data}
                className="TournamentDetail-table"
              />
              <div className="TournamentDetail-pagination flex justify-center">
                <Pagination
                  page={pageIndex}
                  pageSize={pageSize}
                  total={ordersState?.totalRecord}
                  onChange={(item): void => setPageIndex(item)}
                />
              </div>
            </div>
            {ticketsState?.data?.length && (
              <div className="TournamentDetail-section">
                <h2 className="TournamentDetail-subtitle">Thông tin đăng ký Nhóm </h2>
                <div className="TournamentDetail-tab">
                  <TabRectangle
                    value={activeTab}
                    onChange={setActiveTab}
                    options={groupState}
                    group
                    styleType={ETabRectangleStyleType.GROUP}
                  />
                </div>
                <div className="TournamentDetail-card">
                  <div className="TournamentDetail-card-edit flex justify-between items-center">
                    <h3 className="TournamentDetail-card-title">Tên nhóm: {activeTab?.groupName}</h3>
                    <Button title="Chỉnh sửa" type="ghost" />
                  </div>
                  <div className="TournamentDetail-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>Họ và tên trưởng nhóm</td>
                          <td style={{ width: '100%' }}>
                            <strong>{activeTab?.membership?.[0].fullName}</strong>
                          </td>
                        </tr>

                        <tr>
                          <td>Số điện thoại</td>
                          <td style={{ width: '100%' }}>
                            <strong>{activeTab?.membership?.[0].phone}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td style={{ width: '100%' }}>
                            <strong>{activeTab?.membership?.[0].email}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <h3 className="TournamentDetail-card-title">Link đăng ký nhóm</h3>
                <div className="TournamentDetail-card-link">
                  <div className="TournamentDetail-card-link-url flex">
                    <Input readOnly value={activeTab?.linkJoin} />
                    <Button title="Sao chép" type="primary" onClick={(): void => copyText(activeTab?.linkJoin)} />
                  </div>
                  <div className="TournamentDetail-card-link-description">
                    <p>Hướng dẫn: Để đăng ký theo nhóm (từ 2 người) bạn cần làm theo các bước sau:</p>
                    <ul>
                      <li>Bước 1: Chia sẻ “link đăng ký nhóm” bên trên cho bạn bè.</li>
                      <li>Bước 2: Các vận động viên truy cập link và điền thông tin cần thiết.</li>
                      <li>Bước 3: Trưởng nhóm hoàn tất đăng ký và tiến hành thanh toán.</li>
                    </ul>
                  </div>
                </div>
                <h3 className="TournamentDetail-card-title">Thông tin thành viên</h3>
                <div className="TournamentDetail-table">
                  <Table
                    columns={columnsBibGroups}
                    dataSources={ticketsState?.data}
                    className="TournamentDetail-table"
                  />
                  <div className="TournamentDetail-pagination flex justify-center">
                    <Pagination
                      page={pageIndexBib}
                      pageSize={pageSizeBib}
                      total={ticketsState?.totalRecord}
                      onChange={(item): void => setPageIndexBib(item)}
                    />
                  </div>
                </div>

                <div className="TournamentDetail-card-total text-right">
                  Tổng cộng: <strong>{parseInt(getTotalGroup(ticketsState?.data)).toLocaleString('ES-es')} VNĐ</strong>
                </div>
                <div className="TournamentDetail-card-actions flex items-center justify-between">
                  <Button title="Xoá nhóm" type="text" size="large" />
                  <Button title="Thanh toán" type="primary" size="large" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
