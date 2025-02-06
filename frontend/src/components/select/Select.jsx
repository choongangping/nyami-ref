import styles from './Select.module.css';

const Select = ({
  options,
  value,
  onChange,
  placeholder = '선택하세요',
  disabled = false,
  customStyles = {},
}) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      style={customStyles}
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export default Select;
