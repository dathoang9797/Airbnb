import React from 'react';
import { SeachMapCSS } from './SearchMap.styles';

function SearchMap() {
  return (
    <SeachMapCSS.Container>
      <SeachMapCSS.Spinner>
        <div style={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 6px 16px' }}>
          <SeachMapCSS.SpinnerButton>
            <div>
              <span>
                <span />
                <span />
                <span />
              </span>
            </div>
          </SeachMapCSS.SpinnerButton>
        </div>
      </SeachMapCSS.Spinner>
      <SeachMapCSS.Move>
        <div style={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 6px 16px' }}>
          <div>
            <SeachMapCSS.MoveLabel>
              <SeachMapCSS.MoveSpan>
                <input type='checkbox' defaultChecked />
                <span>
                  <span>
                    <svg
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                    >
                      <path fill='none' d='m4 16.5 8 8 16-16' />
                    </svg>
                  </span>
                </span>
              </SeachMapCSS.MoveSpan>
              <SeachMapCSS.MoveContentSearch>
                <span>Search as I move the map</span>
              </SeachMapCSS.MoveContentSearch>
            </SeachMapCSS.MoveLabel>
          </div>
        </div>
      </SeachMapCSS.Move>
    </SeachMapCSS.Container>
  );
}

export default SearchMap;
