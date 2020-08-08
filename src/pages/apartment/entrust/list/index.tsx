import React, { FC, useEffect } from 'react';
import { ConnectProps, connect } from 'umi';
import { Dispatch } from 'redux';
import { listModelState } from '../models/list';
import Emptylist from './components/empty-list';
import AgentCard from './components/card/agent-card';
import ApartmentCard from './components/card/apartment-card';
interface PageProps extends ConnectProps {
  dispatch: Dispatch;
  list: listModelState;
}
const IndexPage: FC<PageProps> = ({ list, dispatch }) => {
  const { data } = list;
  useEffect(() => {
    dispatch({ type: 'list/getList' });
  }, []);
  return (
    <>
      {data && data.length === 0 ? (
        <Emptylist />
      ) : (
        data.map((item, index) => {
          return (
            <div key={index}>
              {item.orderType == 1 ? (
                <ApartmentCard cardInfo={item}></ApartmentCard>
              ) : (
                <AgentCard cardInfo={item}></AgentCard>
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default connect(({ list }: { list: listModelState }) => {
  console.log('connect:', list);
  return {
    list,
  };
})(IndexPage);
