import { Link } from 'react-router-dom';
import Button from '../button/Button';
import BasicDropdown from './BasicDropdown';

const CategoryDropdown = ({
  label,
  data,
  isOpen,
  onClose,
  dropdownRef,
  buttonRef,
  onItemClick,
}) => {
  return (
    <div>
      <Button onClick={onClose} ref={buttonRef}>
        {label}
      </Button>
      <BasicDropdown
        isOpen={isOpen}
        onClose={onClose}
        dropdownRef={dropdownRef}
        buttonRef={buttonRef}
      >
        {data.map((item) => (
          <Link key={item.id} onClick={() => onItemClick(item.content)}>
            {item.content}
          </Link>
        ))}
      </BasicDropdown>
    </div>
  );
};

export default CategoryDropdown;
