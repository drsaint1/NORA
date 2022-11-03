import React, { Children, useMemo } from 'react';
import ConvertForm from '../components/ConvertForm';
import { Row, Col } from 'antd';
import {
  DEFAULT_MARKET,
  getTradePageUrl,
  MarketProvider,
} from '../utils/markets';
import { useLocalStorageState } from '../utils/utils';
import { Connection } from '@solana/web3.js';
import { LOGO_WHITE } from 'assets';
import { PRIMARY_PINK } from 'consts/colors.consts';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

const DashboardWrapper = styled.div({
  marginTop: '40px',
  '.dash-title': {
    textAlign: 'center',
    h1: {
      fontWeight: 700,
      fontSize: '60px',

      img: {
        width: '300px',
      },
    },
  },

  button: {
    cursor: 'pointer',
  },

  '.dash-body': {
    gap: '20px',
    display: 'flex',
    justifyContent: 'center',
    button: {
      color: 'white',
      fontSize: '24px',
      fontWeight: 700,
      padding: '20px 48px',
      lineHeight: '32px',
      borderRadius: '12px',
      background: PRIMARY_PINK,
    },

    '.btn-sec': {
      border: `3px solid ${PRIMARY_PINK}`,
      background: 'none',
      cursor: 'pointer',
    },
  },
});

export default function DashboardPage() {
  const history = useNavigate();
  const location = useLocation();

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <DashboardWrapper>
      <div className="dash-title">
        <h1>
          <div>Introducing</div> <img src={LOGO_WHITE} />
        </h1>
      </div>
      <div className="dash-body">
        <button onClick={() => history(tradePageUrl)}>DEX Trading</button>
        <a href={'/#/swap'} target={'_self'} rel="noopener noreferrer">
          <button className="btn-sec">Nora Swap</button>
        </a>
      </div>
    </DashboardWrapper>
  );
}
