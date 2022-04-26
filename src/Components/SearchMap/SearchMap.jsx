import React from 'react';
import { SearchMapCSS } from './SearchMap.styles';

function SearchMap() {
  const { Move, Container, MoveContentSearch, MoveLabel, MoveSpan, Spinner, SpinnerButton } =
    SearchMapCSS;

  return (
    <Container>
      <Spinner>
        <div style={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 6px 16px' }}>
          <SpinnerButton>
            <div>
              <span>
                <span />
                <span />
                <span />
              </span>
            </div>
          </SpinnerButton>
        </div>
      </Spinner>
      <Move>
        <div style={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 6px 16px' }}>
          <div>
            <MoveLabel>
              <MoveSpan>
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
              </MoveSpan>
              <MoveContentSearch>
                <span>Search as I move the map</span>
              </MoveContentSearch>
            </MoveLabel>
          </div>
        </div>
      </Move>
    </Container>
  );
}

export default SearchMap;
