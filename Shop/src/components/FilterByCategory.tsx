interface Props {
  searchCategory: (category: string) => void;
}

const FilterByCategory = ({ searchCategory }: Props) => {
  return (
    <select className='form-select' onChange={(e) => searchCategory(e.target.value)}>
      <option value="" >All</option>
      <option value='kuchnia'>Kuchnia</option>
      <option value='ubrania'>Ubrania</option>
      <option value='bizuteria'>Bizuteria</option>
    </select>
  );
};

export default FilterByCategory;
