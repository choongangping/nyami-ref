import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarItem.module.css';

const SidebarItem = ({ link, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <div className={styles.sidebar}>
      <li className={isActive ? styles.active : ''}>
        <Link to={link}>
          <Icon />
          {label}
        </Link>
      </li>
    </div>
  );
};

export default SidebarItem;
