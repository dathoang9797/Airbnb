import { Table as TableAnt } from 'antd';
import tw, { styled } from 'twin.macro';

const Table = styled(TableAnt)`
  table {
    ${tw`dark:bg-gray-700 border-radius[0px 0px 0 0]`};
  }

  th.ant-table-cell {
    ${tw`text-center bg-transparent border-b-1 border-t-1 font-bold border-[#d5d6d7] color[var(--color-text-light)] `};
  }
  th.ant-table-thead th.ant-table-column-has-sorters {
    cursor: pointer;
    transition: all 0s;
  }

  thead.ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    ${tw`dark:bg-gray-300`};
  }

  tbody.ant-table-tbody > tr > td {
    ${tw`border-bottom[1px solid #d5d6d7] text-center`};
  }

  tbody.ant-table-tbody > tr.ant-table-row-selected > td {
    background: var(--color-primary-blur);
  }

  th.ant-table-cell:first-child .ant-checkbox-checked span.ant-checkbox-inner,
  td.ant-table-cell:first-child .ant-checkbox-checked span.ant-checkbox-inner {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  th.ant-table-cell:first-child .ant-checkbox-checked:after,
  td.ant-table-cell:first-child .ant-checkbox-checked:after,
  input.ant-checkbox-input:focus + span.ant-checkbox-inner,
  label.ant-checkbox-wrapper:hover span.ant-checkbox-inner {
    border-color: var(--color-primary);
  }

  span.ant-checkbox-indeterminate span.ant-checkbox-inner::after {
    background-color: var(--color-primary);
  }

  td.ant-table-cell:first-child td.ant-table-cell:last-child,
  td.ant-table-cell:nth-child(2),
  td.ant-table-cell:nth-child(4),
  td.ant-table-cell:nth-child(5),
  td.ant-table-cell:nth-child(7),
  td.ant-table-cell:nth-child(8) {
    ${tw`text-center`};
  }

  thead.ant-table-thead > tr > th,
  td.ant-table-cell {
    ${tw`px-1 py-2 text-xs`};
    ${tw`md:py-2 md:text-xs`};
    ${tw`lg:py-3 lg:text-xs`};
    ${tw`xl:py-4 xl:text-sm`};
  }

  td.ant-table-cell:last-child div:not(.ant-empty.ant-empty-normal) {
    ${tw`flex items-center justify-evenly`}
  }

  tr {
    color: var(--color-text-light);
  }

  tr:hover {
    ${tw`dark:text-gray-800`};
  }

  ul.ant-table-pagination.ant-pagination {
    ${tw`dark:bg-gray-800`};
  }

  .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis,
  .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis {
    ${tw`dark:text-white`};
  }

  .ant-image-mask {
    ${tw`rounded-lg`};
  }

  .ant-table-filter-trigger {
    ${tw`m-0`}
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
     {
      ${tw`border-[var(--color-primary)] box-shadow[0 0 0 2px rgb(var( --color-primary-rgb-without-semi-colon) / 20%)]`}
    }
  }

  .ant-table-filter-trigger.active,
  .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active,
  .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon,
  .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon,
  .ant-pagination-item-active a,
  .ant-pagination-item:hover a {
    ${tw`text-[var(--color-primary)]`}
  }

  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    ${tw`text-[var(--color-primary)] border-[var(--color-primary)]`}
  }

  .ant-pagination-item-active,
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
  .ant-pagination-item:hover {
    ${tw`border-[var(--color-primary)]`}
  }

  @media screen and (max-width: 730px) {
    table {
      ${tw`border-0`};
    }

    caption {
      ${tw`font-size[1.3em] border-0`};
    }

    thead {
      ${tw`relative`};
    }

    th {
      ${tw`hidden`};
    }

    th.ant-table-column-has-sorters,
    th.ant-table-selection-column {
      ${tw`p-0 table-cell border-b-0 border-t-0 font-size[0.8em]`}
    }

    tr {
      ${tw` block margin-bottom[0.625em]`};
    }

    td:first-child {
      ${tw` border-t-2  border-[#ddd] block  font-size[0.8em] text-align[left !important] padding-left[15px !important]`};
    }

    td.ant-table-cell:last-child {
      ${tw`border-b-2 border-[#ddd]`};
    }

    td.ant-table-cell {
      ${tw`border-b-1 border-[#ddd] block font-size[0.8em] text-align[right!important] padding-right[15px!important]`};
    }

    td.ant-table-cell::before {
      ${tw`font-bold uppercase absolute left-[15px] top[50%] -translate-y-1/2 content[attr(data-label)]`};
    }

    td.ant-table-cell:last-child div:not(.ant-empty.ant-empty-normal) {
      ${tw`block`}
    }
  }

  @media only screen and (max-width: 576px) {
    .ant-pagination-options {
      display: inline-block;
    }
  }
`;

export const TableCSS = {
  Table,
};
