import React, { ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';

import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import TournamentMap from '@/containers/TournamentMap';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DeleteIcon from '@/components/Icon/Delete';
import Input from '@/components/Input';
import Button from '@/components/Button';

import './TournamentDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { addOrderAction, detailRaceAction, updateOrderAction } from '@/redux/actions';
import { Link, navigate, useParams } from '@reach/router';
import { Paths } from '../routers';
import { copyText, showNotification, truncateStringByWords } from '@/utils/functions';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import TabRectangle, { ETabRectangleStyleType } from '@/components/TabRectangle';
import { columnsBibGroups, columnsBibIndivitual } from './TournamentDetai.data';
import Modal from '@/components/Modal';
import AuthHelpers from '@/services/helpers';
import { ETypeNotification } from '@/common/enums';
import { detailRace, getOrders } from '@/services/api';
import { EKeyTabTournamentRegisterPage } from '../TournamentRegisterPage/TournamentRegisterPage.enums';
import { deleteRunnerGroup, getGroups, getTickets } from '@/services/registers';
import { deleteGroup } from '@/services/registers/register-group/delete-group';

const TournamentDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const atk = AuthHelpers.getAccessToken();
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSizeBib, setPageSizeBib] = useState(10);
  const [pageIndexBib, setPageIndexBib] = useState(1);
  const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
  const [openDeleteMember, setOpenDeleteMember] = useState(false);
  const [groupState, setGroupState] = useState<any>([]);
  const [isLeader, setIsLeader] = useState(false);
  const [total, setTotal] = useState('0');
  const [loadingTabel, setLoadingTabel] = useState(true);
  const [orderGroup, setOrderGroup] = useState<any>({});
  const [ordersState, setOrdersState] = useState<any>({});
  const [ticketsState, setTicketsState] = useState<any>({});
  const [activeTab, setActiveTab] = useState(groupState?.[0]);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  const updateTicketsState = useSelector((state: TRootState) => state.registerReducer.registerTicketResponse);
  const raceState = useSelector((state: TRootState) => state.raceReducer.detailRaceResponse);
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const getRaces = useCallback(async () => {
    dispatch(detailRaceAction.request({ id }));
  }, [dispatch, id]);
  const getOrdersIndividual = useCallback(async () => {
    if (!profileState?.email || !raceState?._id) return;
    const materials = {
      params: {
        email: profileState.email,
        marathonId: raceState._id,
        type: 'individual',
        pageSize,
        pageIndex,
      },
    };
    try {
      const res = await getOrders(materials);
      setOrdersState(res);
    } catch (error: any) {
      showNotification(ETypeNotification.ERROR, error.message);
    }
  }, [profileState?.email, raceState?._id, pageSize, pageIndex]);
  const getBibGroup = useCallback(async () => {
    if (!profileState?.email || !raceState?._id) return;
    setLoadingTabel(true);
    const params = {
      groupId: activeTab?._id,
      pageSize: pageSizeBib,
      pageIndex: pageIndexBib,
    };
    try {
      const res = await getTickets({ params });
      setTicketsState(res);
      setLoadingTabel(false);
    } catch (error: any) {
      setLoadingTabel(false);
      showNotification(ETypeNotification.ERROR, error.message);
    }
  }, [profileState?.email, raceState?._id, activeTab, pageIndexBib, pageSizeBib]);
  const checkRuleGroup = useCallback(() => {
    if (!profileState?.email || !activeTab?.membership[0]?.email) {
      return;
    }
    setIsLeader(activeTab?.membership[0]?.email === profileState?.email);
  }, [profileState?.email, activeTab?.membership]);
  const getGroup = useCallback(async () => {
    if (!profileState?.email || !raceState?._id) return;
    const params = {
      email: profileState.email,
      marathonId: raceState._id,
    };
    try {
      const res = await getGroups({ params });
      setGroupState(res.data);
    } catch (error: any) {
      showNotification(ETypeNotification.ERROR, error.message);
    }
  }, [profileState?.email, raceState?._id]);
  const getOrderByGroup = useCallback(async () => {
    if (!profileState?.email || !raceState?._id || !activeTab?._id) return;
    const materials = {
      params: {
        email: profileState.email,
        marathonId: raceState._id,
        groupId: activeTab._id,
      },
    };
    const res = await getOrders(materials);
    setOrderGroup(res.data[0]);
  }, [activeTab?._id, profileState?.email, raceState?._id]);
  const handlePaymentGroup = (): void => {
    const productsId = ticketsState?.data?.map((item: any) => item._id);
    const body = {
      email: profileState.email,
      groupId: activeTab._id,
      products: productsId,
      total: total,
      marathonId: id,
    };
    if (orderGroup) {
      dispatch(
        updateOrderAction.request({ id: orderGroup._id, body }, (response): void => handleOrderSuccess(response)),
      );
    } else {
      dispatch(addOrderAction.request({ body }, (response): void => handleOrderSuccess(response)));
    }
  };
  const getTotalGroup = useCallback((tickets: any): void => {
    const totalReducer = tickets?.reduce(
      (accumulator: number, currentValue: any) => accumulator + currentValue?.marathon.price,
      0,
    );
    setTotal(totalReducer);
  }, []);
  const handleOrderSuccess = (response: any): void => {
    navigate(Paths.TournamentPayment(`${response.data?._id}?tab=${EKeyTabTournamentRegisterPage.MULTIPLE}`));
  };
  const canPayOrder = (): ReactNode => {
    const today = new Date().getTime();
    if (
      isLeader &&
      orderGroup?.status !== 'confirmed' &&
      new Date(raceState.startTime).getTime() > today &&
      ticketsState?.data?.length > 0
    ) {
      return (
        <div className="custom-btn payment" onClick={handlePaymentGroup}>
          Thanh toán
        </div>
      );
    }
    return null;
  };
  const handleDeleteMember = async (email: string): Promise<void> => {
    const params = {
      id: activeTab._id,
      body: { email },
      headers: { authorization: `Bearer ${atk}` },
    };
    try {
      await deleteRunnerGroup(params);
      setOpenDeleteMember(false);
      getBibGroup();
    } catch (error: any) {
      showNotification(ETypeNotification.WARNING, error.response.data.message);
      setOpenDeleteMember(false);
    }
  };
  const handleDeleteGroup = async (idGroup: string): Promise<void> => {
    const params = {
      id: idGroup,
      headers: { authorization: `Bearer ${atk}` },
    };
    try {
      setOpenDeleteGroup(false);
      await deleteGroup(params);
      getGroup();
    } catch (error: any) {
      setOpenDeleteGroup(false);
      showNotification(ETypeNotification.ERROR, error.response.data.message);
    }
  };
  useEffect(() => {
    checkRuleGroup();
    getOrderByGroup();
    getTotalGroup(ticketsState?.data);
  }, [activeTab, checkRuleGroup, getOrderByGroup, getTotalGroup, ticketsState?.data]);
  useEffect(() => {
    getBibGroup();
  }, [updateTicketsState, getBibGroup]);
  useEffect(() => {
    getRaces();
    getOrdersIndividual();
    getGroup();
  }, [getGroup, getRaces, getOrdersIndividual]);
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
                  total={ordersState.totalRecord}
                  onChange={(item): void => setPageIndex(item)}
                />
              </div>
            </div>
            {groupState?.length ? (
              <div className="TournamentDetail-section">
                <h2 className="TournamentDetail-subtitle">Thông tin đăng ký nhóm </h2>
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
                    <div className="flex items-center" style={{ gap: 16 }}>
                      <h3 className="TournamentDetail-card-title">Tên nhóm: {activeTab?.groupName}</h3>
                      <div className={`OrderStatus ${orderGroup?.status === 'confirmed' ? 'success' : ''}`}>
                        {orderGroup?.status === 'confirmed' ? 'Đã thanh toán' : 'Chờ thanh toán'}
                      </div>
                    </div>
                    {isLeader && (
                      <Button title="Sửa" type="ghost" backgroundColor="#E6EBF0" iconName={EIconName.Edit} />
                    )}
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
                    columns={columnsBibGroups(
                      openDeleteMember,
                      setOpenDeleteMember,
                      isLeader,
                      handleDeleteMember,
                      orderGroup?.status === 'confirmed',
                    )}
                    dataSources={ticketsState?.data}
                    className="TournamentDetail-table"
                    loading={loadingTabel}
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
                <div
                  className={`TournamentDetail-card-actions flex items-center wrap ${
                    isLeader ? 'justify-between' : 'justify-end'
                  }`}
                  style={{ rowGap: 10, marginTop: 10 }}
                >
                  {!isMobile && isLeader && orderGroup?.status !== 'confirmed' ? (
                    <div className="custom-btn delete" onClick={(): void => setOpenDeleteGroup(true)}>
                      <DeleteIcon className="custom-btn-icon" />
                      Xoá nhóm
                    </div>
                  ) : (
                    <div />
                  )}
                  <div className="flex wrap justify-around" style={{ gap: 10 }}>
                    <div className="flex items-center text-right">
                      <span className="text-total">Tổng cộng:</span>
                      <div className="custom-btn">
                        <strong>{parseInt(total).toLocaleString('ES-es')} VNĐ</strong>
                      </div>
                    </div>
                    <div className="flex justify-around" style={{ gap: 6 }}>
                      {isMobile && isLeader && (
                        <div className="custom-btn delete" onClick={(): void => setOpenDeleteGroup(true)}>
                          <DeleteIcon className="custom-btn-icon" />
                          Xoá nhóm
                        </div>
                      )}
                      {canPayOrder()}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <Modal
              className="Modal"
              visible={openDeleteGroup}
              confirmButton={{ title: 'Có', className: 'Modal-btn-cancel' }}
              cancelButton={{ title: 'Không', className: 'Modal-btn-confirm' }}
              onClose={(): void => setOpenDeleteGroup(false)}
              onSubmit={(): Promise<void> => handleDeleteGroup(activeTab._id)}
            >
              <h1 className="Modal-title">Xoá nhóm?</h1>
              <p className="Modal-description">Mọi thông tin của nhóm này sẽ bị xoá vĩnh viễn khỏi hệ thống</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
