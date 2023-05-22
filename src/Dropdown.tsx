import React, { useState, useRef, useEffect } from 'react';

import Button from './Button';

import './Dropdown.css';

interface DropdownProps {
  list: string[];
  onChange: (item: string) => void;
  selected: string;
}

function Dropdown({
  list,
  onChange,
  selected,
}: DropdownProps): JSX.Element {
  const dropdown = useRef<HTMLDivElement>(null);
  const [blink, setBlink] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selected);

  function handleClickButton(event: React.MouseEvent<HTMLButtonElement>): void {
    setBlink(!blink);
  }

  function handleClickItem(item: string): void {
    setSelectedItem(item); // 선택한 값 업데이트
    setBlink(false); // 목록 닫기
    onChange(item); // 바꾸고자 하는 값을 위에 넘겨주기
  }

  function handleClickDocument(event: MouseEvent): void {
    // 현재의(current) 드롭다운(dropdown)이 이벤트가 일어난 위치(event.target) 위에 있니?
    if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
      setBlink(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickDocument);

    return () => {
      document.removeEventListener('click', handleClickDocument);
    };
  }, []);

  useEffect(() => {
    setSelectedItem(selected);
  }, [selected]);

  return (
    <div ref={dropdown} className="dropdown">
      <Button className="btn-sub" onClick={handleClickButton}>
        {selectedItem || '짜잔'}
      </Button>
      {blink === true && (
        <ul className="menu-md">
          {list.map((item) => (
            <li key={item}>
              <button
                className={selectedItem === item ? 'on' : ''}
                onClick={() => handleClickItem(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;