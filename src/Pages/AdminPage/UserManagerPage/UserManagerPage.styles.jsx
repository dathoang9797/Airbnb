import * as Variable from '@Assets/Styles/Variables';
import { Table as TableAnt } from 'antd';
import tw, { styled } from 'twin.macro';

const { colorGreyTextLight } = Variable;

const Container = styled.div``;

const Table = styled(TableAnt)`
  table {
    ${tw`dark:bg-gray-700`}
    border-radius: 0px 0px 0 0;
  }

  thead.ant-table-thead > tr > th {
    background: transparent;
    color: ${colorGreyTextLight};
    border-bottom: 1px solid #d5d6d7;
    border-top: 1px solid #d5d6d7;
    font-weight: bold;
    ${tw` text-center`}
    ${tw`sm:px-1 sm:py-1 sm:text-xs `};
    ${tw`md:px-1 md:py-2  md:text-xs `};
    ${tw`lg:px-1 lg:py-3  lg:text-xs `};
    ${tw`xl:px-1.5 xl:py-4  xl:text-sm `};
  }

  thead.ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    ${tw`dark:bg-gray-300`}
  }

  tbody.ant-table-tbody > tr > td {
    border-bottom: 1px solid #d5d6d7;
  }

  td.ant-table-cell:first-child,
  td.ant-table-cell:last-child,
  td.ant-table-cell:nth-child(4),
  td.ant-table-cell:nth-child(5),
  td.ant-table-cell:nth-child(7),
  td.ant-table-cell:nth-child(8) {
    ${tw`text-center`}
  }
  td.ant-table-cell {
    ${tw`sm:px-1 sm:py-2 sm:text-xs sm:break-all`};
    ${tw`md:px-1 md:py-2  md:text-xs md:break-all`};
    ${tw`lg:px-1 lg:py-3  lg:text-xs lg:break-all`};
    ${tw`xl:px-1 xl:py-4  xl:text-sm xl:break-all`};
  }
  tr {
    color: ${colorGreyTextLight};
  }
  tr:hover {
    ${tw`dark:text-gray-800`}
  }

  ul.ant-table-pagination.ant-pagination {
    ${tw`dark:bg-gray-800`}
  }

  .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis,
  .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis {
    ${tw`dark:text-white`}
  }
`;

const ButtonShowProfile = styled.button`
  ${tw`inline-block  border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded  hover:bg-green-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out `}
  ${tw`sm:px-1 sm:py-2  sm:m-0 sm:mb-1 sm:mr-1 sm:text-[10px]`}
  ${tw`md:px-1 md:py-2  md:m-0 md:mb-1 md:mr-1 md:text-[10px]`}
  ${tw`lg:px-3 lg:py-2 lg:mr-1 lg:mb-1  lg:text-xs`}
  ${tw`xl:px-3 xl:py-2 xl:mr-1 xl:mb-0 xl:text-xs`}
`;

const ButtonEdit = styled.button`
  ${tw`inline-block  border-2 border-blue-600 text-blue-600 font-bold text-xs leading-tight uppercase rounded hover:bg-blue-600  hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out `}
  ${tw`sm:px-1 sm:py-2  sm:m-0 sm:mb-1 sm:mr-1 sm:text-[10px]`}
  ${tw`md:px-1 md:py-2  md:m-0 md:mb-0 md:mr-1 md:text-[10px]`}
  ${tw`lg:px-3 lg:py-2 lg:mb-0 lg:mr-1 lg:text-xs`}
  ${tw`xl:px-3 xl:py-2  xl:mb-0 xl:mr-1 xl:text-xs`}
`;

const ButtonDelete = styled.button`
  ${tw`inline-block  border-2 border-red-600 text-red-600 font-bold text-xs leading-tight uppercase rounded hover:bg-red-600 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out `}
  ${tw`sm:px-1 sm:py-2 sm:m-0 sm:mb-1 sm:mr-0 sm:text-[10px]`}
  ${tw`md:px-1 md:py-2 md:m-0 md:mb-0 md:mr-0 md:text-[10px]`}
  ${tw`lg:px-3 lg:py-2 lg:mb-0 lg:mr-0 lg:text-xs`}
  ${tw`xl:px-3 xl:py-2  xl:mb-0 xl:mr-0 xl:text-xs`}
`;

export const UserManagerPageCSS = {
  Table,
  Container,
  ButtonDelete,
  ButtonEdit,
  ButtonShowProfile,
};
