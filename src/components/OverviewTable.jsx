import React, {useMemo, useEffect, useState} from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce,  usePagination, useRowSelect } from "react-table";
import { useRowSelectColumn } from '@lineup-lite/hooks';
import { customersData } from '../data/dummy';
import { Button, PageButton } from '../contexts/Button'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { classNames } from '../contexts/utils';
import { GrFormSearch } from 'react-icons/gr';
import Pagination from './Pagination';

 export function GlobalFilter({
    globalFilter,
    setGlobalFilter,
    placeholder
  }) {
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <span className='flex justify-between  pt-10 pb-10 '>
       <GrFormSearch fontSize={38} color='gray' className='absolute text-center text-gray-500 mt-3 ml-3 min-w-40'/>
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className='w-8/12 rounded-xl border p-4 text-gray-500 cursor-pointer' 
          type="search"  
          placeholder={placeholder}
        />
         <button 
        className='bg-white rounded-xl p-4 border-1 cursor-pointer'>
            Export
        </button>
      </span>
    )
  };  

export function StatusPill({ value }) {
  const status = value ? value : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("Successful") ? "bg-green-100 text-green-700" : null,
        status.startsWith("Progressing") ? "bg-yellow-100 text-yellow-700" : null,
        status.startsWith("Failed") ? "bg-red-100 text-red-700" : null
      )}
    >
      {status}
    </span>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">
          {row.original[column.numAccessor]}
        </div>
      </div>
    </div>
  );
}



const OverviewTable = ({placeholder}) => {

  const data = useMemo(() => customersData(), []);
  const [current, setCurrent] = useState(1);
  
    const columns = useMemo(() => [
      {
        Header: "Customer",
        accessor: "customer",
        Cell: AvatarCell,
       imgAccessor: "imgUrl",
       numAccessor: "customerNumber",
      },
      {
        Header: "Deposit",
        accessor: "deposit",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Voucher NO.",
        accessor: "voucherNo",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
        Cell: StatusPill,
      },
     
], []);

    const { getTableProps,
            getTableBodyProps, 
            headerGroups, 
            prepareRow,
            page, 
            canPreviousPage,
            canNextPage,
            pageCount,
            gotoPage,
            pageIndex,
            pageSize,
            nextPage,
            previousPage,
            pageOptions,
            setPageSize,
            state, 
            preGlobalFilteredRows,
            setGlobalFilter,  } =
            useTable({
            columns,
            data,
            },
            useGlobalFilter,
            usePagination, 
            useRowSelect,
            useRowSelectColumn
            );
     console.log(current);
            useEffect(() => {
                  setPageSize(5);
            }, [setPageSize]);
            
        
  return (
    <div>
        <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        placeholder={placeholder}
         />
         <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div  className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-10">
                      {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                  <th {...column.getHeaderProps()}
                                  className="px-6 py-5 text-left text-20 font-medium text-gray-400 uppercase rounded-sm tracking-wider"
                                  >
                                    {column.render("Header")}
                                    {column.id === 'selection' && column.render('Summary')}
                                    </th>
                              ))}
                          </tr>
                      ))}
                  </thead>
                  <tbody {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200">
                    {page.map((row, i) => {
                      prepareRow(row);
                      return (
                          <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()} className="px-6 py-10 whitespace-nowrap">{cell.render("Cell")}</td>
                          })}
                          </tr>
                      );
                      })}
                  </tbody>
                    </table>
                </div>
              </div>
          </div>
         </div>

         <div className="py-3 flex items-center justify-center pt-10">
        <div className="flex-1 flex justify-between md:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
            </span>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <Pagination 
              onPageChange={(page) => setCurrent(page)}
              page={page}
              current={current}
              pageIndex={pageIndex}
              pageSize={pageSize}
              pageCount={pageCount}/>
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => nextPage()}
                disabled={!canNextPage
                }>
                <span className="sr-only">Next</span>
                <HiChevronRight className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <HiChevronRight className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              </nav>
            </div>
          </div>
      </div>

    </div>
  )
}

export default OverviewTable