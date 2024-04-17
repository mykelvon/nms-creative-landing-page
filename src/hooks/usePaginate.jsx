import { useMemo } from 'react';
import { useState, useEffect } from 'react';

const escapeRegExp = (value) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const usePaginate = ({ list = [], current_page = 1, per_page = 15, searchText = '' }) => {

  const paginatedData = useMemo(() => {
    let filteredRows = [...list] ?? [];
    
    const searchRegex = new RegExp(escapeRegExp(searchText), 'i');
    if (searchText != '') {
      filteredRows = list.filter((row) => {
        return Object.keys(row).some((field) => {
          return searchRegex.test(row[field]?.toString());
        });
      });
    }
    const offset_num = (current_page - 1) * per_page;
    const offset = offset_num <= 0 ? 0 : offset_num;
    let total_num_data = filteredRows?.length ?? 0;

    filteredRows = filteredRows.slice(offset).slice(0, per_page);
    const total_pages = Math.ceil(total_num_data / per_page);
    const paginateItem = {
      page: current_page,
      per_page: 15,
      current_page: current_page,
      first_page: 1,
      last_page: total_pages,
      prev_page: current_page - 1 <= 0 ? 1 : current_page - 1,
      next_page: (total_pages > current_page) ? current_page + 1 : null,
      total: list?.length ?? 0,
      total_pages: total_pages,
      data: filteredRows ?? []
    };
    return paginateItem;
  }, [list, current_page, searchText]);
  return [paginatedData,];
};