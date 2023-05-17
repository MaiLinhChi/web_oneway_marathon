import React, { useCallback, useEffect, useState } from 'react';

import Button from '@/components/Button';

import { TTournamentSystemProps } from './TournamentSystem.types.d';
import './TournamentSystem.scss';
import { Paths } from '@/pages/routers';
import { getMarathons } from '@/services/api';
import { Link } from '@reach/router';

const TournamentSystem: React.FC<TTournamentSystemProps> = () => {
  const [data, setData] = useState([]);
  const initLimit = 3;
  const [limit, setLimit] = useState(initLimit);
  const [totalRecord, setTotalRecord] = useState(0);
  const getData = useCallback(async () => {
    const requests = {
      params: {
        limit,
        status: 'active',
      },
    };
    const res = await getMarathons({ requests });
    setData(res.data);
    setTotalRecord(res.totalRecord);
  }, [limit]);
  useEffect(() => {
    getData();
  }, [limit, getData]);
  console.log(totalRecord);
  // const getShowMarathonBtn = (): any => {
  //   let btn;
  //   if (totalRecord > limit && limit > initLimit) {
  //     btn = (
  //       <div className="TournamentSystem-btn">
  //         <Button type="primary" onClick={(): void => setLimit(limit + 1)} title="Show more" />
  //         <Button type="primary" onClick={(): void => setLimit(limit - 1)} title="Show less" />
  //       </div>
  //     );
  //   } else if (totalRecord > limit) {
  //     btn = (
  //       <div className="TournamentSystem-btn">
  //         <Button type="primary" onClick={(): void => setLimit(limit + 1)} title="Show more" />;
  //       </div>
  //     );
  //   } else if ((data.length && totalRecord < limit) || limit > initLimit) {
  //     btn = (
  //       <div className="TournamentSystem-btn">
  //         <Button type="primary" onClick={(): void => setLimit(limit - 1)} title="Show less" />;
  //       </div>
  //     );
  //   } else {
  //     btn = null;
  //   }
  //   return btn;
  // };
  return (
    <section className="TournamentSystem" id="hethonggiaidau">
      <div className="container">
        <div className="TournamentSystem-wrapper">
          <h2 className="TournamentSystem-title">
            Hệ Thống
            <span>giải OneWay</span>
          </h2>
        </div>
      </div>

      <div className="TournamentSystem-main">
        {data.map((item: any, index) => (
          <div className="TournamentSystem-item flex items-center" key={index}>
            <div className="TournamentSystem-item-info">
              <h4 className="TournamentSystem-item-title">{item.name}</h4>
              <p className="TournamentSystem-item-description">{item.description}</p>
              <div className="TournamentSystem-item-btn">
                <Link to={Paths.MarathonDetail(item._id)} style={{ color: 'white' }}>
                  <Button type="primary" title="Xem chi tiết" />
                </Link>
              </div>
            </div>
            <div className="TournamentSystem-item-image">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
      {/* {getShowMarathonBtn()} */}
    </section>
  );
};

export default TournamentSystem;
