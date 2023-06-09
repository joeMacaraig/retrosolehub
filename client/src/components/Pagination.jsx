export const Pagination = ({
    itemPerPage,
    totalItems,
    paginate,
    current,
    prev,
    next,
  }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="w-full">
        <ul className="flex justify-center items-center">
          <li>
            <a
              onClick={() => prev(current)}
              href={`#${current}`}
              class="block px-3 py-2 leading-tight  border border-gray-300 rounded-l-lg "
            >
              <span class="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li
              key={num}
              className=" w-[2rem] h-[2rem] flex justify-center items-center m-1"
            >
              <a
                onClick={() => paginate(num)}
                href={`#${num}`}
                className="px-3 py-2 leading-tight  border border-gray-300 "
              >
                {num}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => next(current)}
              href={`#${current}`}
              class="block px-3 py-2 leading-tight  border border-gray-300 rounded-r-lg "
            >
              <span class="sr-only">Next</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    );
  };
  