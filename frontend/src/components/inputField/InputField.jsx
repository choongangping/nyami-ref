import React from 'react';
import styles from './InputField.module.css';

// 대부분의 현대 React 프로젝트에서는 const와 화살표 함수를 사용하는 것을 선호합니다. 이유는 다음과 같습니다:
// 일관성: 대부분의 ES6 코드베이스에서는 const를 기본으로 사용합니다.
// 간결함: 화살표 함수는 코드를 더 깔끔하게 만듭니다.
// 명확한 범위: const로 선언하면, 해당 컴포넌트는 스코프 내에서만 사용됩니다.
const InputField = ({ customStyles, className, ...props }) => {
  return <input {...props} style={customStyles} className={className} />;
};

// const InputField = ({ type, name, placeholder, customStyles }) => {
//   return (
//     <input
//       type={type}
//       name={name}
//       placeholder={placeholder}
//       style={customStyles}
//       className={styles.input}
//     />
//   );
// };

export default InputField;
