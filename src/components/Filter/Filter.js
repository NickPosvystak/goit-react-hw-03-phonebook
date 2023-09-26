import css from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={css.inputFilter}>
      {' '}
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
};
export default Filter;
