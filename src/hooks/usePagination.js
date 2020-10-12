import { useState, useEffect } from "react";

const usePagination = (todosLength, initialRowsPerPage) => {
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    todosLength < initialRowsPerPage ? todosLength : initialRowsPerPage
  );

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    const newStartIndexCandidate = startIndex + newRowsPerPage;
    setEndIndex(
      newStartIndexCandidate > todosLength
        ? todosLength
        : newStartIndexCandidate
    );
    setRowsPerPage(newRowsPerPage);
  };

  const handleNext = () => {
    if (endIndex < todosLength) {
      setStartIndex(startIndex + rowsPerPage);
      const newEndIndexCandidate = endIndex + rowsPerPage;
      setEndIndex(
        newEndIndexCandidate > todosLength ? todosLength : newEndIndexCandidate
      );
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      if (startIndex < rowsPerPage) {
        setStartIndex(0);
        setEndIndex(rowsPerPage);
      } else {
        setEndIndex(startIndex);
        setStartIndex(startIndex - rowsPerPage);
      }
    }
  };

  useEffect(() => {
    if (startIndex + 1 > todosLength) {
      if (startIndex < rowsPerPage) {
        setStartIndex(0);
        setEndIndex(todosLength < rowsPerPage ? todosLength : rowsPerPage);
      } else {
        setEndIndex(startIndex);
        setStartIndex(startIndex - rowsPerPage);
      }
    } else if (todosLength - (startIndex + 1) < rowsPerPage) {
      setEndIndex(todosLength);
    }
  }, [startIndex, endIndex, rowsPerPage, todosLength]);

  return {
    rowsPerPage,
    startIndex,
    endIndex,
    handleChangeRowsPerPage,
    handleNext,
    handlePrev,
  };
};

export default usePagination;
