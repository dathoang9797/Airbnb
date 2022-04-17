import React from 'react';
import { CartStatsCSS } from './CardStats.styles';

function CardStats(props) {
  const { statSubtitle, statTitle, StatIconName, statIconColor } = props;
  return (
    <CartStatsCSS.Container>
      <CartStatsCSS.Content>
        <CartStatsCSS.Item>
          <CartStatsCSS.ItemTitle>
            <h1>{statSubtitle}</h1>
            <span>{statTitle}</span>
          </CartStatsCSS.ItemTitle>
          <CartStatsCSS.ItemIcon statIconColor={statIconColor}>
            <div>
              <StatIconName />
            </div>
          </CartStatsCSS.ItemIcon>
        </CartStatsCSS.Item>
      </CartStatsCSS.Content>
    </CartStatsCSS.Container>
  );
}

export default CardStats;
