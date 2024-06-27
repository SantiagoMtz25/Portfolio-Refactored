import './Dropdown.css';

interface DropdownProps {
  title: string;
  description: string;
  isOpen: boolean;
  openDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, description, isOpen, openDropdown }) => {
  return (
    <div className="values-dropdown" onClick={openDropdown}>
      <div className="v-dropdown">
        <i className={`fa-solid fa-plus ${isOpen ? 'rotate' : ''}`}></i>
        <p>{title}</p>
      </div>
      <div className={`dropdown-content ${isOpen ? 'visible' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Dropdown;
